const fs = require('fs');
const path = require('path');
const archiver = require('archiver');

function zipBuild() {
  const rootDir = path.resolve(__dirname, '..');
  const distDir = path.join(rootDir, 'dist');
  const zipFile = path.join(rootDir, 'OutputEvolution.zip');

  if (!fs.existsSync(distDir)) {
    console.error('Error: dist/ directory does not exist. Run build first.');
    process.exit(1);
  }

  // Remove existing ZIP archive if it exists
  if (fs.existsSync(zipFile)) {
    fs.unlinkSync(zipFile);
  }

  const output = fs.createWriteStream(zipFile);
  const archive = archiver('zip', {
    zlib: { level: 9 } // Maximum compression
  });

  output.on('close', () => {
    const sizeKB = (archive.pointer() / 1024).toFixed(2);
    console.log(`✓ Packaging complete. OutputEvolution.zip created.`);
    console.log(`  File: ${zipFile}`);
    console.log(`  Size: ${sizeKB} KB`);
  });

  archive.on('warning', (err) => {
    if (err.code === 'ENOENT') {
      console.warn(err);
    } else {
      throw err;
    }
  });

  archive.on('error', (err) => {
    throw err;
  });

  archive.pipe(output);
  
  // Append files from dist/ directory directly to the root of the ZIP
  archive.directory(distDir, false);
  
  archive.finalize();
}

zipBuild();
