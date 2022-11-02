document.querySelector("#darkmode-button").style.background = darkmode.inDarkMode? "#fff" : "#000";
document.querySelector("#author").style.borderColor = darkmode.inDarkMode? "#fff" : "#000";
document.querySelector("#darkmode-button").onclick = function(e){
    darkmode.toggleDarkMode();
    document.querySelector("#darkmode-button").style.background = darkmode.inDarkMode? "#fff" : "#000";                
    localStorage.setItem("darkMode",darkmode.inDarkMode);
    document.querySelector("#author").style.borderColor = darkmode.inDarkMode? "#fff" : "#000";
}