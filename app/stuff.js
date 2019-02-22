
var friends = require('friends')


var checkWhen = function () {
    var a1 = $("input[name='Check1']:checked").val();
    var a2 = $("input[name='Check2']:checked").val();
    var a3 = $("input[name='Check3']:checked").val();
    var a4 = $("input[name='Check4']:checked").val();
    var a5 = $("input[name='Check5']:checked").val();
    var a6 = $("input[name='Check6']:checked").val();
    var a7 = $("input[name='Check7']:checked").val();
    var a8 = $("input[name='Check8']:checked").val();
    var a9 = $("input[name='Check9']:checked").val();
    var a10 = $("input[name='Check10']:checked").val();

    var userChoice = [a1, a2, a3, a4, a5, a6, a7, a8, a9, a10],
    totalDifference1 = 0;
//friend1
for (var i = 0; i < userChoice.length; i++) {
    totalDifference1 += Math.abs(userChoice[i] - friends[0].scores[i]);
}
    console.log(totalDifference1)

//friend2
totalDifference2 = 0;

for (var i = 0; i < userChoice.length; i++) {
    totalDifference2 += Math.abs(userChoice[i] - friends[1].scores[i]);
}
    console.log(totalDifference2)
//friend3
    totalDifference3 = 0;
    
    for (var i = 0; i < userChoice.length; i++) {
        totalDifference3 += Math.abs(userChoice[i] - friends[2].scores[i]);
    }
        console.log(totalDifference3)

//friend4
totalDifference4 = 0;
    
for (var i = 0; i < userChoice.length; i++) {
    totalDifference4 += Math.abs(userChoice[i] - friends[3].scores[i]);
}
    console.log(totalDifference4)

//friend5
totalDifference5 = 0;
    
for (var i = 0; i < userChoice.length; i++) {
    totalDifference5 += Math.abs(userChoice[i] - friends[4].scores[i]);
}
    console.log(totalDifference5)

//friend6
totalDifference6 = 0;
    
for (var i = 0; i < userChoice.length; i++) {
    totalDifference6 += Math.abs(userChoice[i] - friends[5].scores[i]);
}
    console.log(totalDifference6)

//friend7
totalDifference7 = 0;
    
for (var i = 0; i < userChoice.length; i++) {
    totalDifference7 += Math.abs(userChoice[i] - friends[6].scores[i]);
}
    console.log(totalDifference7)

    //friend8
    totalDifference8 = 0;
    
    for (var i = 0; i < userChoice.length; i++) {
        totalDifference8 += Math.abs(userChoice[i] - friends[7].scores[i]);
    }
        console.log(totalDifference8)

        //friend9
    totalDifference9 = 0;
    
    for (var i = 0; i < userChoice.length; i++) {
        totalDifference9 += Math.abs(userChoice[i] - friends[8].scores[i]);
    }
        console.log(totalDifference9)

        //friend3
    totalDifference10 = 0;
    
    for (var i = 0; i < userChoice.length; i++) {
        totalDifference10 += Math.abs(userChoice[i] - friends[9].scores[i]);
    }
        console.log(totalDifference10)

        var matchArray = [totalDifference1, totalDifference2, totalDifference3, totalDifference4, totalDifference5, totalDifference6, totalDifference7, totalDifference8, totalDifference9, totaldifference10]

    
   


  
};

$("#submit").on("click", function () {

    checkWhen();
});
