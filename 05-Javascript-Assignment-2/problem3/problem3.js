let timeVal = document.querySelector(".time");
let minuteVal = 0;
let secondVal = 0;

let handle;
let flag = 0;

function startTimer(){

    if(flag !== 0) return;

    flag = 1;
    handle = setInterval(()=>{

        if( secondVal === 59 ){
            secondVal = 0;
            minuteVal += 1;
        } else {
            secondVal += 1;
        }

        if( minuteVal === 60 ) {
            clearInterval(handle);
            return;
        }
       timeVal.innerHTML = minuteVal+":"+secondVal;
    }, 1000)
}

function stopTimer(){
    clearInterval(handle);
    flag = 0;
}

function resetTimer(){
    minuteVal = 0;
    secondVal = 0;
    timeVal.innerHTML = minuteVal+":"+secondVal;
    clearInterval(handle);
    flag = 0;
}