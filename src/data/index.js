const path = require('path');
const fs = require('fs');

module.exports = function(file) {
  return Object.assign(
    JSON.parse(fs.readFileSync(path.join(__dirname, '_default.json'))),
    JSON.parse(fs.readFileSync(path.join(__dirname, path.basename(file.path).split('.')[0] + '.json')))
  )
}
