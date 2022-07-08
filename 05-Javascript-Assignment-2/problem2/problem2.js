let total = document.querySelector(".total");
let tip = document.querySelector("#tip2");
let tipPercent = document.querySelector(".tip-percent");
let tipAmount = document.querySelector(".tip-amount");
let billAmount = document.querySelector(".bill-amount");

tip.addEventListener("input",()=>{
    tipPercent.innerHTML = tip.value+"%";
    
    tipAmount.innerHTML = parseInt(tip.value) * parseInt(total.value)/100;
    billAmount.innerHTML = parseInt(total.value) + parseInt(tip.value) * parseInt(total.value)/100;
});

total.addEventListener("input",() => {
    tipAmount.innerHTML = parseInt(tip.value) * parseInt(total.value)/100;
    billAmount.innerHTML = parseInt(total.value) + parseInt(tip.value) * parseInt(total.value)/100;
});