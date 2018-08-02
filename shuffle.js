'use strict';


const shuffle = (arr)=>{

  for (let index = 0; index < arr.length; index++) {

    let toIndex = Math.floor(Math.random()*(arr.length));
    swap(arr, index, toIndex);
  }
};

const swap = (array, i, j) => {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

let myArr = [4,5,1,2,9,6,3,7]

console.log(myArr)
shuffle(myArr);
console.log(myArr)