var randomNo1 = Math.floor(Math.random()*6) +1;
var image = document.getElementsByClassName("img1")[0];



switch (randomNo1) {
    case 1:
        image.setAttribute("src", "./images/dice1.png");
        break;
    case 2:
        image.setAttribute("src", "./images/dice2.png");
        break;
    case 3:
        image.setAttribute("src", "./images/dice3.png");
        break;
    case 4:
        image.setAttribute("src", "./images/dice4.png");
        break;
    case 5:
        image.setAttribute("src", "./images/dice5.png");
        break;
    case 6:
        image.setAttribute("src", "./images/dice6.png");
        break;
    default:
        image.setAttribute("src", "");
}

var randomNo2 = Math.floor(Math.random()*6) +1;
var image = document.getElementsByClassName("img2")[0];

var randomImage = "./images/dice" + randomNo2 + ".png";
image.setAttribute("src", randomImage);

var heading = document.querySelector("h1");

if (randomNo1 > randomNo2) {
    heading.innerHTML = "🚩 Player 1 Wins!";
} else if (randomNo1 < randomNo2) {
    heading.innerHTML = "Player 2 Wins! 🚩";
} else if (randomNo1 === randomNo2) {
    heading.innerHTML = "Draw!";
}else {
    heading.innerHTML = "Refresh Me!";
}

