/* eslint-disable no-console */

const fs = require('fs');
const path = require('path');
const child = require('child_process');

const fontfacegen = require('../src/fontfacegen.js');

const sourceDir = 'fonts/';
const destDir = 'generated/';

child.execSync(`rm -rf ${destDir}`);

const files = fs.readdirSync(sourceDir)
  .filter(file => ['.ttf', '.otf'].indexOf(path.extname(file)) > -1);

const startTime = new Date();

files.forEach((file, index) => {
  const sourceFile = path.join(sourceDir, file);
  console.log(`Processing [${index + 1}/${files.length}]: ${sourceFile}`);
  fontfacegen({
    source: sourceFile,
    dest: destDir,
    css_fontpath: '/a/path/where/fonts/live',
  });
});

console.log(`Completed in ${(new Date() - startTime) / 1000}s.`);
console.log(`Generated to ${path.join(__dirname, destDir)}`);
