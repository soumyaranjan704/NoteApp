
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}








function newNotes(){
  var div = document.createElement("textarea");
// var ddd=document.createElement("button");
// ddd.onclick=
// function removeNotes() {
//   const list = document.getElementById("main");
//   list.removeChild(list.firstElementChild);
// };
// ddd.style.color="red";
div.style.width = "200px";
div.style.height = "200px";
div.style.background = "white";
div.style.color = "black";
div.innerHTML = "Enter Title";
//ddd.innerHTML = "DELETE";

div.style.fontWeight="bold";
div.style.margin = "0px 26px 0px 0px";
document.getElementById("main").appendChild(div);
//document.getElementById("main").appendChild(ddd);


}

document.getElementById('grayButton').onclick = switchGray;
document.getElementById('whiteButton').onclick = switchWhite;
document.getElementById('blueButton').onclick = switchBlue;
document.getElementById('yellowButton').onclick = switchYellow;

function switchGray() {
  document.getElementsByClassName('neww')[0].style.backgroundColor = 'gray'; 
  document.getElementsByClassName('neww')[0].style.color = 'white'; 
}

function switchWhite() {
  document.getElementsByClassName('neww')[0].style.backgroundColor = 'white'; 
  document.getElementsByClassName('neww')[0].style.color = 'black'; 
}

function switchBlue() {
  document.getElementsByClassName('neww')[0].style.backgroundColor = 'blue'; 
  document.getElementsByClassName('neww')[0].style.color = 'white'; 
}

function switchYellow() {
  document.getElementsByClassName('neww')[0].style.backgroundColor = 'yellow'; 
  document.getElementsByClassName('neww')[0].style.color = 'black'; 
}


function removeNotes() {
  const list = document.getElementById("main");
  list.removeChild(list.firstElementChild);
};
