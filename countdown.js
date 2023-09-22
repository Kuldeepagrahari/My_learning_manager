const end=document.getElementById("final");
const enddate="18 sep 2023 9:00 AM";
end.innerText=enddate;
const inputs=document.querySelectorAll("input");
function cntdn(){
    const endd= new Date(enddate);
    const now = new Date();
    const dif=(endd-now)/1000;
    if(dif<0)return;
     inputs[0].value=Math.floor(dif/60/60/24);
    inputs[1].value=Math.floor(dif/60/60)%24;
    inputs[2].value=Math.floor(dif/60)%60;
    inputs[3].value=Math.floor(dif)%60;
   
}
cntdn();
setInterval(
    ()=>{cntdn();},1000 //arrow function call after every 1000ms or 1 sec
)
const slides=document.querySelectorAll(".photo")
var count=0;
slides.forEach(
    (photo,index)=>{
     photo.style.left=`${index*100}%`
    }
)
function prev(){
   
count--;
if(count==-1)count=6;
slideimage();


}
function next(){
count++;
if(count>6)count=1;
slideimage();


}
//prev();next();
const slideimage=()=>{
    slides.forEach(
        (photo)=>{
            photo.style.transform =`translateX(-${count*100}%)`;
    //    if(count==3)count++;
    // else count--; }
        })
}
