document.addEventListener("DOMContentLoaded", function() {
    var myButton = document.getElementById("myButton");
    myButton.addEventListener("click", function() {
        if (this.textContent === "Click Me") {
            this.textContent = "Clicked;)";
        } else {
            this.textContent = "Click Me";
        }
    });
});

var num1 = 5;
var num2 = 3;

console.log(num1 > num2); // true
console.log(num1 < num2); // false
console.log(num1 === num2); // false
console.log(num1 !== num2); // true
console.log(num1 <= num2); // false
console.log(num1 >= num2); // true
