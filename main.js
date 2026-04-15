document.querySelector("#open-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.add("nav-open");
});


document.querySelector("#close-nav-menu").addEventListener("click", function(){
    document.querySelector("header nav .wrapper").classList.remove("nav-open");
});

const customer = "Brian";
let balance = 2000;

console.log("Hello, " + customer + " your balance is USD " + balance)

balance = balance + 200;

console.log("Hello, " + customer + " your new balance is USD " + balance)