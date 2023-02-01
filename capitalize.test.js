const { test, expect } = require("@jest/globals");
const capitalize = require('./capitalize.js');

test('capitalize first test', () => {
    expect(capitalize('word')).toEqual('Word');
});

test('capitalize second test', () => {
    expect(capitalize('name')).toEqual('Name');
});

test('capitalize third test', () => {
    expect(capitalize('microverse')).toEqual('Microverse');
});

