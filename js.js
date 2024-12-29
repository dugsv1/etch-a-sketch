/**
 * ASSIGN outer div to variable
 * CREATE a loop that creates a 4x4 grid
 *      LABEL as a class each row and col?
 * SET width and height and border
 * 
 * FOR LOOPS
 *  ROW.I COLUMN.J
 */
const outerDiv = document.querySelector("#outer")
function populateOuterContainer(rows=4, columns=4){
    let size = 960 / rows
    for (let i = 0; i < rows; i++){
        for (let j = 0; j < columns; j++){
            const newDiv = document.createElement("div")
            newDiv.setAttribute("class", `row${i} col${j} grid`)
            newDiv.style.flex = `1 1 ${size}px`
            newDiv.style.height = `${size}px`
            outerDiv.appendChild(newDiv)
        }
    }

}

populateOuterContainer(6,6)
function listen(){
    outerDiv.addEventListener("mouseover", (e) => {
    let targetDiv = e.target
    let color = window.getComputedStyle(targetDiv).backgroundColor
    let colorStyle = e.target.style.backgroundColor
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(`#${randomColor}`)
    console.log(`Window color: ${color}`)
    console.log(`Style color: ${colorStyle}`)
    if (
        color === 'rgba(0, 0, 0, 0)' || 
        color === 'rgb(255, 255, 255)'){
        targetDiv.style.backgroundColor=`#${randomColor}`
        targetDiv.style.opacity = 0.1
    } else {
        targetDiv.style.opacity = Math.min(1, parseFloat(targetDiv.style.opacity || 0) + 0.1)
    }

})
}
listen()

const button = document.querySelector("#reset")
button.addEventListener("click", ()=>{
    let question = parseInt(prompt("How many grids per edge of this square?"))
    if (question > 100) question = 100
    removeChildNodes(outerDiv)
    populateOuterContainer(question, question)

})

function removeChildNodes(node){
    while (node.firstChild){
        node.removeChild(node.lastChild)
    }
}