// window.addEventListener("keydown",(dats)=>{
//     let he=document.querySelector("h1");
//     if(dats.key==" ")
//             he.textContent="Space";
//     else
//     he.textContent=dats.key;
// });

var btn=document.querySelector("#btn");
var inp=document.querySelector("#inp");
  btn.addEventListener("click",()=>{
    inp.click();
    btn.style="background-color:#000";
});

inp.addEventListener("change",(dts)=>{
    let file=dts.target.files[0];
    if(file) btn.textContent=file.name;
})