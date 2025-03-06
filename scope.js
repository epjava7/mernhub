let user = {
  name: 'John',
  age: 25,
  printInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)
  },
}

user.printInfo()
