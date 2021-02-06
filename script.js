//Timer
let timer;
let seconds = 0;
let  min = 0;
let hr = 0;

let start_btn = document.getElementById("start");
start_btn.addEventListener("click",function () {
    timer = setInterval(TimerHandler,1000);

});

let stop_btn = document.getElementById("stop");
stop_btn.addEventListener("click" ,function () {
    timer = clearInterval(timer);
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
    let sec;
    let minute;
    let  hour;
    let time = document.getElementById("timer");
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

