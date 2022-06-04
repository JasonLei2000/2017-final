var Studytime = document.getElementById("Studytime");
var breaktime = document.getElementById("breaktime");
var Cycle = document.getElementById("Cycle");
var LongBreak = document.getElementById("LongBreak");

var flag=0;
var time=0;

function start(){
    if (flag==1){
        time++
        timeupload();
    }
    setTimeout("start()",100)
}

function timeupload(screentime){
    screentime = parseInt(screentime);
    if(screentime<10){
        return "0" + screentime;    }
        else{
            return screentime;
        }

}

function change(){
    let sec=timeupload(time*100/1000%60);
    let min=timeupload(time*100/1000/60%60);
    let hour=timeupload(time*100/1000/60/60);
    document.getElementById("time").innerText=hour+":"+min+":"+ sec;
}