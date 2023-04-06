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

let uVisible = false;

var scrollU = function scrollUs() {
    var us = document.getElementById("usTile");

    var rect = us.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;
    
    if (isVisible != uVisible)
    {
        var link = document.getElementById("usLink");
        if (isVisible === true)
        {
            us.classList.add("anim");
            link.classList.add("selected");
        }
        else
        {
            us.classList.remove("anim");
            link.classList.remove("selected");
        }
        uVisible = isVisible;
    }

    return isVisible;
}

let pVisible = true;

var scrollP = function scrollProject() {
    var project = document.getElementById("projectTile");

    var rect = project.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    var isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    if (isVisible != pVisible)
    {
        var link = document.getElementById("projectLink");
        if (isVisible === true)
        {
            project.classList.add("anim");
            link.classList.add("selected");
        }
        else
        {
            project.classList.remove("anim");
            link.classList.remove("selected");
        }
        pVisible = isVisible;
    }

    return isVisible;
}

let mVisible = false;

var scrollM = function scrollMosses() {
    var mosses = document.getElementById("mossesTile");

    var rect = mosses.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    if (isVisible != mVisible)
    {
        var link = document.getElementById("mossesLink");
        if (isVisible === true)
        {
            mosses.classList.add("anim");
            link.classList.add("selected");
        }
        else
        {
            mosses.classList.remove("anim");
            link.classList.remove("selected");
        }
        mVisible = isVisible;
    }

    return isVisible;
}

window.addEventListener("scroll", scrollU);
window.addEventListener("scroll", scrollP);
window.addEventListener("scroll", scrollM);
