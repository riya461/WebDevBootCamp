randomNumber1 = Math.floor(Math.random()*5) + 1;
var image1 = document.querySelectorAll("img")[0];


imageRandom1 = "images/dice" + randomNumber1 + ".png";


image1.setAttribute("src",imageRandom1);

randomNumber2 = Math.floor(Math.random()*5) + 1;
var image2 = document.querySelectorAll("img")[1];


imageRandom2 = "images/dice" + randomNumber2 + ".png";


image2.setAttribute("src",imageRandom2);

if(randomNumber1 > randomNumber2){
    document.getElementById("heading").innerHTML = "Player 1 Wins 🚩!!"
}
if(randomNumber1 < randomNumber2){
    document.getElementById("heading").innerHTML = "Player 2 Wins 🚩!!"
}
if(randomNumber1 === randomNumber2){
    document.getElementById("heading").innerHTML = "Draw 🚩!!"
}