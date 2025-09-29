let sub=document.querySelector("div");
let nm=document.getElementById("name");
let ag=document.getElementById("age");
let gmail=document.getElementById("email");
let pass=document.getElementById("password");

sub.addEventListener("submit",(obj)=>{
    obj.preventDefault();
    let emailError=  document.querySelector("#emailError");
    let passError=document.querySelector("#passError");

    const mailRegex=/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const passwRegex=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!mailRegex.test(gmail.value)) {
        emailError.textContent="invalid gmail";
    }
    else emailError.textContent="";
   

    if(!passwRegex.test(pass.value)){
        passError.textContent="Invalid password";
    }else passError.textContent="";

    if((mailRegex.test(gmail.value)===true) && (passwRegex.test(pass.value))===true) 
    {
      setTimeout(() => {
            gmail.value="";
            pass.value="";
      }, 2000);   
    }


    // const ageRegex = /^(?:1[89]|[2-9][0-9]|1[01][0-9]|120)$/;
    // if(ageRegex.test(ag.value)!=true) console.log("NOt valid");
    // else console.log(ag.value);

    // if(ag.value<18 || ag.value>110) {
    //     document.querySelector(".err").style="display:initial";
    //     console.log("NOt valid");
    //     alert("Invalid age ")
    // }
    //else console.log(ag.value);
})