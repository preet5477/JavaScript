
//22092025



let d1=document.querySelector(".a");
d1.addEventListener("click",(obj)=>{
    console.log("On A");
    // obj.stopPropagation();
},true)//true of capturing phase
;

let d2=document.querySelector(".b");
d2.addEventListener("click",(obj)=>{
//    obj.stopPropagation();//for preventing bubbling
    console.log("On B");
    
});

let d3=document.querySelector(".c");
d3.addEventListener("click",(obj)=>{
    console.log("On C");
    // obj.stopPropagation(); 
})


let btn=document.querySelector(".btn");
btn.addEventListener("click",(obj)=>{
    console.log("On Btn");
    // obj.stopPropagation();
})


///============

let inp=document.querySelector("input");
inp.addEventListener("input",(obj)=>{
//    let len=obj.target.value.length;
 let span=document.querySelector("span");
 let len=inp.value.length;
   
    if(len>20)span.style.color="red";
    else span.style.color="black";

  
   span.textContent=`${len}`;
});