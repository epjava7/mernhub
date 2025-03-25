let studentLogin = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 'Success',
      code: 200,
      data: {
        id: '123',
        name: 'John',
      },
    })
  }, 3000)

  setTimeout(() => {
    resolve({
      status: 'Failed',
      code: 500,
      err: {
        message: 'Failed Login',
      },
    })
  }, 4000)
})

studentLogin
  .then((response) => {
    console.log(response)
  })
  .catch((err) => {
    console.log(err)
  })
