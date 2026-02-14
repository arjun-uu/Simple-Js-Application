const userInput = document.getElementById("date");
userInput.max = new Date().toISOString().split('T')[0]; // Set max date to today

let currentAge = document.getElementById("your-age");

function calculateAge() {
  // Get the birth date from user input
  var birthDate = new Date(userInput.value);

  // Extract day, month, and year from birth date
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1; // Add 1 because months are zero-indexed
  let y1 = birthDate.getFullYear();

  // Get today's date
  let today = new Date();

  // Extract day, month, and year from today
  let d2 = today.getDate();
  let m2 = today.getMonth() + 1; // Add 1 to match how we're treating birth month
  let y2 = today.getFullYear();

  // Initialize variables to hold the results
  let d3, m3, y3;

  // Calculate year difference
  y3 = y2 - y1;

  // Calculate month difference
  if (m2 >= m1) {
    m3 = m2 - m1;
  } else {
    y3--;
    m3 = m2 + 12 - m1;
  }

  // Calculate day difference
  if (d2 >= d1) {
    d3 = d2 - d1;
  } else {
    m3--;
    // Adjust the day calculation based on days in the previous month
    d3 = getDaysInMonth(y2, m2 - 1) + d2 - d1;
  }

  // If month difference goes below zero, adjust year and month accordingly
  if (m3 < 0) {
    m3 = 11;
    y3--;
  }

  // Function to get the number of days in a month
  function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
  }

  // Display the calculated age correctly
  currentAge.innerHTML = `You are <span> ${y3}</span> years, <span>${m3}</span> months, and <span>${d3}</span> days old.`;
}
