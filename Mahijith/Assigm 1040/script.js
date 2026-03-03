/* Centering the container vertically and horizontally using Flexbox */
// Function for button click
function showMsg() {
    alert("Hello! Processing your data...");
}

const form = document.getElementById("regForm");

form.addEventListener("submit", function(event) {
    // 1. Prevent form from refreshing the page
    event.preventDefault();

    // 2. Change page background to yellow
    document.body.style.backgroundColor = "yellow";

    // 3. Get value from input with id="name"
    var nameValue = document.getElementById("name").value;

    // 4. Get number value and check if greater than 10
    var expValue = document.getElementById("exp").value;
    if(expValue > 10) {
        console.log("Greater");
    }

    // 5. Display entered name inside paragraph id="demo"
    document.getElementById("demo").innerHTML = "Welcome, " + nameValue;

    // 6. Change text of button when clicked
    document.getElementById("btn").innerHTML = "Clicked";

    // 7. Print current date in console
    console.log(new Date());
});