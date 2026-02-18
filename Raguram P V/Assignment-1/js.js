
console.log("Current Date:", new Date());
setTimeout(function() {
    document.body.style.backgroundColor = "yellow";
}, 1000);

function showMsg() {
    alert("Hello");
}
function displayInput() {
    var name = document.getElementById("name").value;
    document.getElementById("demo").innerHTML = name;
}
function changeButtonText() {
    document.getElementById("btn").innerHTML = "Clicked";
}
document.getElementById("mainForm").addEventListener("submit", function(event){
    event.preventDefault();
    alert("Form submission prevented!");
});
var num = 15;
if(num > 10) {
    console.log("Greater");
}
var a = 5; 
var b = 10;
var sum = a + b;
console.log("Sum of " + a + " + " + b + " = " + sum);