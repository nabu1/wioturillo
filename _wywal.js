const arr = [
  { name: 'bob', age: 1 },
  { name: 'adam', age: 3 },
  { name: 'dama', age: 2 }
]
// console.log ('arr PRZED =', arr)

const arrByAge = arr.sort ((a, b) => b.age - a.age ) // liczby

console.log(arrByAge)
