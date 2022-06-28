let content = document.querySelector(".quote-content");
let author = document.querySelector(".author");
let time = document.querySelector(".time");

let btn = document.querySelector(".btn");
var quotes = []

let currentTime = new Date().getHours();
// console.log(currentTime);

if(currentTime >=5 && currentTime <12) {
    time.innerHTML = "morning";
}
else if (currentTime >=12 && currentTime <16) {
    time.innerHTML = "afernoon";
}
else if (currentTime >=16 && currentTime <18) {
    time.innerHTML = "evening";
}
else {
    time.innerHTML = "night";
}

fetch("https://type.fit/api/quotes")
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    // console.log(data)
    quotes = data.filter((item)=>{
        if(item["text"] !== null && item["author"] !== null){
            return item;
        }
    })
    content.innerHTML = quotes[0]["text"];
    author.innerHTML = quotes[0]["author"];
    // console.log(quotes)
  });

btn.addEventListener("click",()=>{
    let randNum = Math.floor(Math.random()*quotes.length);
    content.innerHTML = quotes[randNum]["text"]
    author.innerHTML = quotes[randNum]["author"]

    let a = parseInt(Math.random()*250);
    let b = parseInt(Math.random()*100);
    let c = parseInt(Math.random()*250);

    let color = `rgba(${a},${b},${c},1)`;
    // console.log(color);
    document.documentElement.style.setProperty('--background-color', color);
})
