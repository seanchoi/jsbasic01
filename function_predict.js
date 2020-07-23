function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

return Hello 
word = Hello

answer Hello

// predict 2
function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

answer

return1 3 + 5 =     Summing Numbers! 
                    Num1 is: 3
                    Num2 is: 5
                    8


return2 4 + 7 =     Summing Numbers!
                    Num1 is: 4
                    Num2 is: 7
                    11

result1             8
result2             11


// predict3
function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

undefined because the variable num is not given