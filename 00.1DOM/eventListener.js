let btn=document.querySelector(".enentlis");
btn.addEventListener("click", () => {
    let v= document.getElementById("inp").value;
    console.log(v);
    btn.style="font-size:12px;color:pink;background-color: purple;width: 100px;height: 25px;border:1px solid black;border-radius:40px"
});

let inp=document.querySelector("input");
inp.addEventListener("input",(ev)=>{
   let v= document.getElementById("inp").value;
   if(ev.data!=null)
    console.log(ev.data);
});

let sellang = document.querySelector("select");
sellang.addEventListener("change",(data)=>{
    let val=data.target.value;
    console.log(val);
    if(val=="Hindi") document.body.style.backgroundColor="red";
     else if(val=="English") document.body.style.backgroundColor="yellow";
     else if(val=="Marati") document.body.style.backgroundColor="pink";
     else if(val=="Urdu") document.body.style.backgroundColor="green";
     else document.body.style.backgroundColor="white";
    document.getElementById("hLan").textContent=`${data.target.value} selected`;
}) 

