export default function appendToEachArrayValue(array, appendString) {
  let index = 0;
  const arr = array;
  for (const idx of array) {
    const value = idx;
    arr[index] = appendString + value;
    index += 1;
  }

  return arr;
}
