//Promises
let prom=new Promise((res,rej)=>{
    let num=Math.floor(Math.random()*10);
    setTimeout(()=>{
        if(num>5) res("Success = "+num);
        else rej("Failed = "+num);  
    },2000);
});

prom
.then((data)=>{ console.log(data); }) //if promise is resolved
.catch((err)=>{console.log(err);}); //if promise is rejected
    
