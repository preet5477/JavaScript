
//localStorage.setItem("mobileNo","7724036774");
//localStorage.setItem("name","Preet");
// localStorage.removeItem("name");
// localStorage.clear();
// console.log(localStorage.getItem("name"));
// console.log(localStorage.getItem("mobileNo"));


// sessionStorage.setItem("name1","Abde");
// sessionStorage.removeItem("name");
// console.log(sessionStorage.getItem("name"));
// console.log(sessionStorage.getItem("name1"));

// document.cookie="gmail=preet579@gmail.com";


const darkMode = window.matchMedia("(prefers-color-scheme: dark)");
console.log("Matches dark mode:", darkMode.matches); // true or false

// let theme=()=>{
//     if(darkMode.matches){
//         document.body.classList.add("dark");
//     console.log("true");
//     }else{
//         document.body.classList.add("light");
//     }
// }
// theme();



//  localStorage.setItem("friends",JSON.stringify(["Preet","Kartik","Aman","Akash"]));
let nam=JSON.parse(localStorage.getItem("friends"));
nam.forEach(element => {
    console.log(element);
});
// console.log(localStorage.getItem("friends"));