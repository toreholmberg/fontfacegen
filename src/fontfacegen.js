const path = require('path');
const mkdirp = require('mkdirp').sync;
const configure = require('./configure.js');
const ttf = require('./ttf.js');
const ttf2woff = require('./ttf2woff.js');
const ttf2woff2 = require('./ttf2woff2.js');
const stylesheets = require('./stylesheets.js');
const json = require('./json.js');

module.exports = options => {
  const config = configure(options);

  mkdirp(config.dest_dir);

  if (config.css) {
    mkdirp(path.dirname(config.css));
  }

  ttf(config.source, config.ttf, config.name, config); // TODO: better options handling
  ttf2woff(config.ttf, config.woff);
  ttf2woff2(config.ttf, config.woff2);
  stylesheets(config);
  json(config);
};
