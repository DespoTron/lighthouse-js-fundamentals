const judgeVegetable = function (vegetables, metric) {
  let max = -1;
  let maxName;
  vegetalbes.forEach((vegetable) => {
    if(vegetable[metric] > max) {
      max = vegetable[metric];
      maxName = vegetable['submitter'];
    }
  });

  return maxName;
}

const metric = 'redness';
judgeVegetable(vegetables, metric);
