//code in Javascript 
const heading = document.createElement("h2");
heading.textContent = "Hello JavaScript";
heading.className = "hd";
heading.style.color = "#ffffff"; // white text
heading.style.backgroundColor = "#f39c12"; // orange
heading.style.padding = "10px";
heading.style.borderRadius = "8px";
heading.style.marginBottom = "10px";

document.getElementById("vanillaRoot").appendChild(heading);

        // console.log("Javascript Element:",heading);