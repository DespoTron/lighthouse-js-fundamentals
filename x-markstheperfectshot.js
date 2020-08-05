const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north'];

const finalPosition = function (moves) {
  const startingPosition = [0,0];
  for(let i = 0; i < moves.length; i++) {
    switch(moves[i]) {
      case 'north':
       startingPosition[1] += 1;
       break;
      case 'east':
        startingPosition[0] += 1;
        break;
      case 'south':
        startingPosition[1] -= 1;
        break;
      case 'west':
        startingPosition[0] -= 1;
        break;
    }
  }
  return startingPosition;
}

console.log(finalPosition(moves));
