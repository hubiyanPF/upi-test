
// JavaScript: The script listens for input changes, removes any non-numeric characters, and formats the value by adding a space every 4 digits. The formatted value is then set back to the input field, ensuring the maximum length is 19 characters.
// This code ensures that users can only input numbers and the input is formatted as they type.

document.getElementById('cardNumber').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    let formattedValue = '';
  
    for (let i = 0; i < value.length; i++) {
      if (i > 0 && i % 4 === 0) {
        formattedValue += ' ';
      }
      formattedValue += value[i];
    }
  
    e.target.value = formattedValue.substring(0, 19); // Limiting to 19 characters including spaces
  });


// inout
document.addEventListener("DOMContentLoaded", function () {
  const upiInput = document.querySelector(".upi-input");

  if (upiInput) {
    // Attempt to focus immediately
    upiInput.focus();

    // Create an artificial click event to simulate user interaction
    const event = new Event("click", { bubbles: true });
    upiInput.dispatchEvent(event);

    // For iOS: Use a timeout for the blur-focus workaround
    const isIOS = /iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isIOS) {
      setTimeout(() => {
        upiInput.blur();
        upiInput.focus();
      }, 300);
    }
  }
});



  
