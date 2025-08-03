// let div = document.querySelector('div'); 
// // let kamlesh = div.getAttribute("name");
// // console.log(kamlesh);

// let vednah = div.setAttribute("kamlesh", "rajesh");
// // console.log(div.childNodes);

// console.dir(div);


// let button = document.createElement("button");
// button.innerText = "click here big boii 🥰";

// let div = document.querySelector("div");
// div.before(button);
// // div.append(button);
// div.remove(button);

// button.remove();



// --------------prac qns-------------
let button = document.createElement("button");

button.innerText = "click me big boi!";
button.style.backgroundColor = "red";
button.style.color= "white";

let body = document.querySelector("body");
body.prepend(button);


// -----------------2nd qn--------------
let para = document.querySelector("p");
console.log(para);
para.classList;
para.classList.add("vedansh");
para.classList.remove("vedansh")