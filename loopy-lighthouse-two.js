const loopyLighthouse = function(range, multiples, words) {
  let startingNumber = range[0]; // 15
  let endingNumber = range[range.length-1]; // 90
  //console.log("x:", x, "y:", y);
  for(let i = startingNumber; i <= endingNumber; i++) {
    let conditionOne = multiples[0]; // 2
    let conditionTwo = multiples[multiples.length -1]; // 5
    //console.log(conditionOne, conditionTwo);

    let wordReplacementOne = words[0]; // Batty
    let wordReplacementTwo = words[words.length - 1]; // Beacon
    //console.log(wordReplacementOne, wordReplacementTwo);

    if (i % conditionOne === 0 && i % conditionTwo === 0) {
      console.log(wordReplacementOne + wordReplacementTwo);
    } else if (i % conditionOne === 0) {
      console.log(wordReplacementOne);
    } else if (i % conditionTwo === 0) {
      console.log(wordReplacementTwo);
    } else {
      console.log(i);
    }
  }
}

console.log(loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]));