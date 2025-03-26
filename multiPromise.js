// testing output of official code

let getUserHistory = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 'Success',
      msg: 'Fetched user history of navigations',
      code: 200,
    })
  }, 4000)

  setTimeout(() => {
    reject({
      status: 'Failed',
      msg: 'Failed to fetch user history of navigations',
      code: 400,
    })
  }, 4000)
})

//Promise2
let getProductList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 'Success',
      msg: 'Fetched user history of products',
      code: 200,
    })
  }, 4000)

  setTimeout(() => {
    reject({
      status: 'Failed',
      msg: 'Failed to fetch user history of products',
      code: 400,
    })
  }, 4000)
})

//Promise3
let getFutureSalesList = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 'Success',
      msg: 'Fetched user history of Future Sales',
      code: 200,
    })
  }, 4000)

  setTimeout(() => {
    reject({
      status: 'Failed',
      msg: 'Failed to fetch user history of Future sales',
      code: 400,
    })
  }, 3000)
})

//concurrent execution can be done for each promise
//all of them will be async
// getUserHistory.then(()=>{ output }).catch(()=>{ failed })
// getProductList.then(()=>{ output })
// getFutureSalesList.then(()=>{ output })

//1. All the promises needs to be completed either resolved or reject then only we should make it work

Promise.allSettled([getUserHistory, getProductList, getFutureSalesList]).then(
  (data) => {
    console.log(data)
  }
)

// first gets results of all promises called then handles them all at once

//2. if anyone of the above fails we should not do any next job or show next page

Promise.all([getUserHistory, getProductList, getFutureSalesList])
  .then((data) => {
    console.log(data)
  })
  .catch((error) => {
    console.log(error)
  })

// if any of the promises failed then it catches that error and shows it. Otherwise display all of them.
