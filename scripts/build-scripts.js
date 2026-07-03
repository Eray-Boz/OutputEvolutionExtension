const esbuild = require('esbuild');
const path = require('path');

async function build() {
  try {
    // Build content script
    await esbuild.build({
      entryPoints: [path.resolve(__dirname, '../src/content/index.ts')],
      bundle: true,
      minify: true,
      sourcemap: false,
      target: ['chrome100'],
      outfile: path.resolve(__dirname, '../dist/scripts/content.js'),
    });
    console.log('✓ Content script compiled successfully.');

    // Build background script
    await esbuild.build({
      entryPoints: [path.resolve(__dirname, '../src/background/index.ts')],
      bundle: true,
      minify: true,
      sourcemap: false,
      target: ['chrome100'],
      outfile: path.resolve(__dirname, '../dist/scripts/background.js'),
    });
    console.log('✓ Background script compiled successfully.');
  } catch (error) {
    console.error('esbuild compilation failed:', error);
    process.exit(1);
  }
}

build();
