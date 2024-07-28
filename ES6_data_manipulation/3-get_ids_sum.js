export default function getStudentIdsSum(obj) {
  const initialValue = 0;
  const sumWithInitial = obj.reduce(
    (accumulator, row) => accumulator + row.id,
    initialValue,
  );
  return sumWithInitial;
}
