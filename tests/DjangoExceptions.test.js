import test from 'ava';
import parse from '../src/DjangoExceptions';

test('It should be able to parse a simple non-nested validation structure;', t => {

    const messages = {
        'name': ['Must be at least 16 characters.'],
        'email': ['Must be at least 32 characters.', 'Must be a valid e-mail address.']
    };

    t.deepEqual(parse(messages), [
        { field: ['name'], messages: ['Must be at least 16 characters.' ]},
        { field: ['email'], messages: ['Must be at least 32 characters.', 'Must be a valid e-mail address.' ]}
    ]);

});

test('It should be able to parse a semi-complex nested validation structure;', t => {

    const messages = {
        person: {
            'name': ['Must be at least 16 characters.'],
            'email': ['Must be at least 32 characters.', 'Must be a valid e-mail address.']
        }
    };

    t.deepEqual(parse(messages), [
        { field: ['person', 'name'], messages: ['Must be at least 16 characters.' ]},
        { field: ['person', 'email'], messages: ['Must be at least 32 characters.', 'Must be a valid e-mail address.' ]}
    ]);

});

test('It should be able to parse a complex nested validation structure;', t => {

    const messages = {
        person: {
            'name': {
                'firstName': ['Must be at least 16 characters.'],
                'lastName': ['Must be at least 32 characters.']
            },
            'email': ['Must be at least 32 characters.', 'Must be a valid e-mail address.']
        },
        address: {
            'city': ['This field is required.']
        },
        'personId': ['This field is required.']
    };

    t.deepEqual(parse(messages), [
        { field: ['person', 'name', 'firstName'], messages: ['Must be at least 16 characters.' ]},
        { field: ['person', 'name', 'lastName'], messages: ['Must be at least 32 characters.' ]},
        { field: ['person', 'email'], messages: ['Must be at least 32 characters.', 'Must be a valid e-mail address.' ]},
        { field: ['address', 'city'], messages: ['This field is required.' ]},
        { field: ['personId'], messages: ['This field is required.'] }
    ]);

});
