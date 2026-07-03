const fs = require('fs');
const path = require('path');

function copyFolderSync(from, to) {
  if (!fs.existsSync(from)) return;
  if (!fs.existsSync(to)) {
    fs.mkdirSync(to, { recursive: true });
  }

  const elements = fs.readdirSync(from);
  for (const element of elements) {
    const fromPath = path.join(from, element);
    const toPath = path.join(to, element);
    const stat = fs.lstatSync(fromPath);

    if (stat.isFile()) {
      fs.copyFileSync(fromPath, toPath);
    } else if (stat.isDirectory()) {
      copyFolderSync(fromPath, toPath);
    }
  }
}

function copyAssets() {
  const rootDir = path.resolve(__dirname, '..');
  const publicDir = path.join(rootDir, 'public');
  const distDir = path.join(rootDir, 'dist');
  // Copy public assets recursively to the output dist directory
  if (fs.existsSync(publicDir)) {
    copyFolderSync(publicDir, distDir);
    console.log('✓ Copied all static assets to dist/.');
  } else {
    console.error('Error: public/ directory was not found.');
    process.exit(1);
  }
}

copyAssets();
