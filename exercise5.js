// const stringNew = 'New!';

// const askString = prompt('Enter a new string: ');

// if (askString.startsWith('New!')) {
  
// } else {
//   togetherString = stringNew + askString;
//   return togetherString;
// }

// console.log(togetherString);

const addNew = (str) => 
  str.indexOf('New!') === 0 ? str: `New! ${str}`

console.log(addNew('New! Offers'));