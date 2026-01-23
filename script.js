document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Unified Navigation Logic
    // This handles Skills (Google), Projects (GitHub), and internal pages (Reports/Contact)
    const clickableItems = document.querySelectorAll('[data-url], .skills span, .project-card');

    clickableItems.forEach(item => {
        item.addEventListener('click', () => {
            const url = item.getAttribute('data-url');
            if (url) {
                // If it's an external link (starts with http), open in new tab
                if (url.startsWith('http')) {
                    window.open(url, '_blank');
                } else {
                    // Internal page (like reports.html), open in same tab
                    window.location.href = url;
                }
            }
        });
    });

    // 2. Theme Toggle Logic
    const modeBtn = document.getElementById('modeToggle');
    if (modeBtn) {
        modeBtn.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            const isLight = document.body.classList.contains('light-mode');
            modeBtn.innerHTML = isLight ? '<i class="fas fa-sun"></i> Light Mode' : '<i class="fas fa-moon"></i> Dark Mode';
        });
    }

    // 3. AI Chat Logic (index.html only)
    const sendBtn = document.getElementById('sendBtn');
    const userInput = document.getElementById('userInput');
    const chatMsgs = document.getElementById('chatMsgs');

    if (sendBtn && userInput) {
        const handleChat = () => {
            const text = userInput.value.trim();
            if (!text) return;

            chatMsgs.innerHTML += `<div class="msg user"><b>You:</b> ${text}</div>`;
            userInput.value = '';

            setTimeout(() => {
                let response = "Sibusiso specializes in Software Testing and IT Support. Check his 'Reports' page for proof!";
                if(text.toLowerCase().includes("contact")) response = "You can email Sibusiso at sbudeep01@gmail.com.";
                
                chatMsgs.innerHTML += `<div class="msg ai"><b>AI:</b> ${response}</div>`;
                chatMsgs.scrollTop = chatMsgs.scrollHeight;
            }, 600);
        };

        sendBtn.addEventListener('click', handleChat);
        userInput.addEventListener('keypress', (e) => { if(e.key === 'Enter') handleChat(); });
    }
});