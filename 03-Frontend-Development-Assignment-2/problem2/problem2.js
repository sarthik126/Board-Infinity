function openBar() {
    document.querySelector(".header ul").style.display = "grid";
    document.querySelector(".burger-menu .bars").style.display = "none";
    document.querySelector(".burger-menu .bars-cancel").style.display = "inline-block";
}
function closeBar() {
    document.querySelector(".header ul").style.display = "none";
    document.querySelector(".burger-menu .bars").style.display = "flex";
    document.querySelector(".burger-menu .bars-cancel").style.display = "none";
}

// document.querySelector("#demo").innerHTML = "Hello World!";
// .burger-menu .bars display: flex;
// .burger-menu .bars-cancel display: none;
// .header ul display: none;