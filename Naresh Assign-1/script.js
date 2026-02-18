console.log(new Date());

document.body.style.backgroundColor = "";

function showMsg() {
    alert("Hello");
}

function changeText() {
    document.getElementById("btn").innerHTML = "Clicked";
}

function preventSubmit(event) {
    event.preventDefault();
    var name = document.getElementById("name").value;
    document.getElementById("demo").innerHTML = name;
}

var a = 5;
var b = 10;
var sum = a + b;
console.log(sum);

var num = 15;
if (num > 10) {
    console.log("Greater");
}
