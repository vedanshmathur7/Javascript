// const students = {
//     fullname : "vedansh mathur",
//     email : "vedanshmathur007@gmail.com",
//     marks : 94.4,
//     printMarks : function () {
//         console.log("marks", this.marks);
//     },

// };


// const employee = {
//     calctax () {
//         console.log("interest is 10%"); // used frquently
//     },
//     calctax2 : function () {
//         console.log("interest op") //both methods are acceptable
//     }
// }



// const karanarjun = {
//     salary : 89000
// };

// karanarjun.__proto__ = employee; // creating employee as the prototype of karanarjun



// -----------------classes------------------

class ToyotaCars {
    start () {
        console.log("start");
    }

    stop () {
        console.log("stop");
    }

    setbrand(brand){
        this.brandname = brand; 
    }
}

let fotuner = new ToyotaCars(); // new object fortuner in the class
let lexus = new ToyotaCars();
lexus.setbrand("lexus");


// whenever the object is created, "constructor" is invoked automatically


// -------------------inheritance-------------------

class Parent {
    hello (){
        console.log("hello");
    }
}

class Child extends Parent {}

let vednash = new Child;
