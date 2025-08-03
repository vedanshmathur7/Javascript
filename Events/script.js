// ----------q1-----------

// toggle button that changes dark to light on click

let mode = document.querySelector("button");
let currmode = 'light';
let body = document.querySelector("body");

mode.addEventListener("click", () => {
    if (currmode === "light"){
        currmode = 'dark';
        body.classList.remove("light");
        body.classList.add("dark");
    }
    else{
        currmode = 'light';
        // document.querySelector("body").style.backgroundColor = "white";
        body.classList.remove("dark");
        body.classList.add("light");
    }

    console.log(currmode);
})