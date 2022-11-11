const main = document.querySelector("main").remove("id")
console.log(main);
const newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory")
newHeader.innerHTML = "is the champion"
document.body.append(newHeader)
var newHeader1 = document.createElement("h1")
newHeader1.innerHTML =  "Victory"
newHeader.append(newHeader1)
var newHeader2 = document.createElement("h1")
newHeader.append(newHeader2)
var newHeader3 = document.createElement("h1")
newHeader3.innerHTML =  "Caleb is the champion"
newHeader.append(newHeader3)


