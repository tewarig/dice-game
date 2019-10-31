alert("this is dice game between player1 and player2, player getting higer number on dice wins, let's see who wins");


var n= Math.random();
n = n*6;
var varible1= Math.floor(n) + 1;

var randomimage= "dice" + varible1 + ".png" ;

var imagessrc=  randomimage;


var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",imagessrc);



var varible2= Math.floor(Math.random()*6) + 1;

var randomimage1= "dice" + varible2 + ".png" ;

var imagessrc1= randomimage1;


var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",imagessrc1);

if(varible1>varible2){
  document.querySelector("h1").innerHTML = "player 1 winsss" ;
}
else if(varible2>varible1)
{
  document.querySelector("h1").innerHTML = "player 2 winsss";
}
else
(document.querySelector("h1").innerHTML = "its  a draw plesae refresh the page");
