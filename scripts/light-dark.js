const themeToggle = document.getElementById("mode-switcher");
const root = document.documentElement; // <html> element

globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
    if (localStorage.getItem("theme") === "os-default") {
        setTheme("os-default"); // Refresh colors
    }
});

function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    themeToggle.innerText = theme;
}


const savedTheme = localStorage.getItem("theme") || "os-default";
applyTheme(savedTheme);

export default function setupLightDark() {
    
    themeToggle.addEventListener("click", () => {
        const savedTheme = localStorage.getItem("theme") || "os-default";
        applyTheme(savedTheme === "light" ? "dark" : savedTheme === "dark" ? "os-default" : "light");
    });
}

// This is the old way of light dark