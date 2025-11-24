const container = document.querySelector("div")

function createGrid(numberSquares) {
    let squareWidth = 960/numberSquares
container.style.cssText = "display: flex; width: 960px; flex-wrap: wrap"
for ( let i = 0; i < numberSquares * numberSquares; i++) {
    const grid = document.createElement("div")
grid.style.cssText = `width: ${squareWidth}px; height: ${squareWidth}px; border: 1px solid black`
grid.addEventListener("mouseover", () => {grid.style.backgroundColor = "blue"})
container.appendChild(grid)
}
}
const button = document.querySelector("button")
button.textContent = "New grid"
button.addEventListener("click", () => {
    let numberSquares = parseInt(prompt("How many squares per side?"))
    if (numberSquares > 0 && numberSquares <= 100) {
        container.innerHTML = ""
        createGrid(numberSquares)
    }
    else {
        alert("try again")
    } 
})

createGrid(16)