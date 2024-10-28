import { test, expect } from '@jest/globals';
import { ArrayBufferConverter } from '../ArrayBufferConverter';
import { getBuffer } from '../getBuffer';

test('Testing the `ArrayBufferConverter` class', () => {
  const buffer = getBuffer();
  const arrayBufferConverter = new ArrayBufferConverter();
  arrayBufferConverter.load(buffer);
  const expected = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
  expect(arrayBufferConverter.toString()).toBe(expected);
});