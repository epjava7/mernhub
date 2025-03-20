let Student = {
  FirstName: 'Stacy',
  Standard: 'Higher Secondary',
  Session: 'Final Session',
  TotalMarks: '75%',
  Subject: {
    Physics: 80,
    Chemistry: 89,
    Language: 92,
  },
}

// 1

let {
  FirstName,
  TotalMarks,
  Subject: { Physics, Chemistry, Language },
  LastName = 'Smith', // doesn't change object itself
  Subject: { Ecology = 95 }, // doesn't change object itself
} = Student

console.log(FirstName)
console.log(TotalMarks)
console.log(Physics)
console.log(Chemistry)
console.log(Language)

console.log(LastName)
console.log(Ecology)

// 2

let arr = [1, 2, 3, 4, 5, 6]
let [a, b, c, ...d] = arr
console.log(a) // 1
console.log(b) // 2
console.log(c) // 3
console.log(d) // [4, 5, 6]

// 3

function multiply(a, b, c) {
  if (!a || !b || !c) {
    return 0
  }
  return a * b * c
}

// 4

arr = [1, 2, 3, 4, 5]
arr.push(6)
for (let num of arr) {
  console.log(num)
}
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i])
}

// 5

const person = {
  age: 10,
}

console.log(person)

person.age = 20

console.log(person) // {person: 20} because const prevents chaning the reference, but you can still change object itself

// person = {
//     weight: 100
// }  not allowed

// 6

for (var i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} // since var has global scope this prints out: 2 2

for (let i = 0; i < 2; i++) {
  setTimeout(() => {
    console.log(i)
  }, 0)
} // since let has block scope this prints out: 1 2
