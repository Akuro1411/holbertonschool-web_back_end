export default function getStudentsByLocation(arr, city) {
  const newArray = arr.filter((row) => row.location === city)
  return newArray;
}
