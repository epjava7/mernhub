class Account {
  constructor(name, age, type) {
    this.name = name
    this.age = age
    this.type = type
    this.balance = 0
  }

  getType() {
    return this.type
  }

  getUserInfo() {
    return `User: ${this.name}, ${this.age} years-old.`
  }

  deposit(amount) {
    this.balance += amount
    return `Successfully deposited $${amount}.`
  }
}
