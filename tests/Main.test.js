import test from 'ava';
import { parse } from '../dist/main';

test('It should be able to parse a simple non-nested validation structure;', t => {

    const messages = {
        'name': ['Must be at least 16 characters.'],
        'email': ['Must be at least 32 characters.', 'Must be a valid e-mail address.']
    };

    // t.deepEqual(parse(messages), [
    //     { field: ['name'], messages: ['Must be at least 16 characters.' ]},
    //     { field: ['email'], messages: ['Must be at least 32 characters.', 'Must be a valid e-mail address.' ]}
    // ]);
    
    console.log(parse(messages));

});

test('It should be able to parse a semi-complex nested validation structure;', t => {

    const messages = {
        person: {
            'firstName': ['Must be at least 16 characters.'],
            'email': ['Must be at least 32 characters.', 'Must be a valid e-mail address.']
        }
    };

    // t.deepEqual(parse(messages), [
    //     { field: ['person', 'name'], messages: ['Must be at least 16 characters.' ]},
    //     { field: ['person', 'email'], messages: ['Must be at least 32 characters.', 'Must be a valid e-mail address.' ]}
    // ]);

    console.log(parse(messages));

    // t.deepEqual(parse(messages), [
    //     { field: ['name'], messages: ['Must be at least 16 characters.' ]},
    //     { field: ['email'], messages: ['Must be at least 32 characters.', 'Must be a valid e-mail address.' ]}
    // ]);

});
