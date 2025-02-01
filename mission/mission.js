// mission.js

// Select the dropdown element and the logo image from the DOM
const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('#logo');

console.log("mission.js loaded");

// Function to change theme based on the selected option
function changeTheme() {
  console.log("Theme change triggered, current value:", themeSelector.value);
  
  // If dark is selected, add the dark class and swap the logo
  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'byui-logo_white.png'; // ensure this file exists in your project
  } else {
    // Otherwise, remove the dark class and revert the logo
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}

// Listen for changes on the theme selector
themeSelector.addEventListener('change', changeTheme);
