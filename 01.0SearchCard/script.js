const users = [
  { name: "Preet", pic: "https://images.pexels.com/photos/28824973/pexels-photo-28824973.jpeg", bio: "I am developer, develop websites which are fully responsive" },
  { name: "Aarav", pic: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=800&auto=format&fit=crop", bio: "Frontend developer with a love for clean UI and animations" },
  { name: "Maya", pic: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=800&auto=format&fit=crop", bio: "Full-stack developer, passionate about building scalable apps" },
  { name: "Rohan", pic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=800&auto=format&fit=crop", bio: "Backend engineer who loves working with APIs and databases" },
  { name: "Ananya", pic: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=800&auto=format&fit=crop", bio: "UI/UX designer, focusing on human-centered design principles" },
  { name: "Kunal", pic: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800&auto=format&fit=crop", bio: "DevOps enthusiast who automates workflows and deployments" }
];

// Function to render user cards
function showUsers(arr) {
  const container = document.querySelector(".cards");
  container.innerHTML = ""; // clear existing cards

  if(arr.length==0){//"Empty";
    const h2 = document.createElement("h2");
    h2.textContent = "No Match Card";
    h2.className = "text-lg text-red-500";
    container.appendChild(h2);
  }

  arr.forEach(user => {
    // Outer card div
    const card = document.createElement("div");
    card.className = "card relative overflow-hidden rounded-lg shadow-lg";

    // User image
    const img = document.createElement("img");
    img.src = user.pic;
    img.className = "w-full h-full object-cover";
    card.appendChild(img);

    // Blurred overlay
    const blurLayer = document.createElement("div");
    blurLayer.className = "blurred-layer absolute inset-0 bg-black/50 backdrop-blur-sm";
    card.appendChild(blurLayer);

    // Content
    const content = document.createElement("div");
    content.className = "content absolute bottom-5 left-5 text-white";
    
    const h3 = document.createElement("h3");
    h3.textContent = user.name;
    h3.className = "text-lg font-semibold";

    const p = document.createElement("p");
    p.textContent = user.bio;
    p.className = "text-sm mt-1";

    content.appendChild(h3);
    content.appendChild(p);
    card.appendChild(content);

    container.appendChild(card);
  });
}

// Initial render
showUsers(users);

// Search/filter functionality
const inp = document.querySelector(".inp");
inp.addEventListener("input", () => {
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().startsWith(inp.value.toLowerCase())
  );
  showUsers(filteredUsers);
});
