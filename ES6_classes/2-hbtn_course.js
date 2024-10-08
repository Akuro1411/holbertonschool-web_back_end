export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof (name) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof (length) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (students.every((i) => typeof (i) !== 'string')) {
      throw new TypeError('Students must be a array of strings');
    }
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

  set name(newName) {
    if (typeof (newName) !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  set length(newLength) {
    if (typeof (newLength) !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = newLength;
  }

  set students(newStudents) {
    if (newStudents.every((i) => typeof (i) !== 'string')) {
      throw new TypeError('Students must be a array of strings');
    }
    this._students = newStudents;
  }
}
