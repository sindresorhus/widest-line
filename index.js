'use strict';
const stringWidth = require('string-width');

module.exports = function (str, options) {
	options = options || {};
	options.getStringWidth = options.getStringWidth || stringWidth;

	return Math.max.apply(null, str.split('\n').map(options.getStringWidth));
};
