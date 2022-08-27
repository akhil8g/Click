let counter=localStorage.getItem('counter') || 0;
document.querySelector("#n").innerHTML=counter;
function updateClicks() {
    counter++;
    document.querySelector("#n").innerHTML=counter;
    document.querySelector(".iframe-container").style.display="block";
    localStorage.setItem('counter',counter);
}

let a=0;
function clickv() {
    if (a%2==0) {
        document.querySelector("#clicks").style.visibility="visible";
        a=1;   
    }

    else {
        document.querySelector("#clicks").style.visibility="hidden";
        a=0;
    }

}
let n=0;

function reset() {
    n=0;
    document.querySelector("h1").innerHTML=n;
}

function increase() {
    n++;
    document.querySelector("h1").innerHTML=n;
}

function decrease() {
    n--;
    document.querySelector("h1").innerHTML=n;
}

