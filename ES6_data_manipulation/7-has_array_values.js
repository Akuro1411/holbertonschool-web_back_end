export default function hasValuesFromArray(setObj, arrObj) {
  const bool = arrObj.every((i) => setObj.has(i));
  return bool;
}
