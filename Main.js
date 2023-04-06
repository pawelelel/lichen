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


var scrollU = function scrollUs() {
    var us = document.getElementById("usTile");

    var rect = us.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    console.log("u" + isVisible);
    return isVisible;
}

var scrollP = function scrollProject() {
    var project = document.getElementById("projectTile");

    var rect = project.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    console.log("p" + isVisible);
    return isVisible;
}

var scrollM = function scrollMosses() {
    var mosses = document.getElementById("mossesTile");

    var rect = mosses.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    console.log("m" + isVisible);
    return isVisible;
}

window.addEventListener("scroll", scrollU);
window.addEventListener("scroll", scrollP);
window.addEventListener("scroll", scrollM);
