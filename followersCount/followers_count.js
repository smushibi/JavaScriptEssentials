// Initialize count to 0

let count = 0;

// Increment the count by 1
function increaseCount() {
    count++;
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages

}

// Display the count in the HTML
function displayCount() {
    document.getElementById('countDisplay').innerHTML = count;
}

function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }