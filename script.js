const body = document.querySelector("body");

const button = document.querySelector("button");

let number_of_squares = 16;

const bigContainer = document.getElementById("bigContainer");


const containers = [];

bigCWidth = document.getElementById("bigContainer").clientWidth;
bigCHeight = document.getElementById("bigContainer").clientHeight;


function createRow(num)
{
    for(let i = 0; i < num; i++)
        {
            
            const div = document.createElement("div");
            div.style.width = `${bigCWidth / number_of_squares}px`;
            div.style.height = `${bigCHeight / number_of_squares}px`;
            div.style.border = "2px solid black";
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red";
            });
        
            containers[i].appendChild(div);
            
        }
}

function createGrid(num)
{
    for(let i = 0; i < num; i++)
        {
            containers.push(document.createElement("div"));
            containers[i].style.display = "flex";
            bigContainer.appendChild(containers[i]);
            
        }
    for(let i = 0; i < num; i++)
    {
        createRow(num);
    }    
}

createGrid(number_of_squares);


function removeGrid()
{
    while(bigContainer.firstChild)
    {
        bigContainer.removeChild(bigContainer.lastChild);
    }
    while(containers.length > 0)
    {
        containers.pop();
    }
}

button.addEventListener('click', () => {
    number_of_squares = Number(prompt("What number squares do you want per side?"));
    removeGrid();
    
    createGrid(number_of_squares);
    
});








