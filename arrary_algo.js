var testArr = [6,3,5,1,2,4];
var sum = 0;
var multiply = [];
for (var i = 0; i < testArr.length; i++) {
    sum = sum + testArr[i];
    console.log('num '+ testArr[i] + ', sum ' +  sum);
    multiply.push(testArr[i]*testArr[i]);
}
console.log(multiply);
