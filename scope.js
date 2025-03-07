let user = {
  name: 'John',
  age: 10,
  printInfo: function () {
    console.log(`Name: ${this.name}, Age: ${this.age}`)

    let _this = this // preservers the context of this

    setTimeout(function () {
      console.log(this)
      console.log(_this)
    }, 100)
  },
}

user.printInfo()
