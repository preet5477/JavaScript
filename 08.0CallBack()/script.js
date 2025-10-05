//normal callback function
output=(out)=>{
    console.log("The output is "+out);
}
let multiply=(a,b,callback)=>{
    console.log("value of a,b is "+ a +" and "+b);
    let mlt=a*b;
    callback(mlt);
}
multiply(6,4,output);


//asynchronous callback function
function f1(a,b,callback){
    console.log("F1 called");
    callback(a*b);
}

f1(4,6,function(val){
    console.log("Callback function called(multiply)  " +val);
});