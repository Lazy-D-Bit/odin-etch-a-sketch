const container = document.getElementById("container")
container.style.display = "flex";
container.style.flexDirection = "column";
for (let j = 0; j < 16; j++) {
    const row = document.createElement("div");
    container.appendChild(row);
    row.style.display = "flex"
    for (let i = 0; i < 16; i++) {
        const square = document.createElement("div");
        square.style.width = "25px";
        square.style.height = "25px";
        square.style.backgroundColor = "lightblue";
        square.style.border="2px solid black";
        row.appendChild(square);
    }
}
