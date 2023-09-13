const myArray = [54, 76, 23, 1, 98, 45, 6.8, 12, 10, 100];
console.log(myArray);
myArray.reverse()
console.log(myArray);
myArray.sort((a, b) => a - b) //ascending
console.log(myArray);
myArray.sort((a, b) => b - a) //descending
console.log(myArray);
const myArrayString = myArray.toString();
console.log(myArrayString);
const myArrayJoin = myArray.join("-/-");
console.log(myArrayJoin);


