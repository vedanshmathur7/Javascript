// ----------q1-----------

// toggle button that changes dark to light on click

let mode = document.querySelector("button");
let currmode = 'light';

mode.addEventListener("click", () => {
    if (currmode === "light"){
        currmode = 'dark';
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currmode = 'light';
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);
})