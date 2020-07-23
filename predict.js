for(var num = 0; num < 15; num++){
    console.log(num);
}

//        num  print
//         0 -> 0
//         1 -> 1
//         2 -> 2
//         3 -> 3

// answer 1,2,3,4,5,6,7,8,9,10,11,12,13,14



for(var i = 1; i < 10; i+=2){
    if(i % 3 == 0){
        console.log(i);
    }
}

//         i -> 1      1       x
//         i -> 2      2       x
//         i -> 3      0       3
//         i -> 4      1       x
//         i -> 5      2       x
//         i -> 6      0       6
//         i -> 7      1       x
//         i -> 8      2       x
//         i -> 9      0       0
        
// answer 3, 6, 9

        
for(var j = 1; j <= 15; j++){
    if(j % 2 == 0){
        j+=2;
    }
    else if(j % 3 == 0){
        j++;
    }
    console.log(j);
}


//         j = 1   x
//         j = 2   j = j+2 ->  4
//         j = 3   j = j+1 ->  4
//         j = 4   j = j+2 ->  6
//         j = 5   x
//         j = 6   j = j+2 ->  8
//         j = 7   x
//         j = 8   j = j+2 ->  10
//         j = 9   j = j+1 ->  10
//         j = 10  j = j+2 ->  12
//         j = 11  x
//         j = 12  j = j+2 ->  14
//         j = 13  x
//         j = 14  j = j+2 ->  16
//         j = 15  j = j+1 ->  16

// answer 4,4,6,8,10,10,12,14,16,16


