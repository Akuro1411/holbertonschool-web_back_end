export default function getListStudentIds(obj) {
  if (Array.isArray(obj)) {
    const newArray = obj.map((row) => row.id);
    return newArray;
  }
  return [];
}
