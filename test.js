import test from 'ava';
import m from '.';

test(t => {
	t.is(m('a'), 1);
	t.is(m('a\nbe'), 2);
	t.is(m('古\n\u001B[1m@\u001B[22m'), 2);
});
