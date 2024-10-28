import { ArrayBufferConverter } from './ArrayBufferConverter';
import { getBuffer } from './getBuffer';

// TODO: write code here
const buffer = getBuffer();
const arrayBufferConverter = new ArrayBufferConverter();
arrayBufferConverter.load(buffer);

const str = arrayBufferConverter.toString();
console.log(str);

console.log('app worked!');