import _ from "lodash";

const myArray = [1,2,3,4,5];
const shuffle = _.shuffle(myArray);
const sum = _.sum(myArray);
console.log(shuffle);
console.log(sum);

// yang mana sebelumnya jika kita buat manual akan seperti ini
const arrayManual = [1,2,3,4,5,6];
const sumManual = 0;

for(let i = 0; i < arrayManual.length; i++) {
   sumManual = sumManual + arrayManual[i];
 }

 console.log(sumManual);
