// 1. List of Javascript features

// a. Inserting variables into a string using `` and ${}

let name = 'Eric'
console.log(`Welcome ${name}!`)

// b. A Javascript function with the same name overrides an existing function that is declared earlier
// Overloading is not supported by Javascript

function add(a, b) {
  return a + b
}

function add(a, b, c) {
  return a + b + c
}

console.log(add(1, 2)) // returns nan as it calls add(a, b, c) with c as undefined
console.log(add(1, 2, 3))

// c.
// Javascript can be run async using setTimeout()

setTimeout(function () {
  console.log('a')
}, 100)

setTimeout(function () {
  console.log('a')
}, 50)

// d.
// ... allows for a function to handle calls with varying arugments

function testfunc(...args) {
  return args.length
}

// e.
// Closure. Functions keep variables from outer scope if it returns another function

function printNameFunction() {
  let name = 'Eric'

  return function () {
    console.log(name)
  }
}

let printName = printNameFunction()
printName()

// 2

let test = 'Robert'
console.log(typeof test) // string
test = 0.0266
console.log(typeof test) // number
test = true
console.log(typeof test) // boolean
test = { a: 'A', b: 'B' }
console.log(typeof test) // object
test = null
console.log(typeof test) // object
test = {}
console.log(typeof test) // object

// 3
function showUserInfo(firstName, lastName, age) {
  console.log(`${firstName} ${lastName} is ${age} years old`)
}

// 4
function doaddition(a, b, c) {
  return a + b + c
}

console.log(doaddition(2, 3, 4)) // 9
console.log(doaddition(2)) // nan - as other parameters are undefined
console.log(doaddition('two', 3, 'four')) // two3four - javascript typecasts 3 to a string

// 5
// Named functions are hoisted, you can call them before they are declared in the code.

greetings()

// hoisted function
function greetings() {
  console.log('hi')
}

// greetings2() calling this will lead to a reference error as the function hasn't yet been inintalized, only declared

// anonymous function
let greetings2 = function () {
  console.log('hi')
}

// 6

// Call and Apply utilize the same concept but have a slightly different approach.
// Call and Apply lets you call a function and specficlly set the context of "this".
// the arguments get applied as comma seperated for Call, as an array for Apply

function intro(...sessions) {
  console.log(`Hello ${this.name} these are your sessions for today: `)
  for (i in sessions) {
    console.log(sessions[i])
  }
}

let person1 = {
  name: 'David',
}

intro.call(person1, 'Math', 'History')
intro.apply(person1, ['Math', 'History'])

// You can also use a bind here to fix "this", but bind does not execute the function, but you can set it to an anonymous function

let introDavid = intro.bind(person1)
introDavid('Math', 'History')

// 7

let student1 = {
  name: 'David',
  age: 15,

  printInfo: function () {
    console.log(`Welcome ${this.name}`)
  },

  findInfo: function () {
    setTimeout(
      function () {
        this.printInfo()
      }.bind(this), // requires bind as the object literal student is already created and this refers to the student1 object. Without bind this would refer to the SetTimeout object
      0
    )
  },
}

student1.findInfo()

// 8

let nullObj = Object.create(null) // doesn't inhereit from Object.prototype

// 9

let ball = {
  color: 'red',
  size: 5,
}

let stadium = {
  name: 'stadium1',
  location: 'city1',
  capacity: 90000,
}

let game1 = { ball, stadium } // shallow merge. Maintains references to original instances
let game2 = Object.assign({}, ball, stadium) // deep merge. Creates a new instance

// 10

module.exports = {
  ball,
} // ball object exported to basics2.js
