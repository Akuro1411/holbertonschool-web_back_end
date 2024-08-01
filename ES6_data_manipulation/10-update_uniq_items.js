export default function updateUniqueItems(updateMap) {
  if (!Object.getPrototypeOf(updateMap) === Map.prototype) {
    throw Error('Cannot process')
  }
  for (const i of updateMap){
    if (i[1] === 1) {
      updateMap.set(i[0], 100);
    }
  }
}
