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
            newDiv.setAttribute("class", `row${i} col${j}`)
            newDiv.style.flex = `1 1 ${size}px`
            newDiv.style.height = `${size}px`
            outerDiv.appendChild(newDiv)
        }
    }

}
populateOuterContainer(6,6)
function listen(){
    outerDiv.addEventListener("mouseover", (e) => {
    console.log(e.target)
    let targetDiv = e.target
    targetDiv.style.backgroundColor = targetDiv.style.backgroundColor === 'black' ? 'white' : 'black'
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