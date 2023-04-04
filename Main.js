let mybutton = document.getElementById("topBtn");
let html = document.getElementById("html")

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.documentElement.scrollTop > 50) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function goToTop() {
    document.documentElement.scrollTop = 0;
}

document.documentElement.scrollTop = 1;

let us = document.getElementById("usTile");
let usTop = us.getBoundingClientRect().top;

let project = document.getElementById("projectTile");
let projectTop = project.getBoundingClientRect().top;

//let mosses = document.getElementById("mossesTile");
//let mossesTop = mosses.getBoundingClientRect().top;

var scroll = function() {
  var y = document.documentElement.scrollTop;
  console.log("y " + y)
  console.log("pt " + projectTop)
  if (y < projectTop) {
    project.style.visibility = "visible";
  }
  if (y < usTop + 50) {
    us.style.visibility = "visible";
  }
};

window.addEventListener("scroll", scroll);