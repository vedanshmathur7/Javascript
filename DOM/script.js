// let div = document.querySelector("div");
// console.dir(div);

// let h1 = document.querySelector("h1");
// console.dir(h1);



// ----------------practice qn---------------
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + " from Apna college students";
console.log(h2.innerText);


// ----------Q2--------------
let op = document.querySelectorAll(".rajesh");
// op[0].innerText = "kamlesh";
// op[1].innerText = "oamlesh";
// op[2].innerText = "pamlesh";

// or
let idx = 1;
for (div of op){ //'of' because it is string otherwise 'in'
    div.innerText = `unique ${idx}`;
    idx++;
}

