'use strict';
const stringWidth = require('string-width');

module.exports = input => {
	let max = 0;

	for (const line of input.split('\n')) {
		max = Math.max(max, stringWidth(line));
	}

	return max;
};
