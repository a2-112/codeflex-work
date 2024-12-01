// Get the theme toggle button
const modeButton = document.getElementById('displaymode');

// Check if there's a saved theme in localStorage
const currentTheme = localStorage.getItem('theme');

// If there's a saved theme, apply it
if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
}

// Event listener to toggle between dark and light modes
modeButton.addEventListener('click', () => {
    // Toggle the dark mode class
    document.body.classList.toggle('dark-mode');

    // Save the user's theme preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});
