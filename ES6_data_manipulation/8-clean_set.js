export default function cleanSet(set, startString) {
  let str = '';
  const arr = Array.from(set);
  if (startString !== '') {
    for (const i of set) {
      if (i.startsWith(startString)) {
        if (i !== arr[0]) {
          str += '-';
        }
        str += i.substring(3);
      }
    }
  }
  return str;
}
