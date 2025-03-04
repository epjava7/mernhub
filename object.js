let person1 = {
  name: 'John',
  age: 30,
  weight: 150,
  height: 5.3,
}

let person2 = Object.create(person1) // creates a shallow copy
person2.height = 7.5 // Overwrite property, changes are reflected in person1

let person3 = Object.create(person2) // creates a deep copy
person3.name = 'Jack'
person3.age = 50
person3.weight = 250
person3.height = 8.5
person3.nativeLanguage = 'English' // add new property

//////////////

let ball = {
  color: 'red',
  size: 5,
}

let stadium = {
  name: 'stadium1',
  location: 'city1',
  capacity: 90000,
}

let matchInfo = {
  date: '2025-6-1',
  time: '15:00',
  teams: ['Team A', 'Team B'],
}

// gameDetails = { ball, stadium, matchInfo } // shallow copy merge
gameDetails = Object.assign({}, ball, stadium, matchInfo) // deep copy merge

////////////////

module.exports = {
  person1,
  person2,
  person3,
  ball,
  stadium,
  matchInfo,
  gameDetails,
} // export the objects
