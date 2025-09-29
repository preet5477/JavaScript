// let arr=[1,2,3,4,8];
// let sum=0;


// // for (const key in arr) {
// //     //sum+=arr;
// //   console.log(`${key}: ${arr[key]}`);
// // }

// // arr.forEach((a)=>{
// //     console.log(a);
// // });


// // for(let i=0;i<5;i++){
// //     sum+=arr[i];
// // }
// // console.log(sum);

// //1.push()
// arr.push(6);
// console.log("After push 6 = ",arr);

// arr.pop();
// console.log("After pop 6 = ",arr);

// arr.shift();
// console.log(" After shift = ",arr);

// arr.unshift(1);
// console.log(" After unshift = ",arr);

// arr.splice(2,2);
// console.log(" After remove..slice(2,2) = ",arr);

// arr.splice(2,0,3,5,9,6,3);
// console.log("   After add...slice = ",arr);

// arr.splice(6,1,7);
// console.log("After change...slice = ",arr);


// arr=arr.sort(function(a,b){
//     return a-b;
// })
// console.log("after sort (ascenting)= ",arr);

// arr=arr.sort(function(a,b){
//     return b-a;
// })
// console.log("after sort (decending)= ",arr);





//-----Higher order func



// ////0.for each loop
// const num=[1,2,3,4,5,6,7,8,3,5,9,0,7,6,4];
// num.forEach(function(n,i){
//     if(n%2==0) num[i]=`${n}-even`;
//     else num[i]=`${n} - odd`;
// });
// console.log(num);

//1.Map
// let n1=num.map(function(n,i){
//     if(n%2==0) return "even";
//     else return "odd";
// });
// console.log(n1);

//2.filter
// let num=[1,2,3,4,5,6,7,8,9,10];
// let odd=num.filter(n=>n%2!=0);
// console.log(odd);

//3.reduce
// let num=[112,222,311,47,555,6,99,8,92,1110];
// let grater=num.reduce((accum,val)=>{
//     if((accum<val) &&(accum!=-1) ) return accum;
//     else return val;
// },-1);
// console.log("smaller : ",grater);

//4.some
// let num=[112,222,311,47,555,6,99,8,92,1110];
// let ans=num.some((val)=>{
//     return  val>90;
// });
// console.log(ans);

//5.every
// let num=[112,222,311,47,555,6,99,8,92,1110];
// let ans=num.every((val)=>{
//     return val>90;
// })
// console.log(ans);