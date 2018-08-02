'use strict';


const sortThis = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33,45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];



const qSort = (arr, start = 0, end = arr.length -1) => {
  //recurring on both sides, returns if len 1
  if(start >= end){
    return arr;
  }

  let pIndex = partition(arr, start, end);
  arr = qSort(arr, start, pIndex -1);
  arr = qSort(arr, pIndex+1, end);
 
  return arr;
};


const partition = (arr, start, end) =>{
  //sorting around pivot and returns the index of the pivot
    
  let j = start;
  for (let i = start ; i < end ; i++) {
    if(arr[i] <= arr[end]){
      swap(arr,i, j);
      j++;
    }
    
  }
  swap(arr, j, end);
  return j;

};


const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

const mergeSort = (arr, count=0) => {
    // console.log(arr, count)
  if (arr.length <= 1){
    //count++;
    return [arr, count];
  }

  const middle = Math.floor(arr.length/2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle, arr.length);
  let x = mergeSort(left);
  // console.log(x[1])
  left = x[0];
  count += x[1]
  let y = mergeSort(right);
  right = y[0];
  count += y[1];

  let merged = merge (left, right, arr);
  merged[1] += count +1;

//   console.log(merged[0],merged[1])

if(left.length+right.length === arr.length){
      return [merged[0], count + merged[1]]
  }
  
  else { return merged;}


};

const merge = (left, right, array) => {
  let count = 0;
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
      count++;
    }
    else {
      array[outputIndex++] = right[rightIndex++];
      count++;
    }
  }

  for (let i=leftIndex; i<left.length; i++) {
    array[outputIndex++] = left[i];
    count++;
  }

  for (let i=rightIndex; i<right.length; i++) {
    array[outputIndex++] = right[i];
    count++;
  }
//   console.log(count)
  return [array, count];
};

console.log(mergeSort([4,5,1,2,9,6,3,7]));