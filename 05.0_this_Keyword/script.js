console.log("Globel this(type=window):",this);

//event this = event target
const btn = document.querySelector("h1");
btn.addEventListener("click",function(){
    console.log("Event this (type - event ): ",this);
    this.style.color = "red";
})


//class this
class newClass{
    constructor(){
        this.age=23;
        console.log("Class this(type - class):",this);
    }
}

let a = new newClass();
console.log(a);

//function this(es5 function) = window
function myFunc(){
    console.log("Function this(type=window):",this);
}
myFunc();

//Mehod this(es5 inside object) = object
const obj = {
    name: "Preet",
    newFunc: function(){
        console.log("Method this(type=object):",this);
    }
}
obj.newFunc();

//arrow function inside object(es6 inside object) = window
const arro={
name:"PREet",
arrowfun:()=>{
        console.log("arrow function this(type = window):",this);
    }
}
arro.arrowfun();

//method with arrow func inside function (es6 inside es5)
const person = {
  name: "Preet",
  greet: function f() {
    const inner = () => {
      console.log("ES6 inside ES5 - (type = obj):", this);
    };
    inner();
  }
};
person.greet();
