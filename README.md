<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Sibusiso — Modern CV + AI Chat</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#0a0f1d;
  --card:#11182b;
  --text:#d9e2f3;
  --muted:#8693a7;
  --accent:#5b5bff;
  --glow:#7b7bff;
  --transition:0.4s;
}
body{background:var(--bg);color:var(--text);padding:0;margin:0;font-family:Poppins,sans-serif;transition:background var(--transition),color var(--transition)}
.dark-mode{--bg:#0a0f1d;--card:#11182b;--text:#d9e2f3;--muted:#8693a7;--accent:#5b5bff;--glow:#7b7bff}
.light-mode{--bg:#f4f4f4;--card:#fff;--text:#111827;--muted:#6b7280;--accent:#0b74de;--glow:#0b74de}
*{box-sizing:border-box;transition:all var(--transition)}
.resume{display:grid;grid-template-columns:1fr;gap:26px;max-width:980px;width:100%;padding:20px;margin:0 auto}
.base{background:var(--card);border-radius:16px;padding:26px;box-shadow:0 0 35px rgba(0,0,0,0.4);position:relative;overflow:hidden}
.photo{width:140px;height:140px;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center;font-size:48px;color:white;margin:12px auto 18px;box-shadow:0 10px 30px rgba(91,91,255,0.18);transition:transform 0.4s}
.photo img{width:100%;height:100%;object-fit:cover}
.photo:hover{transform:scale(1.06) rotate(4deg)}
.info{text-align:center;margin-bottom:10px}
.info .name{font-size:36px;font-weight:800;letter-spacing:0.4px;background:linear-gradient(90deg,var(--accent),#06b6d4);-webkit-background-clip:text;background-clip:text;color:transparent}
.info .job{font-size:15px;color:var(--muted);margin-top:4px}
h3{margin:18px 0 10px;color:var(--accent);font-size:16px}
.contact a, .btn-social{display:inline-flex;align-items:center;gap:8px;margin:6px 4px;padding:8px 12px;border-radius:12px;border:1px solid rgba(255,255,255,0.06);text-decoration:none;color:var(--text);cursor:pointer;transition:0.25s}
.contact a:hover, .btn-social:hover{background:var(--accent);color:#fff;box-shadow:0 0 12px var(--glow)}
.skills span{display:inline-block;background:rgba(255,255,255,0.03);padding:10px 14px;border-radius:14px;margin:5px;font-size:14px;border:1px solid rgba(255,255,255,0.04);cursor:pointer;transition:0.25s;box-shadow:0 6px 18px rgba(0,0,0,0.35)}
.skills span:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(91,91,255,0.12);border-color:var(--glow)}
.interests-items div{display:inline-flex;flex-direction:column;align-items:center;width:86px;margin:10px;color:var(--text);cursor:pointer;transition:0.25s;border-radius:12px;padding:12px}
.interests-items div:hover{transform:translateY(-6px)}
.interests-items i{font-size:22px;color:var(--accent);margin-bottom:6px}
.chatbox{position:fixed;right:18px;bottom:18px;width:340px;border-radius:16px;background:var(--card);box-shadow:0 8px 35px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:hidden;font-size:14px;z-index:1000}
.chat-header{padding:12px;font-weight:700;background:linear-gradient(90deg,var(--accent),var(--glow));color:#fff}
.chat-messages{padding:12px;flex:1;overflow:auto;background:linear-gradient(180deg,rgba(255,255,255,0.01),transparent)}
.chat-input{display:flex;border-top:1px solid rgba(255,255,255,0.06)}
.chat-input input{flex:1;padding:12px;border:none;background:transparent;color:var(--text);outline:none}
.chat-input button{padding:10px 14px;border:none;background:var(--glow);color:#fff;cursor:pointer;transition:0.3s}
.chat-input button:hover{background:var(--accent)}
@media (max-width:760px){.photo{width:110px;height:110px;font-size:36px}.info .name{font-size:24px}.chatbox{right:12px;left:12px;width:calc(100% - 24px);bottom:12px}}
/* Fire intro animation overlay (1s) */
.fire-animation{position:fixed;top:0;left:0;width:100%;height:100%;background:radial-gradient(circle at 50% 35%, rgba(255,120,60,0.12), transparent 20%), linear-gradient(180deg, rgba(255,60,0,0.06), transparent 40%);z-index:2000;display:flex;align-items:center;justify-content:center;pointer-events:none;opacity:1;animation:fadeOut 1s ease forwards}
@keyframes fadeOut{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.02)}}
.mode-toggle{position:fixed;top:18px;right:18px;padding:10px 14px;background:linear-gradient(90deg,var(--accent),var(--glow));color:#fff;border:none;border-radius:12px;cursor:pointer;z-index:1000;transition:0.25s}
.mode-toggle:hover{transform:translateY(-3px)}
/* subtle scroll reveal */
.fade{opacity:0;transform:translateY(18px);transition:opacity 0.7s ease, transform 0.7s ease}
.fade.show{opacity:1;transform:translateY(0)}
/* download button glow */
.btn-social.download{background:linear-gradient(90deg,rgba(91,91,255,0.12),rgba(11,116,222,0.06));border:1px solid rgba(91,91,255,0.18);box-shadow:0 8px 30px rgba(75,72,255,0.06)}
/* message styles */
.msg{margin-bottom:10px;max-width:85%;white-space:pre-wrap;padding:10px;border-radius:10px}
.msg.ai{background:linear-gradient(180deg, rgba(79,70,229,0.12), rgba(79,70,229,0.06));color:#eaf2ff}
.msg.user{background:rgba(255,255,255,0.03);color:var(--muted);margin-left:auto}
</style>
</head>
<body class="dark-mode">
<div class="fire-animation" id="fireAnim" aria-hidden="true"></div>
<button class="mode-toggle" id="modeToggle" aria-pressed="false">Toggle Mode</button>
<div class="resume">
  <div class="base">
    <div class="profile">
      <div class="photo"><img src="https://images.pexels.com/photos/5427360/pexels-photo-5427360.jpeg" alt="Sibusiso" onerror="this.style.display='none'" /></div>
      <div class="info">
        <h1 class="name">Sibusiso</h1>
        <h2 class="job">IT / Software Tester</h2>
      </div>
    </div>
    <div class="about">
      <h3>About Me</h3>
      <p>Dedicated and hands-on IT / Software Tester with strong troubleshooting skills and experience in the IT field. Skilled in wiring, problem‑solving, and analyzing system issues. Creative thinker who enjoys improving workflows.</p>
    </div>
    <div class="contact">
      <h3>Contact Me</h3>
      <a href="tel:+27818044146"><i class="fas fa-phone"></i>&nbsp;081 804 4146</a>
      <a href="mailto:sbudeep01@gmail.com"><i class="fas fa-envelope"></i>&nbsp;sbudeep01@gmail.com</a>
      <a href="https://www.instagram.com/sibusiso_nx/" target="_blank" rel="noopener" class="btn-social"><i class="fab fa-instagram"></i>&nbsp;Instagram</a>
      <a href="https://www.facebook.com/kado.deep/" target="_blank" rel="noopener" class="btn-social"><i class="fab fa-facebook"></i>&nbsp;Facebook</a>
      <a href="https://www.linkedin.com/in/sibusiso-nonkosi-470238282/" target="_blank" rel="noopener" class="btn-social"><i class="fab fa-linkedin"></i>&nbsp;LinkedIn</a>
      <div style="margin-top:8px"><i class="fas fa-map-marker-alt"></i>&nbsp;Durban, South Africa</div>
      <a href="Sibusiso-CV.pdf" class="btn-social download" download><i class="fas fa-download"></i>&nbsp;Download CV</a>
    </div>
    <div class="skills">
      <h3>Skills</h3>
      <span role="button" tabindex="0" data-query="Troubleshooting">Troubleshooting</span>
      <span role="button" tabindex="0" data-query="Software Testing">Software Testing</span>
      <span role="button" tabindex="0" data-query="Wiring">Wiring</span>
      <span role="button" tabindex="0" data-query="Creative Thinking">Creative Thinking</span>
      <span role="button" tabindex="0" data-query="IT Support">IT Support</span>
    </div>
    <div class="interests">
      <h3><i class="fas fa-star"></i>Interests</h3>
      <div class="interests-items">
        <div data-href="https://www.youtube.com/@KADOrsa"><i class="fas fa-music"></i><span>Music</span></div>
        <div data-href="#"><i class="fas fa-video"></i><span>Editing</span></div>
        <div data-href="#"><i class="fas fa-code"></i><span>Tech</span></div>
        <div data-href="#"><i class="fas fa-gamepad"></i><span>Gaming</span></div>
      </div>
    </div>
    <div class="func">
      <div class="work">
        <h3><i class="fa fa-briefcase"></i>Experience</h3>
        <ul>
          <li><span>IT Field Technician / Tester</span><small>Cathexis Technologies</small><small>Testing systems, troubleshooting, wiring & device setup.</small></li>
          <li><span>Software Testing</span><small>Hands-on QA & bug reporting</small></li>
        </ul>
      </div>
      <div class="edu">
        <h3><i class="fa fa-graduation-cap"></i>Education</h3>
        <ul>
          <li><span>A+ & IT Fundamentals (current)</span><small>Self-study</small></li>
          <li><span>Matric — Maths Literacy</span><small>Burnwood Secondary</small></li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div class="chatbox" role="region" aria-label="AI chatbox">
  <div class="chat-header">Ask AI about me</div>
  <div class="chat-messages" id="messages">
    <div class="msg ai">Hi! Ask me anything about Sibusiso's skills, experience, or contact info.</div>
  </div>
  <div class="chat-input">
    <input id="chatInput" placeholder="Type your question..." aria-label="Chat input" />
    <button id="sendBtn">Send</button>
  </div>
</div>
<script>
// Fire animation — remove after 1s
setTimeout(()=>{const el=document.getElementById('fireAnim'); if(el) el.remove();},1000);

// Dark/light toggle — guard elements exist
(function(){
  const bodyEl = document.body;
  const modeToggle = document.getElementById('modeToggle');
  if(modeToggle){
    modeToggle.addEventListener('click',()=>{
      const isLight = bodyEl.classList.toggle('light-mode');
      if(isLight){ bodyEl.classList.remove('dark-mode'); modeToggle.setAttribute('aria-pressed','true'); modeToggle.textContent='Light Mode'; }
      else{ bodyEl.classList.add('dark-mode'); modeToggle.setAttribute('aria-pressed','false'); modeToggle.textContent='Dark Mode'; }
    });
  }
})();

// Scroll reveal — safe checks and correct target usage
(function(){
  const faders = document.querySelectorAll('.base, .about, .contact, .skills, .interests, .func');
  if(!faders || faders.length===0) return; // nothing to observe
  faders.forEach(f=>{ if(f) f.classList.add('fade'); });
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry && entry.isIntersecting && entry.target && entry.target.classList){
        entry.target.classList.add('show');
      }
    });
  }, {threshold: 0.15});
  faders.forEach(f=>{ if(f && f.nodeType===1) obs.observe(f); });
})();

// Skills buttons — open google search
(function(){
  document.querySelectorAll('.skills span[data-query]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const q = encodeURIComponent(el.getAttribute('data-query'));
      window.open('https://www.google.com/search?q='+q, '_blank');
    });
    el.addEventListener('keydown', (e)=>{ if(e.key==='Enter' || e.key===' ') el.click(); });
  });
})();

