export default function updateStudentGradeByCity(obj, city, newGrades) {
  if (!Array.isArray(obj) || !Array.isArray(newGrades))
  {
    return [];
  }
  const arr = obj.filter((row) => row.location === city)
  const secondArr = arr.map((row) => 
  {
    for (const line of newGrades){
      if (row.id === line.studentId) {
        row.grade = line.grade;
        break;
      }
      else {
        row.grade = 'N/A'
      }
    }
    return row
  }
);
  
  return secondArr;
}
