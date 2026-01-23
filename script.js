document.addEventListener('DOMContentLoaded', () => {
    
    // 1. PRELOADER LOGIC
    // Hides the loader when window is fully loaded
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
        // Remove from DOM after transition to prevent clicks
        setTimeout(() => {
            const preloader = document.getElementById('preloader');
            if(preloader) preloader.style.display = 'none';
        }, 500);
    });

    // Fallback: If load event doesn't fire fast enough (e.g. cached), force hide after 2s
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 2000);

    // 2. UNIFIED NAVIGATION (Clickable Cards/Skills)
    const clickableItems = document.querySelectorAll('[data-url]');
    clickableItems.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent triggering if clicking a button inside the card
            if (e.target.tagName === 'BUTTON' || e.target.tagName === 'A') return;
            
            const url = item.getAttribute('data-url');
            if (url) {
                if (url.startsWith('http')) {
                    window.open(url, '_blank');
                } else {
                    window.location.href = url;
                }
            }
        });
    });

    // 3. BOOTSTRAP THEME TOGGLE
    const themeBtn = document.getElementById('themeToggle');
    const htmlEl = document.documentElement;
    const icon = themeBtn ? themeBtn.querySelector('i') : null;
    const text = themeBtn ? themeBtn.querySelector('span') : null;

    // Check local storage or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    htmlEl.setAttribute('data-bs-theme', currentTheme);
    updateBtnIcon(currentTheme);

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            const newTheme = htmlEl.getAttribute('data-bs-theme') === 'dark' ? 'light' : 'dark';
            htmlEl.setAttribute('data-bs-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateBtnIcon(newTheme);
        });
    }

    function updateBtnIcon(theme) {
        if (!icon) return;
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
            if(text) text.textContent = 'Light Mode';
        } else {
            icon.className = 'fas fa-moon';
            if(text) text.textContent = 'Dark Mode';
        }
    }

    // 4. AI CHAT LOGIC
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatMsgs = document.getElementById('chatMsgs');

    if (sendBtn && userInput && chatMsgs) {
        const handleChat = () => {
            const text = userInput.value.trim();
            if (!text) return;

            chatMsgs.innerHTML += `<div class="msg user mb-2"><b>You:</b> ${text}</div>`;
            userInput.value = '';
            chatMsgs.scrollTop = chatMsgs.scrollHeight;

            setTimeout(() => {
                let response = "Sibusiso specializes in Software Testing and IT Support. Check his 'Reports' page for proof!";
                
                const lowerText = text.toLowerCase();
                if(lowerText.includes("contact") || lowerText.includes("email")) 
                    response = "You can email Sibusiso at <a href='mailto:sbudeep01@gmail.com'>sbudeep01@gmail.com</a>.";
                else if(lowerText.includes("selenium") || lowerText.includes("java"))
                    response = "Yes, he has built an Automated QA Suite using Selenium and Java.";
                
                chatMsgs.innerHTML += `<div class="msg ai text-muted small mb-2"><b>AI:</b> ${response}</div>`;
                chatMsgs.scrollTop = chatMsgs.scrollHeight;
            }, 800);
        };

        sendBtn.addEventListener('click', handleChat);
        userInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleChat(); });
    }
});