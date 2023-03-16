// Get the HTML elements from the document
const spanNumber = document.getElementById('advice-span');
const adviceText = document.getElementById('advice-p');
const buttonAdvice = document.getElementById('button-dice');

// Define an asynchronous function that fetches text from a file and updates the HTML elements
async function getText(file) {
    // Use the fetch() method to get the file and wait for the response
    let myObject = await fetch(file);
    // Convert the response into a JavaScript object and wait for it to complete
    let myText = await myObject.json();
    // Set the inner HTML of the advice text element to the advice text from the API response
    adviceText.innerHTML = myText.slip.advice;
    spanNumber.innerHTML = myText.slip.id;
}

// Add an event listener to the button that calls the getText() function when clicked
buttonAdvice.addEventListener('click', () => {
    getText("https://api.adviceslip.com/advice");
})
