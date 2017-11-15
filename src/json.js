const fs = require('fs');
const path = require('path');

module.exports = config => {
  const name = config.name;
  const filename = config.collate
    ? path.join(config.css_fontpath, config.basename, config.basename)
    : path.join(config.css_fontpath, config.basename);
  const weight = config.weight;
  const style = config.style;

  const woff2 = `${filename}.woff2`;
  const woff = `${filename}.woff`;
  const ttf = `${filename}.ttf`;

  const data = {
    name,
    weight,
    style,
    ttf,
    woff,
    woff2,
  };

  fs.writeFileSync(path.join(config.dest_dir, `${name}.json`), JSON.stringify(data, null, 4));
};
