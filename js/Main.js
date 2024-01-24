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

let menu = true;
let h = document.getElementById("hamburger");
let div1 = document.getElementById("1");
let div2 = document.getElementById("2");
let div3 = document.getElementById("3");
let m = document.getElementById("menu");
h.addEventListener("click", (event) => {
    if (menu){
        div1.classList.remove("anim1Ret");
        div2.classList.remove("anim2Ret");
        div3.classList.remove("anim3Ret");
        div1.classList.add("anim1");
        div2.classList.add("anim2");
        div3.classList.add("anim3");
        menu = false;

        m.classList.remove("menuAnimRet");
        m.classList.add("menuAnim");
    }
    else {
        div1.classList.remove("anim1");
        div2.classList.remove("anim2");
        div3.classList.remove("anim3");
        div1.classList.add("anim1Ret");
        div2.classList.add("anim2Ret");
        div3.classList.add("anim3Ret");
        menu = true;

        m.classList.remove("menuAnim");
        m.classList.add("menuAnimRet");
    }
});

/*

preload images jak sie zaladuje low res to potem podmeniam na photos

var images = [];
function preloadImages(){
    for (var i = 6; i <= 39; i++){
        images[i] = new Image();
        images[i].src = window.location.origin + '/photos/' + i + '.jpg';
    }
}

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