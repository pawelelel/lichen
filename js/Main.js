const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const elements = document.getElementsByClassName("hidden");

for (let i = 0; i < elements.length; i++) {
    observer.observe(elements[i])
}

let mybutton = document.getElementById("topBtn");

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










/*

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

var scrollM = function scrollLichens() {
    var lichens = document.getElementById("lichensTile");

    var rect = lichens.getBoundingClientRect();
    var elemTop = rect.top;
    var elemBottom = rect.bottom;

    isVisible = elemTop < window.innerHeight && elemBottom >= 0;

    if (isVisible != mVisible)
    {
        if (isVisible === true)
        {
            lichens.classList.add("anim");
        }
        else
        {
            lichens.classList.remove("anim");
        }
        mVisible = isVisible;
    }

    return isVisible;
}
*/

/*
window.addEventListener("scroll", scrollU);
window.addEventListener("scroll", scrollP);
window.addEventListener("scroll", scrollM);
*/
/*
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

//const element = document.getElementById('projectTile');
//window.addEventListener("scroll", (evt) => percentScroll(element));
*/