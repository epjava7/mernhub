// 1

async function printUserInfo() {
  try {
    let promiseUserInfo = await new Promise((resolve, reject) => {
      setTimeout(() => {
        reject({
          status: 'Failed',
          code: 500,
          error: 'Failure',
        })
      }, 2000)

      setTimeout(() => {
        resolve({
          status: 'Success',
          code: 200,
          info: {
            name: 'John',
            age: 20,
          },
        })
      }, 3000)
    })

    console.log('User Info: ', promiseUserInfo)
  } catch (error) {
    console.log(error)
  }
}

// 2

const userMap = new Map()
userMap.set('key', 'value')
userMap.set(1, 'value')
userMap.set(true, 'value')
userMap.set(['key'], 'value')
userMap.set({ key: 1 }, 'value')

console.log(userMap.get(1))
console.log(userMap.has(1))
console.log(userMap.size)
userMap.delete('key')
console.log(userMap)
userMap.clear()
console.log(userMap)

// 3
const userSet = new Set()

userSet.add(1)
userSet.add(2)
userSet.add(1) // Duplicate
userSet.add(3)

console.log(userSet.has(1))
console.log(userSet.size)
userSet.delete(3)
console.log(userSet)
console.log(userSet.values()) // set iterator
userSet.clear()
console.log(userSet)
