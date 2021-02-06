//Timer
let timer;
let seconds = 0;
let  min = 0;
let hr = 0;
let start_btn = document.getElementById("start");
let stop_btn = document.getElementById("stop");
let reset_btn = document.getElementById("reset");
let time = document.getElementById("timer");

start_btn.addEventListener("click",function () {
    timer = setInterval(TimerHandler,1000);
    reset_btn.disabled = false;

});

stop_btn.addEventListener("click" ,function () {
    timer = clearInterval(timer);
    reset_btn.disabled = false;
});


reset_btn.addEventListener("click" ,function () {
    timer = clearInterval(timer);
    reset_btn.disabled = true;
    seconds = 0;
    hr = 0;
    min = 0;
    time.innerHTML ="00:00:00";
     
});

function TimerHandler () {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        min++;
    }
    if(min == 60){
        min = 0;
        hr++;
    }
    DisplayTime();

}
function DisplayTime()
{
    let sec = seconds;
    let minute = min;
    let  hour = hr;
    if(seconds < 10){
        sec = "0"+seconds;
    }
    if(min < 10){
        minute = "0"+min;
    }
    if(hr < 10){
        hour ="0"+hr;

    }
    time.innerHTML = hour + " : " + minute+ " : " + sec;

}

