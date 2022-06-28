let clock = document.querySelector(".clock");
let date = document.querySelector(".date");
let start = document.querySelector(".start");
let stop = document.querySelector(".stop")

clock.innerHTML = new Date().toLocaleTimeString();
date.innerHTML = new Date().toLocaleDateString();

let handle;

start.addEventListener("click",()=>{
    handle = setInterval(()=>{
        clock.innerHTML = new Date().toLocaleTimeString();
        date.innerHTML = new Date().toLocaleDateString();
    }, 1000)
})

stop.addEventListener("click",()=>{
    clearInterval(handle);
})