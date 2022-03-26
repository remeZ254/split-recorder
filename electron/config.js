const nconf = require("nconf");

module.exports.initConfiguration = () => nconf.file(`${__dirname}/electron-launcher.json`);

module.exports.getConfig = (key) => nconf.get(key)
