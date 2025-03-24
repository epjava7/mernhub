let persons = [
  { id: 1, name: 'John', tags: 'javascript' },
  { id: 2, name: 'Alice', tags: 'dotnet' },
  { id: 3, name: 'Roger', tags: 'java' },
  { id: 4, name: 'Adam', tags: 'javascript' },
  { id: 5, name: 'Alex', tags: 'java' },
]

let personsWithJavaScript = persons.filter(
  (person) => person.tags === 'javascript'
)
console.log(personsWithJavaScript)

let javaPersonsEdited = personsWithJavaScript.map((person) => {
  if (person.tags == 'javascript')
    return {
      id: person.id,
      developer: person.name + ' programmer',
      tags: person.tags,
    }
})
console.log(javaPersonsEdited)

let isAnyonePython = persons.some((person) => person.tags === 'python')
console.log(isAnyonePython)

let numUniqueTags = persons.reduce((unique, person) => {
  unique.add(person.tags)
  return unique
}, new Set()).size
console.log(numUniqueTags)
