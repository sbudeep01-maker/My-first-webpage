<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Sibusiso — CV + Chat</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#0b1020;
      --card:#0f1724;
      --muted:#9aa3b2;
      --accent:#4f46e5;
      --glass: rgba(255,255,255,0.03);
    }
    *{box-sizing:border-box}
    html,body{height:100%;margin:0;background:linear-gradient(180deg,var(--bg) 0%, #071026 100%);font-family:Inter,system-ui,Arial;color:#e6eef8}
    .wrap{max-width:1100px;margin:40px auto;padding:28px;display:grid;gap:24px;grid-template-columns:360px 1fr}

    /* Left column */
    .profile{background:linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));padding:26px;border-radius:14px;backdrop-filter:blur(6px);box-shadow:0 6px 18px rgba(2,6,23,0.6)}
    .avatar{width:88px;height:88px;border-radius:12px;background:linear-gradient(135deg,var(--accent),#06b6d4);display:flex;align-items:center;justify-content:center;font-weight:700;font-size:28px;color:white}
    h1{margin:12px 0 4px;font-size:22px}
    .title{color:var(--muted);font-size:13px;margin-bottom:12px}
    .contact{font-size:13px;color:var(--muted);line-height:1.6}
    .skills{margin-top:18px}
    .skill{display:inline-block;background:var(--glass);padding:8px 10px;border-radius:999px;font-size:13px;color:var(--muted);margin:6px 8px 0 0}

    /* Right column */
    .card{background:linear-gradient(180deg,var(--card), rgba(255,255,255,0.01));padding:26px;border-radius:14px;min-height:340px}
    .section{margin-bottom:18px}
    .section h3{margin:0 0 8px;font-size:15px}
    .bio{color:var(--muted);line-height:1.6}

    /* Chatbox */
    .chatbox{position:fixed;right:28px;bottom:28px;width:340px;max-height:70vh;border-radius:12px;background:linear-gradient(180deg,#081022, #071427);box-shadow:0 10px 30px rgba(2,6,23,0.6);overflow:hidden;display:flex;flex-direction:column}
    .chat-header{padding:12px 14px;border-bottom:1px solid rgba(255,255,255,0.03);display:flex;gap:10px;align-items:center}
    .chat-header .dot{width:10px;height:10px;border-radius:50%;background:linear-gradient(180deg,#34d399,#10b981)}
    .chat-messages{padding:12px;flex:1;overflow:auto}
    .msg{margin-bottom:10px;max-width:85%}
    .msg.ai{background:linear-gradient(180deg, rgba(79,70,229,0.12), rgba(79,70,229,0.06));padding:10px;border-radius:10px;color:#eaf2ff}
    .msg.user{background:rgba(255,255,255,0.03);padding:8px;border-radius:10px;color:var(--muted);margin-left:auto}
    .chat-input{display:flex;padding:10px;border-top:1px solid rgba(255,255,255,0.02)}
    .chat-input input{flex:1;padding:10px 12px;border-radius:8px;border:1px solid rgba(255,255,255,0.03);background:transparent;color:#e6eef8}
    .chat-input button{margin-left:8px;padding:10px 12px;border-radius:8px;border:0;background:var(--accent);color:white;font-weight:600}

    /* small screens */
    @media (max-width:900px){.wrap{grid-template-columns:1fr;padding:18px}.chatbox{right:12px;left:12px;width:auto}}
  </style>
</head>
<body>
  <div class="wrap">
    <aside class="profile">
      <div style="display:flex;gap:14px;align-items:center">
        <div class="avatar">SB</div>
        <div>
          <h1>Sibusiso</h1>
          <div class="title">IT / Software Tester</div>
        </div>
      </div>

      <div style="margin-top:14px" class="contact">
        <div><strong>Phone:</strong> 081 804 4146</div>
        <div><strong>Email:</strong> sbudeep01@gmail.com</div>
      </div>

      <div class="skills">
        <div style="font-weight:600;margin-top:14px">Skills</div>
        <div class="skill">Troubleshooting</div>
        <div class="skill">Creative</div>
        <div class="skill">Wiring</div>
        <div class="skill">Driving</div>
      </div>

    </aside>

    <main>
      <div class="card">
        <div class="section">
          <h3>About</h3>
          <p class="bio">I'm an IT/software tester with experience in the IT field. I enjoy solving problems, testing systems, and building reliable workflows. Currently learning and growing within QA/testing roles.</p>
        </div>

        <div class="section">
          <h3>Experience</h3>
          <p class="bio"><strong>IT field</strong> — hands-on experience testing hardware and software; troubleshooting and documenting issues, coordinating with developers and stakeholders.</p>
        </div>

        <div class="section">
          <h3>Quick links</h3>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <a href="#projects" style="text-decoration:none;padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.02);font-size:13px;color:var(--muted)">Projects</a>
            <a href="#cv" style="text-decoration:none;padding:8px 10px;border-radius:8px;background:rgba(255,255,255,0.02);font-size:13px;color:var(--muted)">Download CV</a>
          </div>
        </div>

      </div>
    </main>
  </div>

  <!-- Chatbox UI (front-end only). Replace `sendToAi` with a backend endpoint to connect to a real AI. -->
  <div class="chatbox" id="chatbox">
    <div class="chat-header"><div class="dot"></div><div style="font-weight:700">Ask AI about me</div></div>
    <div class="chat-messages" id="messages">
      <div class="msg ai">Hi! I can answer questions about Sibusiso's CV — ask me anything (skills, experience, contact, or how to hire).</div>
    </div>
    <div class="chat-input">
      <input id="chatInput" placeholder="Ask about Sibusiso — e.g. 'What are his skills?'" />
      <button id="sendBtn">Send</button>
    </div>
  </div>

  <script>
    const messagesEl = document.getElementById('messages');
    const inputEl = document.getElementById('chatInput');
    const sendBtn = document.getElementById('sendBtn');

    function appendMessage(text, who='ai'){
      const div = document.createElement('div');
      div.className = 'msg ' + (who==='ai' ? 'ai' : 'user');
      div.textContent = text;
      messagesEl.appendChild(div);
      messagesEl.scrollTop = messagesEl.scrollHeight;
    }

    // Simple front-end "AI" behavior — replace with real API call.
    async function sendToAi(question){
      // Example: to connect to a real AI, call your server endpoint here:
      // return fetch('/api/chat', {method:'POST', body:JSON.stringify({msg:question})}).then(r=>r.json())

      // For demo, do small rule-based replies:
      const q = question.toLowerCase();
      if(q.includes('skill')) return 'Sibusiso\'s main skills: Troubleshooting, Creative thinking, Wiring, Driving.';
      if(q.includes('experience')) return 'Experience: working in the IT field — testing, troubleshooting and documenting issues.';
      if(q.includes('email')||q.includes('contact')) return 'You can reach Sibusiso at 081 804 4146 or sbudeep01@gmail.com.';
      if(q.includes('hire')||q.includes('job')) return 'He is an IT / Software Tester — good for testing roles and troubleshooting tasks.';
      return 'Nice question! For full details you can download the CV or ask for specific info (skills, contact, experience).';
    }

    sendBtn.addEventListener('click', async ()=>{
      const text = inputEl.value.trim();
      if(!text) return;
      appendMessage(text,'user');
      inputEl.value = '';
      appendMessage('...', 'ai'); // temporary
      const aiResp = await sendToAi(text);
      // remove the temporary ...
      const last = messagesEl.querySelectorAll('.msg.ai');
      if(last.length) last[last.length-1].textContent = aiResp;
    });

    inputEl.addEventListener('keydown', (e)=>{ if(e.key==='Enter') sendBtn.click(); });
  </script>
</body>
</html>
