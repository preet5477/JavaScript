//Promises
let prom=new Promise((res,rej)=>{
    let num=Math.floor(Math.random()*10);
    setTimeout(()=>{
        if(num>5) res();
        else rej();  
    },1000);
});

//Async Await
async function onSuccess(){
    let resul=await prom;//await can be used only inside async function
 
    //try catch block is used to handle error in async await
    try{
        console.log("Result: "+resul);
    }
    catch(err){
        console.log("Error: "+err);
    }   
}

onSuccess();
