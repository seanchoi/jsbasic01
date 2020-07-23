//#1
function sigma(num) {
    var sum = 0;
    for (i=1; i<=num ; i++) {
        sum += i;
    }
    return sum
}

sigma(5);

//#2
function factorial(num) {
    var multi = 1;
    for (i=1; i<=num; i++) {
        multi = multi*i;
    }
    return multi
}

factorial(5);

//#3
function fibonacci(num) {
    var arr =[0, 1];
    for (var i=2; i<=100;i++){
        var fibonacci_num = arr[i-2] + arr[i-1]; 
        arr.push(fibonacci_num);
       
    }
    return arr[num]
    

    //f(x)  = f(x-2) + f(x-1)
}

fibonacci(7);


//#4
function secondToLast(arr) {
    if (arr.length < 2) {
        console.log("null")
    }
    else {
        return arr[arr.length-2]
    }
}

secondToLast([1,2]);

//#5
function nToLast (arr, index) {
    if (arr.length < 2) {
        console.log("null")
    }
    else {
        return arr[arr.length-index]
    }
}   

nToLast([5,2,3,6,4,9,7], 3);

//#6
function secondLargest(arr) {
    var max = arr[0];
    var secondMax = arr[1];

    if (arr.length < 2) {
        console.log("null")
    }
    
    for (i=0; i<arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
        
    }

    for (j=0; j<arr.length; j++) {
        if (arr[j] < max && secondMax < arr[j] ) {
            secondMax = arr[j];
        }
    }

    return secondMax;
}

secondLargest([5,8,7,9,5,10,13]);


//#7
function doubleArr (arr) {
    newArr = [];
    for (var i=0; i<arr.length; i++) {
        newArr.push(arr[i], arr[i]);
        
    }
    return newArr
}

doubleArr(['yoori', 85, 'sean', 77]);