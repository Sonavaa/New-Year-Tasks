"use strict";

const array = [1, 2, 2, 3, 4, 4, 4, 4, 5, 6];
const arrayItem = 4;

function removeItems(array, arrayItem) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[i] === arrayItem) {
        array.splice(i, 1);
      }
    }
  }
  console.log(array.length);
}

removeItems(array, arrayItem);
