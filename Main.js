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

var percentScroll = function percentScroll(element) {
    const elementBounds = element.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    const visibleHeight = Math.min(elementBounds.bottom, viewportHeight) - Math.max(elementBounds.top, 0);

    const percentVisible = visibleHeight / elementBounds.height * 100;

    return percentVisible;
}

var selectedScroll = function selectedScroll()
{
    var link = document.getElementById("projectLink");
    link.classList.remove("selected");
    link = document.getElementById("usLink");
    link.classList.remove("selected");
    link = document.getElementById("lichensLink");
    link.classList.remove("selected");

    var project = percentScroll(document.getElementById('projectTile'));
    var us = percentScroll(document.getElementById('usTile'));
    var lichens = percentScroll(document.getElementById('lichensTile'));
    
    link = document.getElementById("projectTile");
    link.style.opacity = project * 0.01;
    link = document.getElementById("usTile");
    link.style.opacity = us * 0.01;
    link = document.getElementById("lichensTile");
    link.style.opacity = lichens * 0.01;

    var max = Math.max(project, us, lichens);

    if (project === max)
    {
        link = document.getElementById("projectLink");
        link.classList.add("selected");
    }
    if (us === max)
    {
        link = document.getElementById("usLink");
        link.classList.add("selected");
    }
    if (lichens === max)
    {
        link = document.getElementById("lichensLink");
        link.classList.add("selected");
    }
}
window.addEventListener("scroll", selectedScroll);

const big = document.querySelector("#tableBig");
const small = document.querySelector("#tableSmall");

function reportWindowSize() {
    console.log(window.innerWidth);
    if (window.innerWidth < 1200) {
        big.style.display = "none";
        small.style.display = "block";
    }
    else {
        small.style.display = "none";
        big.style.display = "block";
    }
}

window.onresize = reportWindowSize;
