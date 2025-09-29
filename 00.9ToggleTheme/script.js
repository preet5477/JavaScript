// Detect system preference
let theme1 = window.matchMedia("(prefers-color-scheme: dark)");

// Apply theme (helper function)
let applyTheme = (theme) => {
    if (theme === "dark") {
        document.body.classList.add("dark");
        document.body.classList.remove("light");
    } else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
};

// Load saved theme from localStorage, or fallback to system preference
let savedTheme = localStorage.getItem("theme");
if (savedTheme) {
    applyTheme(savedTheme);
} else {
    applyTheme(theme1.matches ? "dark" : "light");
}

// Listen for system theme changes (only if user hasn’t chosen)
theme1.addEventListener("change", () => {
    if (!localStorage.getItem("theme")) {
        applyTheme(theme1.matches ? "dark" : "light");
    }
});

// Handle button click
let toggle = document.querySelector(".themeToggle");
toggle.addEventListener("click", () => {
    let newTheme = document.body.classList.contains("light") ? "dark" : "light";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    console.log("Theme set to:", newTheme); 
});
