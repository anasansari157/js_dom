//Select the section with an id of container without using querySelector.
document.getElementById("container");

//Select the section with an id of container using querySelector.
document.querySelector("#container");


//Select all of the list items with a class of "second".
document.querySelectorAll(".second");


//Select a list item with a class of third, but only the list item inside of the ol tag.
var thirdList = document.querySelector("ol li.third");


//Give the section with an id of container the text "Hello!".



//Add the class main to the div with a class of footer.
var footer = document.querySelector(".footer");
footer.className = "main";


//Remove the class main on the div with a class of footer.
footer.classList.remove("main");

//Create a new li element.
var newLi = document.createElement("li")


//Give the li the text "four".
newLi.innerText = "four";


//Append the li to the ul element.
var newUl = document.createElement('ul');
document.body.append(newUl);
newUl.append(newLi);


//Loop over all of the list inside the ol tag and give them a background color of "green".
var allOl = document.querySelectorAll('ol li');
console.dir(allOl);
for(let i of allOl) {
    i.style.background = "green";
}


//Remove the div with a class of footer.
footer.remove();