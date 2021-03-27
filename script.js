const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied)'); //Node list
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');
let ticketPrice = +movieSelect.value;

// Update total and count
function updateSelectedCount(){
    const selectedSeats = document.querySelectorAll('.row .seat.selected');
    const selectedSeatsCount = selectedSeats.length;
    count.innerText = selectedSeatsCount;
    total.innerText = selectedSeatsCount * ticketPrice;
    console.log(total);
    console.log(selectedSeatsCount * ticketPrice);
}

// Movie select event
movieSelect.addEventListener('change', (e)=>{
    ticketPrice = +e.target.value;
    updateSelectedCount();
})

// Seat click event
container.addEventListener('click', (e)=> {
    if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
        // Run if click on available seats
        e.target.classList.toggle('selected');

        updateSelectedCount();

        console.log(total);
    }
});