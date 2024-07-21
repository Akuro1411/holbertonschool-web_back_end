export default function createReportObject(employeesList) {
  const object = employeeslist;
  object.allEmployees = function(){
    return object;
  };
  object.getNumberOfDepartments = function(obj){
    let total = 0;
    for (const i of obj){
      total += 1;
    };
    return total
  };
  return object;
}
