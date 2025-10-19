const body = document.querySelector("body")
const imgTheme = document.getElementById("themeIcon")
const allDiv = document.querySelectorAll("#intro, #games, #why, #rules")
const DivWhy = document.querySelectorAll(".feature-card")

function theme() {
    if (body.style.backgroundColor === "white" || body.style.backgroundColor === "") {
        body.style.backgroundColor = "black"


        allDiv.forEach(allDiv => allDiv.style.boxShadow = "0 10px 30px rgba(255, 255, 255, 0.2)")
        allDiv.forEach(allDiv => allDiv.style.backgroundColor = "#444444")
        allDiv.forEach(allDiv => allDiv.style.color = "white")


        DivWhy.forEach(card => 
            {
                card.classList="feature-card-dark"
            })
        imgTheme.setAttribute("src", "moon.png")
    } else {
        body.style.backgroundColor = "white"


        allDiv.forEach(allDiv => allDiv.style.backgroundColor = "white")
        allDiv.forEach(allDiv => allDiv.style.boxShadow = "0 10px 30px rgba(0,0,0,0.2)")
        allDiv.forEach(allDiv => allDiv.style.color = "black")

        DivWhy.forEach(card => 
            {
                card.classList="feature-card"
            })
        imgTheme.setAttribute("src", "sun.png")
    }
}
