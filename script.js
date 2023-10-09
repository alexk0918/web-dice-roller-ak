// Get the roll button and dice value input field
const rollButton = document.getElementById("rollButton");
const diceValueInput = document.getElementById("diceValue");

// Function to roll the dice and display the result
function rollDice() {
    // Make an API call to the /api/rollDice endpoint on your Azure-hosted server
    fetch('https://node-js-on-azure-amk.azurewebsites.net/')
        .then((response) => response.json())
        .then((data) => {
            // Display the result in the input field
            diceValueInput.value = data.diceValue;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Automatically roll the dice when the page is loaded
window.onload = rollDice;

// Focus the roll button so that pressing enter rolls the dice again
rollButton.focus();

// Add click event listener to the roll button
rollButton.addEventListener("click", rollDice);