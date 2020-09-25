// you may assume that the array will always have a null element at the 0-th index

function isMaxHeap(arr, i=1) {
    let isHeap = true;
    for (let i = 1; i < arr.length; i++) {
      let parent = arr[i];

      let leftChild = arr[i * 2];
      let rightChild = arr[i * 2 + 1];

      if (!leftChild) leftChild = -Infinity;
      if (!rightChild) rightChild = -Infinity;

      if (!(parent > leftChild && parent > rightChild)) {
        return false
      }
    }
    return isHeap;
}


module.exports = {
  isMaxHeap
};
