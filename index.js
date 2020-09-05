'use strict';
const stringWidth = require('string-width');

const widestLine = input => Math.max(0, ...input.split("\n").map(line => stringWidth(line)));

module.exports = widestLine;
// TODO: remove this in the next major version
module.exports.default = widestLine;
