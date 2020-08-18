//let stop = 200;
//for(let x = 100; x <= stop; x++) {
//  if(x % 3 === 0 && x % 4 === 0) {
//    console.log("LoopyLighthouse");
//  } else if(x % 3 === 0) {
//    console.log("Loopy");
//  } else if(x % 4 === 0) {
//    console.log("Lighthouse");
//  } else {
//    console.log(x);
//  }
//}


// Refactored Version 

for (const num of nums) {
  let output = "";

  if (num % 3 === 0) {
    output += "Loopy";
  }

  if (num % 4 === 0) {
    output += "Lighthouse";
  }

  console.log(output === "" ? num : output);
}
