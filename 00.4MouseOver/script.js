// let mouse=document.querySelector("div");
// mouse.addEventListener("mouseover",()=>{
//     mouse.style="background-color:pink";
// });
// mouse.addEventListener("mouseleave",()=>{
//     mouse.style.backgroundColor="yellow";
// });
// mouse.addEventListener("click",()=>{
//     mouse.style.backgroundColor="cadetblue";
// });

window.addEventListener("mousemove",(dets)=>{
    document.querySelector("#abcd").style.top=dets.clientY+"px";
    document.querySelector("#abcd").style.left=dets.clientX+"px";
});

