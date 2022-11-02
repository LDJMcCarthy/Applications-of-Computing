dark = localStorage.getItem("darkMode");
if (dark === null) {
    localStorage.setItem("darkMode",darkmode.inDarkMode);
}
darkmode.setDarkMode(dark === "true");