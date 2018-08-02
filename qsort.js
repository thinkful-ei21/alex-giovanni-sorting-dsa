'use strict';


const sortThis = [89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40, 48, 32, 26, 2, 14, 33,45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];



const qSort = (arr, start = 0, end = arr.length -1) => {
  //recurring on both sides, returns if len 1
  if(start >= end){
    return arr;
  }

  let pIndex = partition(arr, start, end);
  arr = qSort(arr, start, pIndex);
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