// Interests buttons
(function(){
  document.querySelectorAll('.interests-items [data-href]').forEach(el=>{
    el.addEventListener('click', ()=>{
      const url = el.getAttribute('data-href');
      if(url && url !== '#') window.open(url, '_blank');
      else alert(el.innerText.trim());
    });
  });
})();

// AI chat — guarded for missing elements
(function(){
  const messagesEl = document.getElementById('messages');
  const inputEl = document.getElementById('chatInput');
  const sendBtn = document.getElementById('sendBtn');
  if(!messagesEl || !inputEl || !sendBtn) return;

  function appendMessage(text, who='ai'){
    const div = document.createElement('div');
    div.className = 'msg '+(who==='ai' ? 'ai' : 'user');
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  const profileData = {
    name: 'Sibusiso',
    fullName: 'Nonkosi Sibusiso Xaba',
    title: 'IT / Software Tester',
    email: 'sbudeep01@gmail.com',
    phone: '081 804 4146',
    location: 'Durban, South Africa',
    skills: ['Troubleshooting','Software Testing','Wiring','Creative Thinking','IT Support'],
    experience: ['Cathexis Technologies — IT Field Technician / Tester: testing systems, troubleshooting, wiring & device setup.','Hands-on QA & bug reporting.'],
    education: ['A+ & IT Fundamentals (current)','Matric — Maths Literacy'] ,
    socials: {
      instagram: 'https://www.instagram.com/sibusiso_nx/',
      facebook: 'https://www.facebook.com/kado.deep/',
      linkedin: 'https://www.linkedin.com/in/sibusiso-nonkosi-470238282/',
      youtube: 'https://www.youtube.com/@KADOrsa'
    }
  };

  async function sendToAi(question){
    const q = String(question || '').toLowerCase();
    if(!q) return 'Ask a question about skills, experience, or contact details.';
    if(q.includes('skill') || q.includes('skills')) return 'Skills: ' + profileData.skills.join(', ') + '.';
    if(q.includes('experience') || q.includes('work') || q.includes('job')) return profileData.experience.join('\n');
    if(q.includes('email') || q.includes('contact')) return `Email: ${profileData.email} — Phone: ${profileData.phone}`;
    if(q.includes('where') || q.includes('location') || q.includes('live')) return `Location: ${profileData.location}`;
    if(q.includes('linkedin') || q.includes('cv') || q.includes('resume')) return `LinkedIn: ${profileData.socials.linkedin} — CV: Sibusiso-CV.pdf`;
    if(q.includes('education') || q.includes('study') || q.includes('a+')) return 'Education: ' + profileData.education.join(', ');
    if(q.includes('youtube') || q.includes('music')) return `YouTube / Music: ${profileData.socials.youtube}`;
    if(q.includes('instagram')) return `Instagram: ${profileData.socials.instagram}`;
    if(q.includes('facebook')) return `Facebook: ${profileData.socials.facebook}`;
    return 'I can answer questions about Sibusiso. Try asking about skills, experience, education, or contact details.';
  }

  sendBtn.addEventListener('click', ()=>{
    const text = inputEl.value.trim();
    if(!text) return;
    appendMessage(text, 'user');
    inputEl.value = '';
    appendMessage('...', 'ai');
    setTimeout(async ()=>{
      const aiResp = await sendToAi(text);
      const last = messagesEl.querySelectorAll('.msg.ai');
      if(last.length) last[last.length-1].textContent = aiResp;
    }, 400);
  });

  inputEl.addEventListener('keydown', e=>{ if(e.key==='Enter') sendBtn.click(); });
})();
</script>
</body>
</html>
