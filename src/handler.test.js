'use strict';

const mod = require('./handler');

const jestPlugin = require('serverless-jest-plugin');
const lambdaWrapper = jestPlugin.lambdaWrapper;
const wrapped = lambdaWrapper.wrap(mod, { handler: 'hello' });

describe('hello', () => {
  it('implement tests here', () => {
    return wrapped.run({queryStringParameters: { a: 'b'}}).then((response) => {
      expect(response.statusCode).toEqual(200);
      expect(JSON.parse(response.body)).toEqual({"message": "Your function executed successfully!", "params": {"a": "b"}})
    });
  });
});
