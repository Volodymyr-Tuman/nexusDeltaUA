const body = document.querySelector("body");
const imgTheme = document.getElementById("themeIcon");


function theme() {
    if (body.style.backgroundColor === "white" || body.style.backgroundColor === "") {
        body.style.backgroundColor = "black";
        imgTheme.setAttribute("src", "moon.png");
    } else {
        body.style.backgroundColor = "white";
        imgTheme.setAttribute("src", "sun.png");
    }
}
