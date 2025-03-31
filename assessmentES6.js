// 1.
const heroes = [
  { name: 'Wolverine', family: 'Marvel', isEvil: false },
  { name: 'Deadpool', family: 'Marvel', isEvil: false },
  { name: 'Magneto', family: 'Marvel', isEvil: true },
  { name: 'Charles Xavier', family: 'Marvel', isEvil: false },
  { name: 'Batman', family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn', family: 'DC Comics', isEvil: true },
  { name: 'Legolas', family: 'Tolkien', isEvil: false },
  { name: 'Gandalf', family: 'Tolkien', isEvil: false },
  { name: 'Saruman', family: 'Tolkien', isEvil: true },
]

// a

const notEvil = heroes.filter((x) => !x.isEvil)
console.log(notEvil)

// b

const uniqueFamilies = new Set()
for (hero of heroes) {
  if (!uniqueFamilies.has(hero.family)) {
    console.log(hero.family)
  }
  uniqueFamilies.add(hero.family)
}

// c

const heroesWithTitle = heroes.map((hero) => `Sir ${hero.name}`)
console.log('Heroes with Titles:', heroesWithTitle)

// d
const anyNotEvil = heroes.some((x) => !x.isEvil)
console.log(anyNotEvil)

// 2

function multiplyArray() {
  return nums.reduce((curProduct, num) => curProduct * num, 1)
}

function multiply(n) {
  const nums = []
  for (let i = 1; i <= n; i++) {
    nums.push(i)
  }
  return multiplyArray.apply(null, nums)
}

console.log(multiply(3))

// 3

const person = {
  userDetails: {
    first: 'FirstName',
    last: 'LastName',
  },
}

const {
  userDetails: { last },
} = person

person.contactNumber = '9119119110'

// 4

/* 
When const is an object you can still change elements of the object since const only refers to not being able to change the reference
*/

const johnInfo = {
  name: 'John',
  age: 10,
}
johnInfo.age = 5
console.log(johnInfo)

// 5
const nums = [1, 2, 3, 4, 5]

for (num of nums) {
  console.log(num) // 1 2 3 4 5, will print the elements of the array
}

for (i in nums) {
  console.log(i) // 0 1 2 3 4, will print the indicies in the array
}

// 6
const personInfo = {
  name: 'John',
  age: 10,
  printInfo: function () {
    setTimeout(
      function () {
        console.log(`${this.name} is ${this.age} years old`)
      }.bind(this),
      0
    )
  },
  printInfoArrow: function () {
    setTimeout(() => {
      console.log(`${this.name} is ${this.age} years old`)
    }, 0)
  },
}

// personInfo.printInfo()  : John is 10 years old
// personInfo.printInfoArrow() : John is 10 years old

// 7

setTimeout(() => {
  console.log('1')

  setTimeout(() => {
    console.log('3') // gets placed behind the '2' in the task queue
  }, 0)
}, 0)

setTimeout(() => {
  console.log('2')
}, 0)

console.log('Start') // prints first. Set Timeout is placed on the task queue which is run by the event loop after the call stack is empty

// 8

function createUser(name = 'John', age = 10) {
  return { name, age }
}

console.log(createUser())

// 9

const bobInfo = {
  name: 'Bob',
  age: 10,
}

const bobJob = {
  job: 'engineer',
  company: 'corp',
}

const bobEmployee = Object.assign({}, bobInfo, bobJob)
const bobEmployeeES6 = { ...bobInfo, ...bobJob }

// 10
const personInfoMap = new Map()
personInfoMap.set('John', 10)
personInfoMap.set('James', 15)
console.log(personInfoMap.get('John')) // 10
console.log(personInfoMap.has('John')) // true
personInfoMap.clear()
console.log(personInfoMap) // {}

const uniqueNums = new Set()
uniqueNums.add(1)
uniqueNums.add(2)
console.log(uniqueNums.has(1)) // true
console.log(uniqueNums.size) // 2
uniqueNums.clear()
console.log(uniqueNums) // {}

// 11

function es6Promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        message: 'Success',
        features: [
          'Template Literals',
          'Arrow Functions',
          'Map',
          'Set',
          'Modules',
        ],
      })
    }, 2000)

    setTimeout(() => {
      reject({
        message: 'Failed',
      })
    }, 3000)
  })
}

// 12

function multiply(...nums) {
  return nums.reduce((curProduct, num) => curProduct * num, 1)
}

console.log(multiply(3))

// 13

async function asyncCall() {
  console.log('start')

  await es6Promise().then((data) => console.log(data))
}

asyncCall()

// 14

function* generateNames() {
  const names = ['John', 'James', 'Bob']
  for (name of names) {
    yield name
  }
}

const nameGenerator = generateNames()
console.log(nameGenerator.next())
console.log(nameGenerator.next())

// 15
/* 
Functions are first-class objects that can be passed as arguments into functions and assigned to variables
they can also have their own properties
*/

function addNums(a, b) {
  return a + b
}
addNums.person = 'John'
console.log(addNums.person)

// this prototype is inherited to all instances of the addNums function

// In es6 we have classes that can do this more clearly
