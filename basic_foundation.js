// #1
function a () {
    var numbers = [];
    for ( var i = 1; i <= 255; i++ ) {
        numbers.push(i);
    }
    return numbers;
}

a();

//#2
function sumEvenNum () {
    var sumEven = 0;
    for (var i=1; i<=1000; i++) {
        if (i%2 == 0){
            sumEven += i;
        }
    }
    return sumEven;
}

sumEvenNum();

//#3
function sumOddNum () {
    var sumOdd = 0;
    for (var i=1; i<=5000; i++) {
        if (i%2 == 1) {
            sumOdd += i;
        }
    }
    return sumOdd;
}

sumOddNum();

//#4
function printArray (arr) {
    var sumArr = 0;
    for (var i=1; i<arr.length ;i++) {
        sumArr += arr[i];
    }
    return sumArr;
}

printArray([1,2,3,4,5]);

//#5
function findMax(arr) {
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
        if (arr[i]> max){
            max = arr[i];
        }
    }
    return max;
}

findMax([1,10,6,17,8]);

//#6
function average(arr) {
    var sum = 0;
    for(var i=0; i<arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}

average([1,2,3,4,5]);

//#7
function oddArr () {
    var oddArray=[];
    for(var i=0; i<=50; i++) {
        if(i%2 == 1){
            oddArray.push(i);
        }    
    }
    return oddArray;
}

oddArr();

//#8
function greaterY (arr, x) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>x) {
            console.log(arr[i]);
        }

    }
}

greaterY([1,2,3,4,5], 2);

// #9
function square (arr) {
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i]*arr[i];
    }
    return arr;
}

square([1,2,3,4,5]);

//#10
function noNegatives (arr) {
    for (var i=0; i<arr.length; i++){
        if (arr[i]<0) {
            arr[i] = 0;
        }
    }
    return arr;
}

noNegatives ([2,-3,1,-8,9]);

//#11
function maxMinAvg (arr) {
    var max = arr[0];
    var min = arr[1];
    var sum = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i];
        }
    }
    for (var j=0; j<arr.length; j++) {
        if (arr[j]<min) {
            min = arr[j];
        }
    }
    for (var k=0; k<arr.length; k++) {
        sum += arr[k];
    }
    return [max, min, sum/arr.length];
}

maxMinAvg([1,2,3,4,5]);

//#12
function swap(arr) {

    var first = arr[0];
    var last = arr[arr.length-1];
    var temp = first;
    arr[0] = last;
    arr[arr.length-1] = temp;

    return arr;
}

swap([1,2,3,4,5]);


//#13
function numberToString (arr) {
    for (i=0; i<arr.length; i++)  {
        if (arr[i] <0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

numberToString([-1,2,3,-4,5]);