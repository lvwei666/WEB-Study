function quickSort(data) {
  if (data.length <= 1) return data;
  let pivotIndex = Math.floor(data.length / 2);
  let pivot = data.splice(pivotIndex, 1)[0];
  let left =[], right = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] <= pivot) {
      left.push(data[i]);
    } else {
      right.push(data[i]);
    }
  }
  return quickSort(left).concat([pivot], quickSort(right));
}

console.log(quickSort([4,7,3,8,2,6]));