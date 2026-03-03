const form = document.getElementById("bookingForm");
const fromCity = document.getElementById("fromCity");
const toCity = document.getElementById("toCity");
const departureDate = document.getElementById("departureDate");
const passengers = document.getElementById("passengers");
const email = document.getElementById("email");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    validateForm();

    if (isFormValid()) {
        alert("Flights Searched Successfully!");
        form.reset();
        removeSuccess();
    }
});

function validateForm() {
    validateCity(fromCity, "From city is required");
    validateCity(toCity, "To city is required");
    validateDate();
    validatePassengers();
    validateEmail();
}

function validateCity(input, message) {
    const error = input.nextElementSibling;

    if (input.value.trim() === "") {
        error.innerText = message;
        input.classList.add("error-border");
        input.classList.remove("success");
    } else {
        error.innerText = "";
        input.classList.remove("error-border");
        input.classList.add("success");
    }

    if (fromCity.value === toCity.value && fromCity.value !== "") {
        toCity.nextElementSibling.innerText = "From and To cities cannot be same";
        toCity.classList.add("error-border");
        toCity.classList.remove("success");
    }
}

function validateDate() {
    const error = departureDate.nextElementSibling;
    const today = new Date().toISOString().split("T")[0];

    if (departureDate.value === "") {
        error.innerText = "Please select a departure date";
        departureDate.classList.add("error-border");
        departureDate.classList.remove("success");
    } 
    else if (departureDate.value < today) {
        error.innerText = "Departure date cannot be in the past";
        departureDate.classList.add("error-border");
        departureDate.classList.remove("success");
    }
    else {
        error.innerText = "";
        departureDate.classList.remove("error-border");
        departureDate.classList.add("success");
    }
}

function validatePassengers() {
    const error = passengers.nextElementSibling;

    if (passengers.value === "" || passengers.value < 1) {
        error.innerText = "Minimum 1 passenger required";
        passengers.classList.add("error-border");
        passengers.classList.remove("success");
    } else {
        error.innerText = "";
        passengers.classList.remove("error-border");
        passengers.classList.add("success");
    }
}

function validateEmail() {
    const error = email.nextElementSibling;
    const pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!pattern.test(email.value)) {
        error.innerText = "Enter valid email";
        email.classList.add("error-border");
        email.classList.remove("success");
    } else {
        error.innerText = "";
        email.classList.remove("error-border");
        email.classList.add("success");
    }
}

function isFormValid() {
    return (
        fromCity.classList.contains("success") &&
        toCity.classList.contains("success") &&
        departureDate.classList.contains("success") &&
        passengers.classList.contains("success") &&
        email.classList.contains("success")
    );
}

function removeSuccess() {
    const inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.classList.remove("success"));
}
