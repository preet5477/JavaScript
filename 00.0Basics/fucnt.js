//----//
// function sum(...val){
//     let s=0;
//     val.forEach(function (v){
//         s=s+v;
//     });
//     return s;
// }
// console.log(sum(1,2,3,4,5,6,7,8,9));




//----------FUnction--------------//

//Function
// function f(){
//     let a=10;
//     document.writeln("a = "+a);
// }
// f();

// function count(){
//             console.log("Preet");
//         }

// let z=1;
// let a=(b)=>{
//     z++;            
//     console.log(z*b);
// }

//--spread
// let x = ["Tutorials", "Point"];
// console.log(x); // [ 'Tutorials', 'Point' ]
// console.log(...x); // Tutorials Point


//1.Arrow func
// const abcdef = (a,b) => a*b;
// console.log(abcdef(3,4));

//2.self- executive anonymous fun
// const result = (function() {
//   var privateData = 'This is a secret.';
//   return privateData;
// })();
// console.log(result); // Output: This is a secret.
// console.log(typeof privateData); // Output: undefined


// 3.The constructor function is the blueprint
// function Car(make, model, color) {
//   this.make = make;
//   this.model = model;
//   this.color = color;
// }
// // Creating new cars from the blueprint
// const myCar = new Car('Toyota', 'Camry', 'Red');
// const yourCar = new Car('Ford', 'Mustang', 'Blue');
// console.log(myCar.color); // Output: Red


//4.Higher ordere function
// 4.1 take input )
// function orderFood(item, callback) {
//   console.log(`Ordering ${item}...`);
//     callback(); 
// }
// // This is the callback function we provide
// function sayThanks() {
//   console.log("Thanks for the delivery!");
// }
// orderFood('Pizza', sayThanks);


//4.2.Reurn a fun(HOf)
// function f(a){
//     return function(b){
//         return a*b;
//     }
// }
// console.log(f(4)(4));


