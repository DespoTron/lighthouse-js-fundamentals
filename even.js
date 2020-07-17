const isEven = function(num) {
  return num % 2 === 0;
}

const tenIsEven = isEven(10);
const elevenIsEven = isEven(11);

console.log(tenIsEven);
console.log(elevenIsEven);

//or we can simplify code above by removing the new variables assignments
//  and instead just outputting them like so with the code below this line

//console.log(isEven(10));
//console.log(isEven(11));
