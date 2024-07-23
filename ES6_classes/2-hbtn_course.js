class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof(name) != String) {
      throw new TypeError("Name must be a string");
    };
    if (typeof(length) != Number) {
      throw new TypeError("Length must be a number");
    };
    if (typeof(students) != [String]) {
      throw new TypeError("Students must be a array of strings");
    };
    this._name = name;
    this._length = length;
    this._students = students;
  }
}
