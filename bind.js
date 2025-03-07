let user = {
  name: 'Eric',
  age: 25,
  accountId: 'ericaccount',
  printInfo: function () {
    console.log(`Finding your student id ${this.name}`)

    setTimeout(
      function () {
        console.log(
          `You're student id is: ${accountDatabase[this.accountId].id}`
        )
      }.bind(this),
      2000
    )
  },
}

user.printInfo()

let accountDatabase = {
  ericaccount: {
    id: 123,
    username: 'eric123',
  },
}
