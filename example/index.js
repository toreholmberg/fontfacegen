const fs = require('fs');
const path = require('path');
const child = require('child_process');

const fontfacegen = require('../src/fontfacegen.js');

const sourceDir = 'fonts/';
const destDir = 'generated/';

child.execSync(`rm -rf ${destDir}`);

fs.readdirSync(sourceDir)
  .filter(file => ['.ttf', '.otf'].indexOf(path.extname(file)) > -1)
  .forEach(file => {
    const sourceFile = path.join(sourceDir, file);
    fontfacegen({
      source: sourceFile,
      dest: destDir,
      css_fontpath: '/a/path/where/fonts/live',
    });
  });
