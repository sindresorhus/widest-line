'use strict';
const stringWidth = require('string-width');

module.exports = str => Math.max.apply(null, str.split('\n').map(x => stringWidth(x)));

