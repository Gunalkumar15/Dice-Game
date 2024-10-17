var ranNum1 = Math.floor(Math.random() * 6)+1; // 1-6

// var ranDiceImg = "images/dice" +ranNum+ ".png";
var ranDiceImg = "dice" +ranNum1+ ".png";  // dice1 img - dice6 img

var ranImgSrc1 = "images/" + ranDiceImg;  //Images dice1 png - Images dice6 png

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src" , ranImgSrc1);

var ranNum2 = Math.floor(Math.random() * 6)+1;
var ranImgSrc2 = "images/dice" + ranNum2 + ".png";
var img2 = document.querySelectorAll("img")[1].setAttribute("src" , ranImgSrc2);

if(ranImgSrc1 > ranImgSrc2) {
    document.querySelector("h1").innerHTML = "🎲 Player 1 Wins!";
}
else if(ranImgSrc2 > ranImgSrc1){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🎲!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}

// document.querySelector("h1").innerHTML = "Player 1 Wins";