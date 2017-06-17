import test from 'ava';
import { parse } from '../dist/main';

test('...', t => {
    t.is(parse('Hello Adam'), 'HELLO ADAM');
});
