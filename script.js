const container = document.querySelector("div")
container.style.cssText = "display: flex; width: 800px; flex-wrap: wrap"
for ( let i = 1; i < 257; i++) {
    const grid = document.createElement("div")
grid.style.cssText = "width: 50px; height: 50px; border: 1px solid black"
grid.addEventListener("mouseover", () => {grid.style.backgroundColor = "blue"})
container.appendChild(grid)
}
