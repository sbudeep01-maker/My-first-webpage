// Function to handle opening new pages for skills
const skillButtons = document.querySelectorAll('.skills span');

skillButtons.forEach(button => {
    button.style.cursor = 'pointer'; // Ensures the pointer shows it's clickable
    
    button.addEventListener('click', function() {
        const query = this.getAttribute('data-query');
        if (query) {
            // Opens a Google Search for that skill in a new window/tab
            const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(searchUrl, '_blank');
        }
    });
});