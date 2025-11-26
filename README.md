<!doctype html>
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
  }
  *{margin:0;padding:0;box-sizing:border-box;font-family:Poppins,sans-serif}
  body{background:var(--bg);color:var(--text);padding:40px;display:flex;justify-content:center}

  .resume{display:grid;grid-template-columns:320px 1fr;gap:26px;max-width:1200px;width:100%}

  /* LEFT SIDE */
  .base{background:var(--card);border-radius:16px;padding:26px;box-shadow:0 0 35px rgba(0,0,0,0.4);position:relative}
  .photo{width:120px;height:120px;border-radius:14px;background:linear-gradient(135deg,var(--accent),#00d4ff);display:flex;align-items:center;justify-content:center;font-size:42px;color:white;margin:auto;margin-bottom:18px;box-shadow:0 0 18px var(--glow);transition:transform 0.4s}
  .photo:hover{transform:scale(1.05) rotate(5deg)}
  .info{text-align:center;margin-bottom:22px}
  .info .name{font-size:22px;font-weight:700}
  .info .job{font-size:14px;color:var(--muted)}
  h3{margin:18px 0 10px;color:var(--accent);font-size:15px}

  .contact a{color:var(--text);text-decoration:none;display:flex;align-items:center;gap:10px;margin:6px 0;font-size:14px;transition:0.3s}
  .contact a:hover{color:var(--glow)}
  .contact i{color:var(--accent)}

  .skills span{display:inline-block;background:rgba(255,255,255,0.04);padding:8px 12px;border-radius:12px;margin:5px;font-size:13px;border:1px solid rgba(255,255,255,0.05);cursor:pointer;transition:0.3s}
  .skills span:hover{transform:scale(1.1);border-color:var(--glow)}

  /* RIGHT SIDE */
  .func{background:var(--card);border-radius:16px;padding:30px;box-shadow:0 0 35px rgba(0,0,0,0.35)}
  .func h3 i{margin-right:8px;color:var(--accent)}
  ul{list-style:none;margin-top:10px}
  ul li{margin-bottom:14px;color:var(--muted)}
  ul li span{display:block;color:var(--text);font-weight:600;font-size:14px}
  ul li small{display:block;font-size:12px;color:var(--muted)}

  .interests-items div{display:inline-flex;flex-direction:column;align-items:center;width:70px;margin:10px;color:var(--text)}
  .interests-items i{font-size:22px;color:var(--accent);margin-bottom:6px}

  /* Chatbox */
  .chatbox{position:fixed;right:28px;bottom:28px;width:320px;border-radius:14px;background:var(--card);box-shadow:0 8px 35px rgba(0,0,0,0.5);display:flex;flex-direction:column;overflow:hidden;font-size:14px}
  .chat-header{padding:12px;font-weight:700;background:var(--accent);color:#fff}
  .chat-messages{padding:12px;flex:1;overflow:auto;background:rgba(255,255,255,0.03)}
  .chat-input{display:flex;border-top:1px solid rgba(255,255,255,0.1)}
  .chat-input input{flex:1;padding:10px;border:none;background:transparent;color:var(--text)}
  .chat-input button{padding:10px 14px;border:none;background:var(--glow);color:#fff;cursor:pointer;transition:0.3s}
  .chat-input button:hover{background:var(--accent)}
</style>
</head>
<body>
<div class="resume">
  <div class="base">
    <div class="profile">
      <div class="photo"><i class="fas fa-user"></i></div>
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
      <a href="tel:0818044146"><i class="fas fa-phone"></i>081 804 4146</a>
      <a href="mailto:sbudeep01@gmail.com"><i class="fas fa-envelope"></i>sbudeep01@gmail.com</a>
      <a><i class="fas fa-map-marker-alt"></i>Durban, South Africa</a>
      <a href="Sibusiso-CV.pdf" class="download"><i class="fas fa-download"></i>Download CV</a>
    </div>
    <div class="skills">
      <h3>Skills</h3>
      <span onclick="window.open('https://www.google.com/search?q=Troubleshooting','_blank')">Troubleshooting</span>
      <span onclick="window.open('https://www.google.com/search?q=Software+Testing','_blank')">Software Testing</span>
      <span onclick="window.open('https://www.google.com/search?q=Wiring','_blank')">Wiring</span>
      <span onclick="window.open('https://www.google.com/search?q=Creative+Thinking','_blank')">Creative Thinking</span>
      <span onclick="window.open('https://www.google.com/search?q=IT+Support','_blank')">IT Support</span>
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

    <div class="interests">
      <h3><i class="fas fa-star"></i>Interests</h3>
      <div class="interests-items">
        <div><i class="fas fa-music"></i><span>Music</span></div>
        <div><i class="fas fa-video"></i><span>Editing</span></div>
        <div><i class="fas fa-code"></i><span>Tech</span></div>
        <div><i class="fas fa-gamepad"></i><span>Gaming</span></div>
      </div>
    </div>
  </div>
</div>

<div class="chatbox">
  <div class="chat-header">Ask AI about me</div>
  <div class="chat-messages" id="messages">
    <div class="msg ai">Hi! Ask me anything about Sibusiso's skills, experience, or contact info.</div>
  </div>
  <div class="chat-input">
    <input id="chatInput" placeholder="Type your question..." />
    <button id="sendBtn">Send</button>
  </div>
</div>

<script>
const messagesEl=document.getElementById('messages');
const inputEl=document.getElementById('chatInput');
const sendBtn=document.getElementById('sendBtn');

function appendMessage(text,who='ai'){
  const div=document.createElement('div');
  div.className='msg '+(who==='ai'?'ai':'user');
  div.textContent=text;
  messagesEl.appendChild(div);
  messagesEl.scrollTop=messagesEl.scrollHeight;
}

async function sendToAi(question){
  const q=question.toLowerCase();
  if(q.includes('skill')) return 'Sibusiso\'s main skills: Troubleshooting, Software Testing, Wiring, Creative Thinking, IT Support.';
  if(q.includes('experience')) return 'Experience: IT Field Technician / Tester at Cathexis Technologies — testing systems, troubleshooting, wiring & device setup.';
  if(q.includes('email')||q.includes('contact')) return 'You can reach Sibusiso at 081 804 4146 or sbudeep01@gmail.com.';
  if(q.includes('hire')||q.includes('job')) return 'He is an IT / Software Tester — ideal for QA/testing roles.';
  return 'Nice question! Ask about specific skills, experience, or contact info.';
}

sendBtn.addEventListener('click',()=>{const text=inputEl.value.trim();if(!text)return;appendMessage(text,'user');inputEl.value='';appendMessage('...','ai');setTimeout(async()=>{const aiResp=await sendToAi(text);const last=messagesEl.querySelectorAll('.msg.ai');if(last.length)last[last.length-1].textContent=aiResp;},500);});
inputEl.addEventListener('keydown',e=>{if(e.key==='Enter')sendBtn.click();});
</script>
</body>
</html>
