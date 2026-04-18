import fs from 'fs';
import path from 'path';

const wikiDir = 'wiki';
const allFiles = [];

function readDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      readDir(fullPath);
    } else if (fullPath.endsWith('.md')) {
      allFiles.push(fullPath);
    }
  }
}

if (fs.existsSync(wikiDir)) {
  readDir(wikiDir);
} else {
  console.error(`Directory ${wikiDir} does not exist.`);
  process.exit(1);
}

const fileBasenames = allFiles.map(f => path.basename(f, '.md'));
const fileContentMap = {};
allFiles.forEach(f => {
  fileContentMap[f] = fs.readFileSync(f, 'utf-8');
});

console.log(`\n🔍 开始 Wiki 健康检查... (共 ${allFiles.length} 个文件)\n`);

let hasError = false;

// 1. 检查死链 (Broken Links)
console.log('🔗 检查死链...');
const linkRegex = /\[\[(.*?)(?:\|.*?)?\]\]/g;
allFiles.forEach(f => {
  const content = fileContentMap[f];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const linkTarget = match[1].split('#')[0].trim(); // 去掉标题锚点
    if (!linkTarget) continue; // 忽略本地锚点如 [[#Heading]]
    
    // 提取文件名部分 (例如 "01-Modules/策略详解-StandardICT.md" 变成 "策略详解-StandardICT")
    const targetName = path.basename(linkTarget, '.md');
    
    if (!fileBasenames.includes(targetName)) {
      console.log(`   ❌ [死链] 在文件 ${f} 中发现不存在的链接: [[${match[1]}]]`);
      hasError = true;
    }
  }
});

// 2. 检查 Frontmatter
console.log('\n📄 检查 Frontmatter...');
allFiles.forEach(f => {
  if (f === 'wiki/index.md' || f === 'wiki/log.md') return; // index 和 log 可以没有
  const content = fileContentMap[f];
  if (!content.startsWith('---')) {
    console.log(`   ⚠️ [缺失 Frontmatter] 文件: ${f}`);
    hasError = true;
  }
});

// 3. 孤岛文件 (Orphans)
console.log('\n🏝️  检查孤岛文件...');
const linkedTargets = new Set();
allFiles.forEach(f => {
  const content = fileContentMap[f];
  let match;
  while ((match = linkRegex.exec(content)) !== null) {
    const linkTarget = match[1].split('#')[0].trim();
    if (linkTarget) {
        linkedTargets.add(path.basename(linkTarget, '.md'));
    }
  }
});

allFiles.forEach(f => {
  if (f === 'wiki/index.md' || f === 'wiki/log.md') return;
  const baseName = path.basename(f, '.md');
  if (!linkedTargets.has(baseName)) {
    console.log(`   ⚠️ [孤岛文件] 没有被其他文件引用: ${f}`);
  }
});

if (!hasError) {
  console.log('\n✅ Wiki 健康检查通过！没有发现严重问题。');
} else {
  console.log('\n❗ 检查完毕，发现一些问题，请参考上述日志。');
}
