const main = document.querySelector("main").remove("id")
console.log(main);
var newHeader = document.createElement("h1")
newHeader.setAttribute("id", "victory" )
newHeader.innerHTML = "H1"
document.body.append(newHeader)
var newHeader2 = document.createElement("h1");
newHeader2.innerHTML = "Victory";
newHeader.append(newHeader2)
var champion = document.createElement("h1");
newHeader2.innerHTML = "Caleb is the champion";
newHeader.append(champion)