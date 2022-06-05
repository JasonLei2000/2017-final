var Studytime = document.getElementById("Studytime");
var breaktime = document.getElementById("breaktime");
var Cycle = document.getElementById("Cycle");
var LongBreak = document.getElementById("LongBreak");
const form = document.getElementById("timeform");
const button = document.querySelector("#timeform > button")

var flag=0;
var time=0;

button.addEventListener("click", function(event) {
    event.preventDefault();
    let Studytime = Studytime.value;
    let breaktime = breaktime.value;
    let  Cycle =  Cycle.value;
    let LongBreak = LongBreak.value;
    if (Studytime) {
        addtime(Studytime, breaktime, Cycle,);
    }
})
function addtime(Studytime, breaktime, Cycle,){
    for (let i =0;i<Cycle+1;i++){
        setTimeout(alert("Next is break time"),Studytime*1000*60)
        setTimeout(alert("Next is study time"),breaktime*1000*60)
    }
if (i==Cycle){
    setTimeout(alert("Next is Long break"),1000)
}
    
}
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