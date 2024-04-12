canvas(10);

const button = document.getElementById("num");
button.addEventListener("click", function() {
    const num = prompt("Enter GRID size (size limit: 0 < size <= 100):");

    deleteCanvas();
    canvas(num);
})
function canvas(num) {
    const container = document.getElementById("container")
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.width = "600px"
    container.style.height = "600px"
    for (let j = 0; j < num; j++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.style.display = "flex";
        row.style.flex = "1";
        for (let i = 0; i < num; i++) {
            const square = document.createElement("div");
            square.style.backgroundColor = "#eeeeee";
            square.style.border="1px solid black";
            square.style.flex = "1";
            square.style.margin = "0";
            row.appendChild(square);
            square.addEventListener("mouseover", function() {
                square.style.backgroundColor = "#3d85c6";
            });
        }
    }
}
function deleteCanvas() {
    const container = document.getElementById("container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}