
class Booking {
    constructor(from, to, passengers) {
        this.from = from;
        this.to = to;
        this.passengers = passengers;
        this.id = Date.now();
    }

    getSummary() {
        return `${this.from} ➜ ${this.to} | Passengers: ${this.passengers}`;
    }
}


const bookings = [];

const form = document.getElementById("bookingForm");
const bookingList = document.getElementById("bookingList");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const fromCity = document.getElementById("fromCity").value;
    const toCity = document.getElementById("toCity").value;
    const passengers = document.getElementById("passengers").value;

    if (fromCity === toCity) {
        alert("From and To cities cannot be same!");
        return;
    }

    const newBooking = new Booking(fromCity, toCity, passengers);


    bookings.push(newBooking);

    displayBookings();

    form.reset();
});

function displayBookings() {
    bookingList.innerHTML = "";

    bookings.forEach(booking => {
        const li = document.createElement("li");
        li.textContent = booking.getSummary();

    
        li.addEventListener("click", function() {
            removeBooking(booking.id);
        });

        bookingList.appendChild(li);
    });
}

function removeBooking(id) {
    const index = bookings.findIndex(b => b.id === id);
    bookings.splice(index, 1);
    displayBookings();
}
