"use strict";

fetch('https://valorant-api.com/v1/maps')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        console.log(data); // Log the data to the console
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

// Get the modal and the button to open it
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");

// When the user clicks the button, open the modal
openModalBtn.addEventListener("click", function() {
    modal.style.display = "block";
});

// Get the close button within the modal
const closeButton = document.querySelector(".close");

// When the user clicks the close button, close the modal
closeButton.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close the modal if the user clicks anywhere outside it
window.addEventListener("click", function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
