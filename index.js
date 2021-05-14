var binwrap = require("binwrap");
var path = require("path");

var packageInfo = require(path.join(__dirname, "package.json"));
var version = packageInfo.version;
var root = "https://github.com/dprint/dprint/releases/download/" + version;

module.exports = binwrap({
  dirname: __dirname,
  binaries: [
    "dprint"
  ],
  urls: {
    "darwin-x64": root + "/dprint-x86_64-apple-darwin.tar.gz",
    "linux-x64": root + "/dprint-x86_64-unknown-linux-gnu.zip"
  }
});
