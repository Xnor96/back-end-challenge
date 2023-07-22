// utils/calculateSHA1Hash.js
const fs = require('fs');
const crypto = require('crypto');

function calculateSHA1Hash(filePath) {
  const output = fs.readFileSync(filePath, 'utf8');
  const hash = crypto.createHash('sha1').update(output).digest('hex');
  console.log('SHA1 hash:', hash);
}

module.exports = {
  calculateSHA1Hash,
};
