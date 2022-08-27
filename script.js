let counter=localStorage.getItem('counter') || 0;
document.querySelector("#n").innerHTML=counter;
function updateClicks() {
    counter++;
    document.querySelector("#n").innerHTML=counter;
    localStorage.setItem('counter',counter);
}

function clickv() {
    document.querySelector("#clicks").style.visibility="visible";
}
