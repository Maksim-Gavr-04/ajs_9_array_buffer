export class ArrayBufferConverter {
  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    const bufferView = new Uint16Array(this.buffer);
    const str = String.fromCharCode(...bufferView);
    return str;
  }
}