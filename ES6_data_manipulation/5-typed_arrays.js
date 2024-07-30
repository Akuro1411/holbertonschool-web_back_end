export default function createInt8TypedArray(length, position, value) {
  const arr_buff = new ArrayBuffer(length);
  const int8view = new Int8Array(arr_buff);
  if (position > length) {
    throw Error('Position outside range');
  }
  else {
    int8view[position] = value;
  }
  return arr_buff;
}
