/* What is DOM ?
when a web page is loaded, the browser creates a Document Object Model(DOM) of the page 
*/

// document.body.childNodes[1].innerText = "Prince"

// -> DOM Manipulation <-

// Selecting with id
 let button = document.getElementById("myId");
console.dir(button)

// Selecting with class
let headings = document.getElementsByClassName("myClass");
console.dir(headings)

// Selecting with tags
let paragraph = document.getElementsByTagName("p");
console.dir(paragraph);


// Query Selector
let firstEl = document.querySelector("p"); // returns first element
console.dir(firstEl);

let allEl = document.querySelectorAll("p"); // returns a nodelist /all elements
console.dir(allEl);



let div = document.querySelector("div");
console.dir(div);

let hed = document.getElementById("hed");
console.dir(hed)
