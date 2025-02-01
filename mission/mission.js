const themeSelector = document.querySelector('#theme-selector');
const logo = document.querySelector('#logo');

console.log("mission.js loaded");


function changeTheme() {
  console.log("Theme change triggered, current value:", themeSelector.value);
  
  if (themeSelector.value === 'dark') {
    document.body.classList.add('dark');
    logo.src = 'byui-logo_white.png'; 
  } else {
    document.body.classList.remove('dark');
    logo.src = 'byui-logo_blue.webp';
  }
}
themeSelector.addEventListener('change', changeTheme);
