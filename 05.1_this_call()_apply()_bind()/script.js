/*
let obj={
    name:"Preet",
    age:23,
}

function myfunc(){
    console.log(this.name," - ",this.age);
}

myfunc.call(obj);
*/

const person = {
    fullName: 
        function(a,b,c) {
             return this.firstName + " " + this.lastName + a + b +c;
     }
}
const person1 = {
  firstName:"John",
  lastName: "Doe"
}
const person2 = {
  firstName:"Mary",
  lastName: "Doe"
}
const person3 = {
  firstName:"Hello",
  lastName: "Jony"
}

// This will return "Mary Doe"
let name1=person.fullName.call(person1,1,2,3);
let name2=person.fullName.apply(person2,[4,5,6]);//apply takes array as argument
//bind returns a function
let bindF=person.fullName.bind(person3,7,8,9);
let name3=bindF();
console.log("call() = ",name2,"\n","apply() = ",name1,"\n","bind() = ",name3);


const user = {
  name: "Preet",
  greet: function() {
    console.log("Hi,", this.name);
  }
};

const sayHello = user.greet.bind(user);
sayHello();  
// ✅ "Hi, Preet"
  
// ❌ "Hi, undefined" (this is lost when copied)
