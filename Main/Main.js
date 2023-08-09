"use strict";

fetch('https://valorant-api.com/v1/agents')
    .then(response => response.json()) // Parse the response as JSON
    .then(data => {
        console.log(data); // Log the data to the console
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });