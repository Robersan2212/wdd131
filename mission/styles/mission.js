var themeSelector = document.getElementById('theme-selector');

// Step 7: Add an event listener to the selected element. We should listen for a change event.
themeSelector.addEventListener('change', changeTheme);

// Step 8: Create a function called changeTheme that will get called by the event listener when the select option is changed.
function changeTheme() {
    // Step 9: Check to see what option is currently selected on our theme selector.
    var selectedTheme = themeSelector.value;

    // If it is "dark" then add the dark class to body and change the logo image src to the white logo.
    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        document.querySelector('footer img').src = './mission/images/byui-logo_white.png';
    } 
    // If it is not "dark" then remove the dark class from the body element and change the logo image src for the logo to the blue logo.
    else {
        document.body.classList.remove('dark');
        document.querySelector('footer img').src = './images/byui-logo_blue.webp';
    }
    
    var selectedTheme = themeSelector.value;
    var blueLogo = document.getElementById('blue-logo');
    var whiteLogo = document.getElementById('white-logo');

    if (selectedTheme === 'dark') {
        document.body.classList.add('dark');
        blueLogo.style.display = 'none'; // hide blue logo
        whiteLogo.style.display = 'block'; // show white logo
    } else {
        document.body.classList.remove('dark');
        blueLogo.style.display = 'block'; // show blue logo
        whiteLogo.style.display = 'none'; // hide white logo
    }
}