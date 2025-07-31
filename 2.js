console.log("rajesh ki ghanti");
let a = 56;
let b = 100;

// console.log("a = ",a,", b = ", b);
// console.log("a + b = ", a+b);
// console.log("a - b = ", a-b);
// console.log("a * b = ", a*b);
// console.log("a / b = ", a/b);
// console.log("a % b = ", a%b);
// console.log("a ** b = ", a**b);

// console.log(a == b);

// function toCelsius(fahrenheit) {
//   return (5/9) * (fahrenheit-32);
// }

// let value = toCelsius(180);


// traditional function creation
// function greet (name) {
//     return "hello " + name;
// }

// console.log(greet("Vedansh")) 

// arrow method
// const greet = (name) => "hello "+ name;
// console.log(greet("Naman mathur"))

// const square = (x) => x * x;
// console.log(square(77));

// const hello = () => "Hello bhaiji";
// console.log(hello())

// A function that returns the first letter of a string
// const firstletter = (strg) => console.log("The first three letter are : ", strg.slice(0,3));

// firstletter("Rajesh");

// let name = prompt("Enter your name : ")
// console.log("Your name is : ", name);

// let age = parseInt(prompt(`Enter your age : `));
// if (age == 18){
//     console.log(`Kya baat hai bhai, bda ho gya ! aap ${age} saal k ho`);
// }
// else if (age < 18){
//     console.log(`Bhaiji, aap ${age} saal k ho, aukaat m rho !`);
// }
// else {
//     console.log(`Okk bhai aapka swaagat hai! aap ${age} saal k ho !`);
// }

// let day = prompt ("Enter the day : ");
// switch (day) {
//     case "Monday":
//         console.log(`Kya baat h aag toh ${day} hai ! `);
//         break;
//     case "Tuesday":
//         console.log(`Kya baat h aag toh ${day} hai ! `);
//         break;
//     case "Wednesday":
//         console.log(`Kya baat h aag toh ${day} hai ! `);
//         break;
//     case "Thursday":
//         console.log(`Kya baat h aag toh ${day} hai ! `);
//         break;
//     default:
//         console.log("umm hmm !");
// }

// console.log("a==b", a==b);

// ------------------logical operator---------------
// a = 18;
// b=5;
// console.log(a>b && a==b); //-> false
// console.log(a>b || a==b); // -> true
// if (a==6){
//     console.log('waah ji waah');
// }
// else if (a==5){
//     console.log("ram ram ji")
// }
// else {
//     console.log("kamlesh")
// }



// ---------------------ternary operator----------

// let age = 17;
// let result = age >= 18 ? "yes it is" : "no it is not";
// console.log(result);


// alert ("kaun ho bhai")

// ----------------practice qn-------------

// let num = prompt("enter the no. bhaiji");

// if (num %5 === 0){
//     console.log("yes it is divisible by 5");
// }
// else {
//     console.log("no it is not !")
// }



// -----------------------Q2------------------------

let num = prompt("enter your marks");
if ( 80<=num && num <= 100 ){
    console.log("Grade: A")
}
else if ( 70<=num && num <= 89){
    console.log("Grade: B")
}
else if ( 60<=num && num <= 69){
    console.log("Grade: C")
}
else if ( 50<=num && num <= 59){
    console.log("Grade: D")
}
else if ( 0<=num && num <= 49 ){
    console.log("Grade: F")
}