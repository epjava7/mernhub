function createBankAccount() {
  let balance = 100
  let name = 'James'
  let accountNumber = 123456
  let accountType = 'savings'
  let accountStatus = 'active'

  function createBankAccount() {
    console.log('Account created')
    return { accountNumber, name, balance }
  }

  return createBankAccount
}
