function findMyGirl () {
    var first = 0;
    var second = 0;
    var third = 0;
    var fourth = 0;

    for (i=1; i<=100000000; i++) {
        var pick = Math.floor(Math.random()*10)%5;
        if (pick == 1) {
            first++;
        }
        else if(pick == 2){
            second++;
        }
        else if(pick == 3) {
            third++;
        }
        else if(pick == 4) {
            fourth++;
        }
    }

    var newArr = [
        {
            name: "첫번째",
            score: first,
        }, 
        {
            name: "두번째",
            score: second,
        },
        {
            name: "세번째",
            score: third,
        }, 
        {
            name: "네번째",
            score: fourth,
        }, 
        
    ];    
    var maxLove = newArr[0].score;
    var maxName = newArr[0].name;
    for (j=0; j<newArr.length; j++){
        if (maxLove < newArr[j].score) {
            maxLove = newArr[j].score;
            maxName = newArr[j].name;
        }
    }
    console.log("최종우님의 관심도를 1천번 예측 계산한 결과!!\n\n" +  maxName + "옵션이 " + maxLove + "개의 표를 획득했습니다.");
}

findMyGirl();
