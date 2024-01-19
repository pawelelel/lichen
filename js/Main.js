document.documentElement.scrollTop = 0;
window.name = "lichen"

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
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

var images = [];
function preloadImages(){
    for (var i = 6; i <= 39; i++){
        images[i] = new Image();
        images[i].src = window.location.origin + '/photos/' + i + '.jpg';
    }
}



/*

preload images jak sie zaladuje low res to potem podmeniam na photos

preloadImages()

var imgs = document.getElementsByClassName('img')

for (let i = 0; i <= 33; i++) {
    imgs[i].addEventListener("load", f(i));
}

function f(i, event)
{
    console.log("zaladowano " + (i+6))
    console.log(imgs[i])
    console.log(images[i+6])
    delay(5000);
    imgs[i].src = images[i+6].src;
    console.log(imgs[i])
    imgs[i].removeEventListener("load", f);
    images[i+6].removeEventListener("load", f);
}
*/