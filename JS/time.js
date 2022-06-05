var Studytime = document.getElementById("Studytime");
var breaktime = document.getElementById("breaktime");
var Cycle = document.getElementById("Cycle");
var LongBreak = document.getElementById("LongBreak");


// A stopwatch part
var hour,min,sec;//define hour minutes second
hour=min=sec=0;
var millisecond=0;//define hour minutes second
var int;

// When the start button triggers
function start()
{
    int=setInterval(timer,100);
}

// When the reset button triggers
function Reset()
{
    window.clearInterval(int);
    millisecond=hour=min=sec=0;
    document.getElementById('screentimetext').value='00:00:00';
}

// When the stop button triggers
function stop()
{
    window.clearInterval(int);
}

// the timer 
function timer()
{
    millisecond=millisecond+100;
    if(millisecond>=1000){
        millisecond=0;
        sec=sec+1;
    }
    if(sec>=60)
    {
        sec=0;
        min=min+1;
    }

    if(min>=60)
    {
        min=0;
        hour=hour+1;
    }
    document.getElementById('screentimetext').value=hour+':'+min+':'+sec;

}

// The setting of Pomodoro Timer 
function secondtimer(){
    let  Studytime = Studytime.value;
    let breaktime = breaktime.value;
    let Cycle = Cycle.value;
    let LongBreak = LongBreak.value;

    let times=0;
    if (times<Cycle){setTimeout(function(){alert("next is break time")}
    ,Studytime*60*1000)
    setTimeout(function(){alert("next is study time")}
    , breaktime*60*1000)
    times++;
    }
    else{
        setTimeout(function(){alert("next is long break")}
        , 100) 
    }
}