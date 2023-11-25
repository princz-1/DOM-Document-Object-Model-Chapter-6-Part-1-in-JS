// Create 3 divs with common class name - "box". Access them & add some unique text to each of them.

let divs = document.querySelectorAll("div");
console.dir(divs);
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


let idx = 1;
for(div1 of divs){
  div1.innerText = `new unique value ${idx}`;
  idx++;
}
