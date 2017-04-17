'use strict';
var stringWidth = require('string-width');

module.exports = function (str) {
	return Math.max.apply(null, str.split('\n').map(stringWidth));
};

