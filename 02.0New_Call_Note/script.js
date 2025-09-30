
const tasts=[];



// --- Elements from the Main Dashboard ---
const plusButton = document.getElementById('plus-button');

// --- Elements from the New Call Modal ---
const callFormModal = document.getElementById('call-form-modal');
const form = document.getElementById('new-call-form');
const closeButton = document.getElementById('close-button');

// --- QUERY SELECTORS FOR ALL INPUT FIELDS ---
const imageUrlInput = document.getElementById('image-url');
const fullNameInput = document.getElementById('full-name');
const homeTownInput = document.getElementById('home-town');
const purposeInput = document.getElementById('purpose');

// Use querySelectorAll to get all radio buttons in the 'category' group
const categoryRadios = document.querySelectorAll('input[name="category"]');

// --- Event Listeners ---
// 1. Open Modal when PLUS button is clicked
plusButton.addEventListener('click', ()=>{
    callFormModal.classList.remove('hidden');
});


// 2. Close Modal when the Close button is clicked
closeButton.addEventListener('click', ()=>{
    callFormModal.classList.add('hidden');
});

//Function for save data
let saveToLocalStorage = (obj)=>{
    let oldTasks = [];    
    if(localStorage.getItem("Tasks") !== null){
        oldTasks=JSON.parse(localStorage.getItem("Tasks"));        
    } 
    oldTasks.push(obj);
    localStorage.setItem("Tasks",JSON.stringify(oldTasks));
}


form.addEventListener("submit", (evt) => {
  evt.preventDefault();

    // reset previous errors
    [imageUrlInput, fullNameInput, homeTownInput, purposeInput].forEach(input => {
    input.classList.remove("border-red-500");
  });

  let isValid = true;

  // Validate image URL
  if (imageUrlInput.value.trim() === "") {
    imageUrlInput.classList.add("border-red-500");
    isValid = false;
  }

  // Validate full name
  if (fullNameInput.value.trim() === "") {
    fullNameInput.classList.add("border-red-500");
    isValid = false;
  }

  // Validate home town
  if (homeTownInput.value.trim() === "") {
    homeTownInput.classList.add("border-red-500");
    isValid = false;
  }

  // Validate purpose
  if (purposeInput.value.trim() === "") {
    purposeInput.classList.add("border-red-500");
    isValid = false;
  }

  // Validate category radios
  let selectedCategory = false;
  categoryRadios.forEach(radio => {
    if (radio.checked) {
      selectedCategory = radio.value;
    }
  });

  if (!selectedCategory) {
    alert("Please select a category.");
    isValid = false;
  }

  // If all good
  if (isValid) {
    // Collect form data
    const formData = {
      imageUrl: imageUrlInput.value.trim(),
      fullName: fullNameInput.value.trim(),
      homeTown: homeTownInput.value.trim(),
      purpose: purposeInput.value.trim(),
      category: selectedCategory,
    };

    saveToLocalStorage(formData);//Calling function for save data into local storage
    
    // Optionally close modal and reset
    form.reset();
    callFormModal.classList.add("hidden");
    
  } else {
    alert("❌ Please fill all fields correctly before submitting.");
  }
});

//FOr ADd Cards
let addCards=()=>{
    let allTasks = JSON.parse(localStorage.getItem("Tasks"));

    allTasks.forEach((tasks)=>{
            
        // Create card container
        const userCard = document.createElement("div");
        userCard.className = "bg-gray-800 text-white p-6 rounded-2xl w-80 shadow-2xl relative card-stack";

        // --- Top Section (Profile Image) ---
        const topSection = document.createElement("div");
        topSection.className = "flex items-start justify-between mb-4 relative z-10";

        const profileImg = document.createElement("img");
        profileImg.src = tasks.imageUrl;//-----1.
       // profileImg.alt = "Profile Picture";
        profileImg.className = "rounded-full w-12 h-12 bg-gray-600 mr-4";

        topSection.appendChild(profileImg);

        // --- User Name ---
        const userName = document.createElement("h2");
        userName.className = "text-xl font-semibold mb-3 relative z-10";
        userName.textContent = tasks.fullName;//------2

        // --- Info Grid ---
        const infoGrid = document.createElement("div");
        infoGrid.className = "grid grid-cols-2 gap-y-1 text-sm text-gray-400 mb-6 relative z-10";

        const span1 = document.createElement("span");
        span1.textContent = "Home town";
        const span2 = document.createElement("span");
        span2.className = "text-white";
        span2.textContent = tasks.homeTown;

        const span3 = document.createElement("span");
        span3.textContent = "Purpose ";
        const span4 = document.createElement("span");
        span4.className = "text-white";
        span4.textContent = tasks.purpose;

        infoGrid.append(span1, span2, span3, span4);

        // --- Action Buttons ---
        const actions = document.createElement("div");
        actions.className = "flex space-x-4 relative z-10";

        // Call Button
        const callButton = document.createElement("button");
        callButton.className = "flex-1 flex items-center justify-center bg-red-600 hover:bg-red-500 text-white font-medium py-2 rounded-lg transition duration-150 ease-in-out";

        const callIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        callIcon.setAttribute("class", "w-4 h-4 mr-2");
        callIcon.setAttribute("fill", "none");
        callIcon.setAttribute("stroke", "currentColor");
        callIcon.setAttribute("viewBox", "0 0 24 24");

        const callPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        callPath.setAttribute("stroke-linecap", "round");
        callPath.setAttribute("stroke-linejoin", "round");
        callPath.setAttribute("stroke-width", "2");
        callPath.setAttribute("d", "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z");

        callIcon.appendChild(callPath);
        callButton.append(callIcon, document.createTextNode("Call"));

        // Message Button
        const messageButton = document.createElement("button");
        messageButton.className = "flex-1 bg-gray-700 hover:bg-gray-600 text-white font-medium py-2 rounded-lg transition duration-150 ease-in-out";
        messageButton.textContent = "Message";

        actions.append(callButton, messageButton);

        // --- Append all to card ---
        userCard.append(topSection, userName, infoGrid, actions);

        // Finally, append to body (or any container)
        document.getElementById("user-card").appendChild(userCard);
        
    });
}

addCards();


let stack = document.querySelector(".card-stack");
// Next button
document.getElementById("nextBtn").addEventListener("click",() => {
 // current = (current + 1) % cards.length;
  //showCard(current);
  console.dir(stack); 
});

// Prev button
document.getElementById("prevBtn").addEventListener("click", () => {
  //current = (current - 1 + cards.length) % cards.length;
 // showCard(current);
});