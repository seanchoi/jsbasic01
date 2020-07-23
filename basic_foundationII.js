//#1
function numToString(arr) {
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0 ) {
            arr[i] = 'big';
        }
    }
    return arr;
}

numToString([-1,3,-4,-6,7,8,-9]);


//#2

function maxMin (arr) {
    var max=arr[0];
    var min=arr[1];

    for (var i=1; i<arr.length; i++) {
        if(arr[i]>  max) {
            max=arr[i];
        }
    }
    for (var j=0; j<arr.length; j++) {
        if(arr[j] < min) {
            min=arr[j]
        }
    }
    console.log(min);
    return max
}

maxMin([1,2,3,4,5,6]);


//#3
function printReturn (arr) {
    var newArr=[];
    var firstOdd;

    for (var i=1; i<arr.length; i++) {
        newArr.push(arr[i]);
    }
    for (var j=0; j<arr.length; j++) {
        if (arr[j]%2 == 1) {
            firstOdd = arr[j];
            break
        }
    }
    console.log(newArr);
    return firstOdd;

}

printReturn([2,4,6,3,9,10]);

//#4
function double (arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++){
        newArr.push(arr[i]*2);
    }
    return newArr
}

double ([1,2,3,4,5]);

//#5
function countPositive (arr) {
    var count = 0;
    for (var i=0; i<arr.length; i++) {
        if (arr[i] > 0) {
            count++;
        }
    }
    arr[arr.length] = count;
    return arr
}

countPositive([-2,3,4,-5,6,7,-8]);

//#6
function evenOdd (arr) {

        for (var i=0; i<arr.length; i++) {
            if (arr[i]%2 == 0) {
              
                if (arr[i+1]%2 == 0) {
                   
                    if (arr[i+2]%2 ==0) {
                        console.log("Even more so!");
                    }
                }
            }


            else {
                
                if (arr[i+1]%2 == 1) {
                    
                    if (arr[i+2]%2 ==1) {
                        console.log("That's Odd!")
                    }
                }
            }
        }
}

evenOdd([1,1,1,2,2,2,1,1,1,2,2,2]);

//#7
function addOneOnOdd(arr) {
    for (var i=0; i<arr.length; i++) {
        if (i%2 == 1) {
            arr[i] += 1;
        }
    }
    console.log(arr);
    return arr
}

addOneOnOdd([1,2,3,4,5,6]);

//#8
function previousLength (arr) {
    console.log(arr.length);
    console.log(arr[3].length);

    for (i= arr.length-1; i>0; i--) {
        arr[i] = arr[i-1].length;
        console.log(arr[i]);
    }
    return arr
}

previousLength(['hello', 'banana', 'sean', 'love']);

//#9
function  addSeven (arr) {
    var newArr = [];
    for (var i=0; i<arr.length; i++) {
        newArr.push(arr[i]+7);
    }
    return newArr;
}

addSeven ([1,2,3,4,5]);

//#10
function reverseArray (arr) {
    newArr =[];
    for(i=arr.length-1; i>0; i--){
        newArr.push(arr[i]);

    }
    return newArr;
}

reverseArray([1,2,3,4,5,6,7]);

//#11
function makeNegative(arr) {
    var newArr =[];
    for(var i=0; i<arr.length; i++) {
        if(arr[i]>0) {
            newArr.push(arr[i] = arr[i]-(arr[i]*2));
        }
        else {
            newArr.push(arr[i])
        }
    }
    return newArr
}

makeNegative([1,2,-3,-4,5]);

//#12
function hungry (arr) {
    var foodCount = 0;
    for(var i=0; i<arr.length; i++){
        if (arr[i] == "food") {
            console.log("Yammy!");
            foodCount++;
        }
        
    }
    if (foodCount == 0) {
        console.log("I'm hungry!");
    }
}

hungry(['food', 'no', 'purple', 'sean', 'food']);
hungry(['I have', 'no', 'purple', 'sean', 'sorry']);

// answer
function hungry(arr){
    var gotFood = false;
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === "food"){
            console.log("yummy");
            gotFood = true;
        }
    }
    if (gotFood == false){
        console.log("I'm hungry");
    }
}

//#13
function swap(arr) {
    for (var i=0; i<arr.length/2; i+=2) {
        var temp = arr[i];
        arr[i] = arr[arr.length-(1+i)];
        arr[arr.length-(1+i)] = temp;
    }
    return arr
}

swap([1,3,4,6,7,-10,9]);



//#14
function multipleByNum(arr, num) {
    for (var i=0; i<arr.length; i++) {
        arr[i] = arr[i]*num;
    }

    return arr
}

multipleByNum([1,2,3,4,6], 3);

