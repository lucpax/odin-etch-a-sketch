const container = document.querySelector("div")

container.style.cssText = "display: flex; width: 960px; flex-wrap: wrap"
for ( let i = 1; i < 257; i++) {
    const grid = document.createElement("div")
grid.style.cssText = "width: 60px; height: 60px; border: 1px solid black"
grid.addEventListener("mouseover", () => {grid.style.backgroundColor = "blue"})
container.appendChild(grid)
}

const button = document.createElement("button")
button.textContent = "New grid"
button.addEventListener("click", () => {
    let numberSquares = parseInt(prompt("How many squares per side?"))
})

container.appendChild(button)