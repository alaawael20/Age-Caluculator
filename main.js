// Get the input elements and result container
const dayInput = document.querySelector('input[placeholder="DD"]');
const monthInput = document.querySelector('input[placeholder="MM"]');
const yearInput = document.querySelector('input[placeholder="YYYY"]');
const resultContainer = document.querySelector('.result');

// Add event listener to the button for calculating the age
const button = document.querySelector('.btn button');
button.addEventListener('click', calculateAge);

// Function to calculate the age
function calculateAge() {
  const birthDate = new Date(
    parseInt(yearInput.value),
    parseInt(monthInput.value) - 1,
    parseInt(dayInput.value)
  );

  // Check if the entered date is valid
  if (isNaN(birthDate.getTime())) {
    resultContainer.innerHTML = '<p>Please enter a valid birth date.</p>';
    return;
  }

  const currentDate = new Date();
  const ageInMilliseconds = currentDate - birthDate;

  // Convert milliseconds to years, months, and days
  const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;
  const years = Math.floor(ageInMilliseconds / millisecondsInYear);
  const months = Math.floor((ageInMilliseconds % millisecondsInYear) / (millisecondsInYear / 12));
  const days = Math.floor((ageInMilliseconds % (millisecondsInYear / 12)) / (1000 * 60 * 60 * 24));

  // Display the calculated age
  resultContainer.innerHTML = `
    <p><span>${years}</span> year${years !== 1 ? 's' : ''}</p>
    <p><span>${months}</span> month${months !== 1 ? 's' : ''}</p>
    <p><span>${days}</span> day${days !== 1 ? 's' : ''}</p>
  `;
}
