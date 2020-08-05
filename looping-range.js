//Bounds:
//The function should return an empty array [] if given incorrect parameeters, such as:
//start, end or step being undefined
//start being greater than end
//step being 0, or negative

const range = function(start, end, step) {
  let newArr = [];
  if(start === null || end === null || step === null || end < start || step < 0) {
    newArry = [];
  } else {
    for(let i = start; i <= end; i += step) {
      newArr.push(i);
    }
  }
  return newArr;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));
console.log(range(-9, 3, 3));
