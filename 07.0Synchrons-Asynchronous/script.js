//synchronous code
let synchro=()=>{
    console.log("HEllo 1");
    console.log("Hello 2");
    console.log("Hello 3");
}

//asynchronous code
let asynch=()=>{
    console.log("HEllo 1");
    setTimeout(() => {
        console.log("Hello 2");//after 1 sec this will be printed
    },1000);
    console.log("Hello 3");
}
