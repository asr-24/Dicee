var imgArray = ['dice1.png','dice2.png','dice3.png','dice4.png','dice5.png','dice6.png'];

var n = Math.random();
n = n*6;
n = Math.floor(n) + 1;
var imgRandom = imgArray[n-1];
var newSrc = "images/"+imgRandom;
document.querySelector(".img1").setAttribute("src",newSrc);

var m = Math.random();
m = m*6;
m = Math.floor(m) + 1;
var imgRandom2 = imgArray[m-1];
var newSrc2 = "images/"+imgRandom2;
document.querySelector(".img2").setAttribute("src",newSrc2);

if(m == n){
  document.querySelector("h1").textContent = "Draw!";
}
else if (m > n){
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").textContent = " 🚩Player 1 Wins!";
}
