let firstNum = 9;
let secondNum = 5;
const myMath = {
    firstNum, //firstNum:9
    secondNum, //secondNum:5
    sum() {
        return this.firstNum + this.secondNum;
    },
    printSum() {
        console.log(this.sum());

    }
}
myMath.firstNum;
myMath.secondNum;
myMath.printSum();
























// var myVar = 9; //hoisting

// let myLet = 34 //without hoisting

// const MY_CONST = "hello" //without hoisting + permeanet
// // MY_CONST = "jacob"; X
// const CONST_ARRAY = [34, 46, , 45, 35]
// // CONST_ARRAY = [56775,8,87,4,34] X
// CONST_ARRAY[i] = 534;

// const USER_OBJECT = {
//     fName: "jacob",
//     age: 34
// }
// USER_OBJECT = {}
// USER_OBJECT.age = 56;