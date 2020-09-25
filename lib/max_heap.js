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

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

module.exports = {
  MaxHeap
};
