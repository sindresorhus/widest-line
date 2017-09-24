import test from 'ava';
import fn from './';

test('main', t => {
	t.is(fn('a'), 1);
	t.is(fn('a\nbe'), 2);
	t.is(fn('古\n\u001b[1m@\u001b[22m'), 2);
});

test('using custom string-width', t => {
	function getStringWidth(s) {
		// Dumb, just for tests
		return s.length * 2;
	}

	t.is(fn('a', {getStringWidth}), 2);
	t.is(fn('a\nbe', {getStringWidth}), 4);
	t.is(fn('古\n\u001b[1m@\u001b[22m', {getStringWidth}), 20);
});
