
// Create a single container for all toasts
let getOrCreateToastContainer = (config) => {
    let container = document.querySelector('.toaster-container');
    if (!container) {
        container = document.createElement('div');
        container.className = `toaster-container ${config.positionX === "right" ? "right-5" : "left-5" } fixed p-10
            flex flex-col items-start gap-4 z-50 ${config.positionY === "top" ? "top-5" : "bottom-5"}`;
        document.body.appendChild(container);
    }
    return container;
};

let createTo = (config) => {
    const container = getOrCreateToastContainer(config);

    return (msg) => {
        const div = document.createElement('div');
        div.className = `inline-block ${config.theme === "dark" ? "bg-gray-500 text-white" : "bg-green-400 text-black"} px-4 py-2 rounded shadow-lg transition-opacity duration-500 opacity-0 pointer-events-none mt-2`;
        
        div.textContent = msg;
        container.appendChild(div);

        setTimeout(() => {
            div.classList.remove('opacity-0');
            div.classList.add('opacity-100');
            div.classList.remove('pointer-events-none');
        }, 10);

        setTimeout(() => {
            div.classList.add('opacity-0');
            div.classList.remove('opacity-100');
            div.classList.add('pointer-events-none');
            setTimeout(() => {
                if (div.parentNode) {
                    div.parentNode.removeChild(div);
                }
            }, 500); // Wait for fade-out transition
        }, config.duration * 1000);
    };
};

let toast = createTo({
    duration: 3,
    theme: "dark",
    positionX: "right",
    positionY: "top"
});

toast("HELLO toaster");

let c = 0;
const btn = document.createElement("button");
btn.textContent = "Show Toast";
btn.className = "bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded shadow transition-colors duration-200 mt-8 ml-8";
btn.onclick = () => {
    toast(`Button Clicked! = ${++c}`);
};
document.body.appendChild(btn);
