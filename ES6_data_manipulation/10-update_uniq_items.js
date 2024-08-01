export default function updateUniqueItems(updateMap) {
  if (!(updateMap instanceof Map)) {
    throw new Error('Cannot process');
  }
  for (const i of updateMap) {
    if (i[1] === 1) {
      updateMap.set(i[0], 100);
    }
  }
}
