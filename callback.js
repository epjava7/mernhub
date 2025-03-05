allAccountDetails = {
  James: {
    password: '123',
    accountNumber: 123456,
    accountType: 'savings',
  },
}

function print(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i])
  }
}

function verifyLogin(name, password) {
  if (allAccountDetails[name].password === password) {
    console.log('Login successful')
    return allAccountDetails[name].accountNumber
  } else {
    console.log('Login failed')
    return null
  }
}

function printAccountDetails(name, password, callback) {
  let accountNumber = verifyLogin(name, password)
  if (accountNumber === null) {
    callback('Login failed', 'Account number: null')
    return
  } else {
    callback(name, accountNumber)
    return
  }
}
