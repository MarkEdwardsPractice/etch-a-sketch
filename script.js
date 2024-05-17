const body = document.querySelector("body");

const container1 = document.createElement("div");
const container2 = document.createElement("div");
const container3 = document.createElement("div");
const container4 = document.createElement("div");

container1.style.display = "flex";
container2.style.display = "flex";
container3.style.display = "flex";
container4.style.display = "flex";


bigContainer.appendChild(container1);
bigContainer.appendChild(container2);
bigContainer.appendChild(container3);
bigContainer.appendChild(container4);

bigCWidth = document.getElementById("bigContainer").clientWidth;
bigCHeight = document.getElementById("bigContainer").clientHeight;

const NUMBER_OF_SQUARES = 16;
divWidth = bigCWidth / NUMBER_OF_SQUARES;
divHeight = bigCHeight / NUMBER_OF_SQUARES;
for(let i = 0; i < NUMBER_OF_SQUARES; i++)
{
    
    const div = document.createElement("div");
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    div.style.border = "2px solid black";
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });

    container1.appendChild(div);
    
}

for(let i = 0; i < NUMBER_OF_SQUARES; i++)
{
        
        const div = document.createElement("div");
        div.style.width = `${divWidth}px`;
        div.style.height = `${divHeight}px`;
        div.style.border = "2px solid black";
        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "red";
        });
        container2.appendChild(div);
        
}

for(let i = 0; i < NUMBER_OF_SQUARES; i++)
{
            
    const div = document.createElement("div");
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    div.style.border = "2px solid black";
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
    container3.appendChild(div);
            
}

for(let i = 0; i < NUMBER_OF_SQUARES; i++)
{
                
    const div = document.createElement("div");
    div.style.width = `${divWidth}px`;
    div.style.height = `${divHeight}px`;
    div.style.border = "2px solid black";
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
    container4.appendChild(div);
                
}