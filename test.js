import test from 'ava';
import fn from './';

test(t => {
	t.is(fn('a'), 1);
	t.is(fn('a\nbe'), 2);
	t.is(fn('古\n\u001b[1m@\u001b[22m'), 2);
	t.end();
});
