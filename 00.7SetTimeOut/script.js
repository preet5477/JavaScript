let progress_text=document.getElementById("progress-text");
let downloaded=document.getElementById("downloaded");
let progress_fill = document.getElementById("progress-fill");
let number=0;

let time=setInterval(() => {
    if(number<100){
        number+=1;
        console.log(number);
        progress_text.textContent=number;
        downloaded.textContent=number;
        progress_fill.style.width=number+"%";
    }
    else{
        document.querySelector("h2").textContent="Download Successfull...";
        console.log("SuccessFull");
        clearInterval(time);
    }
}, 300);

    