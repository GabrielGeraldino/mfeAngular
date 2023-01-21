const concat = require("concat");

(async function build() {
  const files = [
    "./www/runtime.js",
    "./www/polyfills.js",
    "./www/main.js"
  ];
  await concat(files, "./www/mfe.js");
})();
