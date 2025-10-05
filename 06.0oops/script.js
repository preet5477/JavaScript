// 1.Object.
// let obj = {
//   name:"Preet",
//   age:23,
//   course:"MERN",

//   write:function(){
//     let h1=document.createElement("h1");
//     h1.textContent=`(obj example-)  name = ${this.name}, age = ${this.age}, course = ${this.course}` ;
//     h1.style.color="darkblue";
//     document.body.append(h1);
//   }
// }
// obj.write();

//-----------------------------------------------


//constructor function
function funct(name, price, brand, color) {
  this.name = name;
  this.price = price;
  this.brand = brand;
  this.color = color;
  };

//method to shwo on screen (usig prototype to save memory)
// funct.prototype.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = `(Consturction function example) ${text} - ${this.price} - (${this.brand})- - ${this.city}`;
//     h1.style.color = this.color;
//     document.body.append(h1);
// };
// funct.prototype.city = "Delhi";// adding new property using prototype

// //create objects
// let obj1 = new funct("iphone", 100000, "apple", "red");
// let obj2 = new funct("samsung", 80000, "galaxy", "black");
// let obj3 = new funct("oneplus", 50000, "oneplus", "gray");
// // call method to show on screen
// obj1.write("I AM IPHONE");
// obj2.write("I AM SAMSUNG");
// obj3.write("I AM ONEPLUS");
//===========================================


// //2.class
class Mobile{
    constructor(name,price,brand,color){
        this.name=name;
        this.price=price;
        this.brand=brand;
        this.color=color;
    }

    erase(){
        document.body.querySelectorAll("h1").forEach((e)=>{
            if(e.style.color==="blue"){
              e.textContent="blue";
            }
        });
    }
    //method
    write(){
        let h1=document.createElement("h1");
        h1.textContent = `(class example - ) ${this.name} - ${this.price} - ${this.brand}`;
        h1.style.color = this.color;
        document.body.append(h1);
    }
}
//create object
let mob1=new Mobile("preet",1000,"apple","green");
let mob2=new Mobile("hello1",3000,"Sammsung","blue");
let mob3=new Mobile("Hello2",3000,"Sammsung","black");
//call method
mob1.write();
mob2.write();
mob3.write();