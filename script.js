const body = document.querySelector("body");

const container1 = document.createElement("div");
const container2 = document.createElement("div");
const container3 = document.createElement("div");
const container4 = document.createElement("div");

container1.style.display = "flex";
container2.style.display = "flex";
container3.style.display = "flex";
container4.style.display = "flex";

body.appendChild(container1);
body.appendChild(container2);
body.appendChild(container3);
body.appendChild(container4);

for(let i = 0; i < 4; i++)
{
    
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "2px solid black";
    div.addEventListener("mouseover", () => {
        div.style.backgroundColor = "red";
    });
    div.addEventListener("mouseout", () => {
        div.style.backgroundColor = "";
    });
    container1.appendChild(div);
    
}

for(let i = 0; i < 4; i++)
{
        
        const div = document.createElement("div");
        div.style.width = "10px";
        div.style.height = "10px";
        div.style.border = "2px solid black";
        container2.appendChild(div);
        
}

for(let i = 0; i < 4; i++)
{
            
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "2px solid black";
    container3.appendChild(div);
            
}

for(let i = 0; i < 4; i++)
{
                
    const div = document.createElement("div");
    div.style.width = "10px";
    div.style.height = "10px";
    div.style.border = "2px solid black";
    container4.appendChild(div);
                
}