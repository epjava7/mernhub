// Spread Operators

let vaccines = ['spikevax', 'infanrix', 'havrix']
console.log(vaccines)

let doctor = {
  name: 'John',
  age: 40,
}
console.log({ ...doctor })

let vaccineInfo = {
  vaccine: vaccines[0],
  doses: 3,
  price: 10,
}

let vaccineForDoctor = { ...doctor, ...vaccineInfo }
console.log(vaccineForDoctor)

// Rest Parameter

function createArray(start, end) {
  let arr = []
  for (let i = start; i <= end; i++) {
    arr.push(i)
  }
  return arr
}

function addArray(...nums) {
  let sum = 0
  return nums.reduce((accum, cur) => accum + cur, sum)
}

let arr = createArray(1, 3)
let arrSum = addArray(...arr)
console.log(arrSum)
