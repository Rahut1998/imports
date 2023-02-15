const hourEl=document.getElementById("hrs");
const minEl=document.getElementById("min");
const secEl=document.getElementById("sec");
const ampmEl=document.getElementById("ampm");

function updateclock(){
    let h =new Date().getHours()
    let m= new Date().getMinutes()
    let s= new Date().getSeconds()
    let ampm="AM"
    if(h>12){
        h=h-12
        ampm="PM"
        h="0"+h
    }
    hourEl.innerText="0"+h;
    minEl.innerText=m;
    secEl.innerText=s;
    ampmEl,(innerText=ampm);
    setTimeout(()=>{
        updateclock()
    },1000)
}
updateclock()
