'use strict';

const semverExistingMax = require('..');

test('Existing max version', async () => {
  const result = await semverExistingMax('semver', '~1.0.5');
  expect(result).toBe('1.0.14');
});

test('Existing max version by given version list', async () => {
  const versions = ['1.0.4', '1.0.5', '1.0.6', '1.0.7', '1.1.2'];
  const result = await semverExistingMax(versions, '~1.0.5');
  expect(result).toBe('1.0.7');
});

test('Invalid dependency name', async () => {
  const result = await semverExistingMax('semver-invalid', '~1.0.5');
  expect(result).toBe(null);
});

test('Invalid given range version', async () => {
  const result = await semverExistingMax('semver', '^20.0.5');
  expect(result).toBe(null);
});
