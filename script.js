const body = document.querySelector("body");

const NUMBER_OF_SQUARES = 16;

const containers = [];

for(let i = 0; i < NUMBER_OF_SQUARES; i++)
{
    containers.push(document.createElement("div"));
    containers[i].style.display = "flex";
    bigContainer.appendChild(containers[i]);
}





bigCWidth = document.getElementById("bigContainer").clientWidth;
bigCHeight = document.getElementById("bigContainer").clientHeight;


divWidth = bigCWidth / NUMBER_OF_SQUARES;
divHeight = bigCHeight / NUMBER_OF_SQUARES;

function createRow()
{
    for(let i = 0; i < NUMBER_OF_SQUARES; i++)
        {
            
            const div = document.createElement("div");
            div.style.width = `${divWidth}px`;
            div.style.height = `${divHeight}px`;
            div.style.border = "2px solid black";
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "red";
            });
        
            containers[i].appendChild(div);
            
        }
}

for(let i = 0; i < NUMBER_OF_SQUARES; i++)
{
    createRow();
}