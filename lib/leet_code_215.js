// Use this file as a scratch pad to complete the problem at
// https://leetcode.com/problems/kth-largest-element-in-an-array/

// Find the kth largest element in an unsorted array. Note that it is the kth
// largest element in the sorted order, not the kth distinct element.
let findKthLargest = function(nums, k) {

};

// iterate
    //check every element/number
    //let value = nums[i]
    //

function swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
}

function heapify(arr, n, i) {
    let leftIndex = i * 2 + 1;
    let rightIndex = i * 2 + 2;

    let leftValue = arr[leftIndex];
    let rightValue = arr[rightIndex];

    if (leftIndex >= n) leftValue = -Infinity;
    if (rightIndex >= n) rightValue = -Infinity;

    if (arr[i] > leftValue && arr[i] > rightValue) return;

    let swapIndex = leftValue > rightValue ? leftIndex : rightIndex;
    swap(arr, i, swapIndex);
    heapify(swapIndex);
}

function heapSort(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        heapify(arr, arr.length, i);
    }

    for (let endOfHeap = arr.length - 1; endOfHeap >= 0; endOfHeap--) {
        swap(arr, 0, endOfHeap)
        heapify(arr, endOfHeap, 0);
    }
}
