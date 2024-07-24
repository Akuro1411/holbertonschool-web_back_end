export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof(name) !== "string") {
      throw new TypeError("Name must be a string");
    };
    if (typeof(length) !== "number") {
      throw new TypeError("Length must be a number");
    };
    if (students.every(i => typeof(i) != "string")) {
      throw new TypeError("Students must be a array of strings");
    };
    this._name = name;
    this._length = length;
    this._students = students;
    this.name = name;
    this.length = length;
    this.students = students;
  
  }
  get name() {
    return this._name;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
  
  set name(new_name) {
    if (typeof(new_name) !== "string") {
      throw new TypeError("Name must be a string");
    };
    this._name = new_name;
  }
  set length(new_length) {
    if (typeof(new_length) !== "number") {
      throw new TypeError("Length must be a number");
    };
    this._length = new_length;
  }
  set students(new_students) {
    if (new_students.every(i => typeof(i) != "string")) {
      throw new TypeError("Students must be a array of strings");
    }
    this._students = new_students;
  }
}
