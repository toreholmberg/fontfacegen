const fs = require('fs');
const path = require('path');

function css(stylesheet, name, filename, weight, style, woff2, woff) {
  const resultLines = [
    '@font-face {',
    `    font-family: "${name}";`,
    `    src: url(${woff2}) format("woff2"),`,
    `         url(${woff}) format("woff"),`,
  ];

  resultLines.push(
    `    font-style: ${style};`,
    `    font-weight: ${weight};`,
    '}'
  );

  let result = resultLines.join('\n');

  if (fs.existsSync(stylesheet)) result = `\n${result}`;

  fs.appendFileSync(stylesheet, result);
  return result;
}

module.exports = config => {
  const name = config.family;
  const filename = (config.collate)
    ? path.join(config.css_fontpath, config.basename, config.basename)
    : path.join(config.css_fontpath, config.basename);
  const weight = config.weight;
  const style = config.style;

  const woff2 = `"${filename}.woff2"`;
  const woff = `"${filename}.woff"`;
  const ttf = `"${filename}.ttf"`;


  if (config.css) {
    css(config.css, name, filename, weight, style, woff2, woff, ttf);
  }
};
