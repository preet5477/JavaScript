

//Object
/* 
let de = "1123";
let obj={
    a:1,
    b:"one",
    c:true,
    d:de
}
document.write(JSON.stringify(obj)+"<br>");

let obj2=obj;
obj2.a=3;
document.write(JSON.stringify(obj2)+"<br>");
console.log(obj);
*/

/*Array
// let arr=["arr1",4,"arr3"];
// document.write(JSON.stringify(arr));
// let arr2=arr;
// arr2[1]="arr2";
// console.log("array = ",arr);
*/


//collison
// let a=5;
// let s="0";
// let c=a+s;
// console.log(c);
// console.log(typeof(c));

//Operator
// 1.arithmetic
// let x=5;
// const y=5;
// console.log("x+y = ",x+y);
// console.log("x-y = ",x-y);
// console.log("x*y = ",x*y);

// //2.comparison operator
// console.log("x==y",x==y);
// console.log("x===y",x===y);

// //3.logical 
// let p=0;
// let q=1;
// console.log("x&&y",p&&q);
// console.log("x||y",p||q);
// console.log("!p",!p);

// // 4.assignment
// let a="hello";
// a += " Preet";

// let x = 5;
//    // x **= 2;

// console.log(">>",x>>>1);


//5.biwise
// let x,y;
// x=3,y=2;
// console.log("x&y",x&y);
// console.log("x|y",x|y);
// console.log("x^y",x^y);

//6.conditional
// let a=b=5;
// let res= a==b?"equal ":"not equal";
// console.log(res);

// 7.typeof
// let a="6";
// console.log(typeof(a));
//

// //8.Instanceof
// let a=[];
// let b ={};
//  let c= ()=>{}
// console.log((a instanceof Array));
// console.log((b instanceof Object));
// console.log((c instanceof Function));

//control 
// let a,b=5;a=9;
// if(a>b)console.log(a);
// else if(a<b)console.log(b);
// else console.log(a,b);

// for(let i=10;i>=1;i--)console.log(i);

// let a =[true,"Hello",212,"Hdfwfi"];

// for(i in a){
//     document.writeln(i+" - "+a[i]+"<br/>");
// }


let arr=[1,2,3,4,5,6,7,8,9,99];
for(a in arr){
    console.log('key= ',a);
}

for(a of arr){
    console.log("value = ",a);
}