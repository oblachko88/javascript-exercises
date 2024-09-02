// const givenString = 'Hello world!'

// const newString = (givenString) => {
//   if (givenString.indexOf(0-2))
// }

const makeNewString = (str) => 
  str.length < 3 ? str : str.slice(0, 3) + str.slice(-3);

console.log(makeNewString('abc'));
console.log(makeNewString('abcdefgasds'));
console.log(makeNewString('abc213213asd21as22'));

// abc

console.log(makeNewString('ab'));

console.log('Hello world.')