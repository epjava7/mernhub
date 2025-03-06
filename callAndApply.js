// Create two examples and set the context using student and a list of subjects attended by students
// Use call and apply to print the subjects attended by students

let getSubjects = function (...subjects) {
  console.log(`${this.name} is attending ${subjects.length} subjects:`)
  for (let subject of subjects) {
    console.log(`subject`)
  }
}

let student1 = {
  name: 'Bob',
}

getSubjects.call(student1, '1', '2', '3', '4')

let subjects = ['Math', 'Philosophy', 'History']

getSubjects.apply(student1, subjects)
