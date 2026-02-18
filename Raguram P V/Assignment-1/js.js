console.log("App Started at:", new Date());

setTimeout(() => {
    document.body.style.backgroundColor = "#fff9c4";
    console.log("Background changed to modern yellow.");
}, 1500);

function showMsg() {
    alert("👋 Hello! This is your alert.");
}

function displayInput() {
    const nameInput = document.getElementById("name");
    const outputSpan = document.getElementById("demo");
    
    if(nameInput.value === "") {
        outputSpan.innerText = "Please type a name first!";
        outputSpan.style.color = "red";
    } else {
        outputSpan.innerText = nameInput.value;
        outputSpan.style.color = "#2980b9";
    }
}

function changeButtonText() {
    const btn = document.getElementById("btn");
    btn.innerHTML = "Clicked!";
    btn.style.backgroundColor = "#27ae60";
    btn.style.color = "white";
    btn.style.border = "none";
}

document.getElementById("mainForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    console.log("Form submission prevented via JS.");
    alert("Form submission prevented! (Data validated)");
});

const num = 15;
if(num > 10) {
    console.log(`Number ${num} is Greater than 10`);
}

const a = 5;
const b = 10;
const sum = a + b;
console.log(`Sum Calculation: ${a} + ${b} = ${sum}`);