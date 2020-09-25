class MaxHeap {
  constructor() {
    this.array = [null];
  }

  getParent(i) {
    let parent = Math.floor(i / 2);
    return parent;
  }

  getLeftChild(i) {
    return i * 2;
  }

  getRightChild(i) {
    return i * 2 + 1;
  }

  siftUp(i) {
    if (i === 1) return;

    let parentIdx = this.getParent(i);
    if (this.array[i] > this.array[parentIdx]) {
      this.swap(this.array, i, parentIdx);
      this.siftUp(parentIdx);
    }
  }

  insert(val) {
    this.array.push(val);
    this.siftUp(this.array.length - 1);
  }

  siftDown(i) {
    let leftIndex = this.getLeftChild(i);
    let rightIndex = this.getRightChild(i);
    let leftValue = this.array[leftIndex];
    let rightValue = this.array[rightIndex];

    if (!leftValue) leftValue = -Infinity;
    if (!rightValue) rightValue = -Infinity;

    if (this.array[i] > leftValue && this.array[i] > rightValue) return;

    let swapIndex = leftValue > rightValue ? leftIndex : rightIndex;

    this.swap(this.array, i, swapIndex);
    this.siftDown(swapIndex);
  }

  deleteMax() {
    if (this.array.length <= 1) return null;
    if (this.array.length === 2) return this.array.pop();

    let max = this.array[1]
    this.array[1] = this.array.pop();
    this.siftDown(1);
    return max;
  }

  // buildHeap(arr) {
  //   arr.forEach(n => this.insert(n))
  //   return this.array
  // }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

// function isMaxHeap(arr, i = 1) {
//   let isHeap = true;
//   for (let i = 1; i < arr.length; i++) {
//     let parent = arr[i];

//     let leftChild = arr[i * 2];
//     let rightChild = arr[i * 2 + 1];

//     if (!leftChild) leftChild = -Infinity;
//     if (!rightChild) rightChild = -Infinity;

//     if (!(parent > leftChild && parent > rightChild)) {
//       return false
//     }
//   }
//   return isHeap;
// }



module.exports = {
  MaxHeap
};
