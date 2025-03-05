function getSessions(session1, session2, session3) {
  console.log('You have 3 sessions:')
  console.log(`Session 1: ${session1}`)
  console.log(`Session 2: ${session2}`)
  console.log(`Session 3: ${session3}`)
} // 3 session function

function getSessions(session1, session2, session3, session4) {
  console.log('You have 4 sessions today:')
  console.log(`Session 1: ${session1}`)
  console.log(`Session 2: ${session2}`)
  console.log(`Session 3: ${session3}`)
  console.log(`Session 4: ${session4}`)
} // 4 session function overwrites 3 session function

attendSessions('1', '2', '3') // 3 session function, calls the 4 session function with last arguemnt undefined
attendSessions('1', '2', '3', '4') // 4 session function
