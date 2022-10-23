const leaderboardTitle = document.getElementById("leaderBoardTitle");

leaderboardTitle.addEventListener("click", showData)

async function showData() {
    return await fetch('../app/data.json')
    .then((response) => response.json())
    .then((data) => getLeaderBoard(data))   
}

function getLeaderBoard(data) {

    console.log(data)
    // for (var i = 0; i < data.length; i++){
    //     document.write("<br><br>array index: " + i);
    //     var obj = data[i];
    //     for (var key in obj){
    //       var value = obj[key];
    //       document.write("<br> - " + key + ": " + value);
    //     }
    //   }

    // let leaderboard = [
    //     []
    // ]
}