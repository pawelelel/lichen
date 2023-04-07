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
        if (isVisible === true)
        {
            us.classList.add("anim");
        }
        else
        {
            us.classList.remove("anim");
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
        if (isVisible === true)
        {
            project.classList.add("anim");
        }
        else
        {
            project.classList.remove("anim");
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
        if (isVisible === true)
        {
            mosses.classList.add("anim");
        }
        else
        {
            mosses.classList.remove("anim");
        }
        mVisible = isVisible;
    }

    return isVisible;
}

window.addEventListener("scroll", scrollU);
window.addEventListener("scroll", scrollP);
window.addEventListener("scroll", scrollM);


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
    link = document.getElementById("mossesLink");
    link.classList.remove("selected");



    var project = percentScroll(document.getElementById('projectTile'));
    var us = percentScroll(document.getElementById('usTile'));
    var mosses = percentScroll(document.getElementById('mossesTile'));

    var max = Math.max(project, us, mosses);

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
    if (mosses === max)
    {
        link = document.getElementById("mossesLink");
        link.classList.add("selected");
    }
}
window.addEventListener("scroll", selectedScroll);

//const element = document.getElementById('projectTile');
//window.addEventListener("scroll", (evt) => percentScroll(element));
