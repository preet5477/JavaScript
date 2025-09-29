let count=0;
let onAdd=()=>{//DYNAMIC dom manipulation
    count++;
    let newElem=document.createElement("h3");
    newElem.textContent="Helloooooo"+count;
    console.log(newElem);
    document.getElementById("div2").append(newElem);
}  

const onChangeStyle=()=>{//dom manipulation
   let ch= document.getElementById("btnChange");
   ch.style="color:white;width: 90px,height: 45px;border: 3px solid black;background-color: red";
}

const edit=()=>{//Query selector
    let hi2=document.querySelector("#head2");
    hi2.textContent="HIII2";
    let hii3=document.querySelector("#head3");
    hii3.textContent="HIiii3";
}

const onChange=()=>{  //get and set attribute
    let img= document.querySelector("img");
    img.setAttribute("src","https://media.istockphoto.com/id/121199853/photo/closeup-of-guy-working-on-a-laptop-indoor.webp?a=1&b=1&s=612x612&w=0&k=20&c=1cFqSPIjH981E69lJFNrRiqUDDsOqHfRdpW2CKu9sSc=");
    img.setAttribute("border","2px solid black");

    var h=  document.getElementById("head1");
    h.style="color:pink"; 
    console.log("head1");    
}

const onRemove=()=>{
   let ele=document.querySelector("#imgDiv").remove();
}
