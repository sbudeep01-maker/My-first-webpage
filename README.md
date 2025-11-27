<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Sibusiso — Elite CV + AI Assistant</title>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap" rel="stylesheet">
<style>
:root{
  --bg:#05070d;
  --card:#0d1220;
  --text:#e8eeff;
  --muted:#8893a8;
  --accent:#6366f1;
  --glow:#818cf8;
  --radius:16px;
  --transition:0.35s;
}
body{background:var(--bg);color:var(--text);margin:0;font-family:Poppins;overflow-x:hidden}

/* Fire intro */
#fireAnim{position:fixed;inset:0;z-index:2000;background:url('https://i.imgur.com/9QG4g7z.gif') center/cover no-repeat;animation:fadeOut 1s forwards}
@keyframes fadeOut{100%{opacity:0}}

/* Layout */
.container{max-width:1040px;margin:auto;padding:20px}
.card{background:var(--card);border-radius:var(--radius);padding:26px;margin-bottom:20px;box-shadow:0 0 40px rgba(0,0,0,0.6);position:relative;overflow:hidden;backdrop-filter:blur(6px)}
.card:hover{transform:translateY(-4px);transition:0.3s}

/* Header */
.header{display:flex;gap:22px;flex-wrap:wrap;align-items:center}
.photo{width:150px;height:150px;border-radius:20px;overflow:hidden;box-shadow:0 0 25px rgba(99,102,241,0.3)}
.photo img{width:100%;height:100%;object-fit:cover}
.h-info h1{font-size:34px;margin:0;background:linear-gradient(90deg,var(--accent),#06b6d4);-webkit-background-clip:text;color:transparent;font-weight:800}
.h-info p{margin:6px 0;color:var(--muted)}

/* Sidebar layout */
.grid{display:grid;grid-template-columns:1fr 330px;gap:22px}
@media(max-width:880px){.grid{grid-template-columns:1fr}}

.section h3{margin:0 0 10px;color:var(--accent);font-weight:600;font-size:18px}
.list-small{color:var(--muted);padding-left:20px;margin:0}

/* Contact buttons */
.btn{padding:10px 14px;display:flex;align-items:center;gap:8px;border-radius:12px;text-decoration:none;color:var(--text);border:1px solid rgba(255,255,255,0.06);margin:6px 0}
.btn:hover{background:var(--accent);color:#fff;box-shadow:0 0 12px var(--glow)}

/* Skills */
.skills span{padding:10px 14px;background:#0f1525;border-radius:14px;cursor:pointer;margin:6px;display:inline-block;transition:0.3s;border:1px solid rgba(255,255,255,0.04)}
.skills span:hover{transform:translateY(-5px);box-shadow:0 0 20px rgba(129,140,248,0.4)}

/* Interests */
.interests-items div{width:90px;padding:12px;text-align:center;cursor:pointer;border-radius:14px;background:#101729;margin:8px;transition:0.3s}
.interests-items div:hover{transform:translateY(-6px);box-shadow:0 0 18px rgba(99,102,241,0.4)}
.interests-items i{font-size:22px;color:var(--accent)}

/* Chatbox */
.chatbox{position:fixed;right:20px;bottom:20px;width:350px;background:var(--card);border-radius:var(--radius);box-shadow:0 0 40px rgba(0,0,0,0.6);overflow:hidden;z-index:1000}
.chat-header{padding:14px;background:linear-gradient(90deg,var(--accent),var(--glow));font-weight:700;color:#fff}
.chat-messages{padding:12px;height:240px;overflow-y:auto}
.msg{padding:10px;border-radius:12px;margin-bottom:10px;max-width:85%;white-space:pre-wrap}
.msg.ai{background:#1a2040;color:#eaf2ff}
.msg.user{background:#0f1525;margin-left:auto;color:var(--muted)}
.chat-input{display:flex;border-top:1px solid rgba(255,255,255,0.05)}
.chat-input input{flex:1;padding:12px;background:transparent;border:none;color:var(--text)}
.chat-input button{padding:10px 14px;background:var(--accent);color:#fff;border:none;cursor:pointer}

/* Mode toggle */
#modeToggle{position:fixed;top:20px;left:20px;padding:10px 14px;border-radius:12px;border:none;background:linear-gradient(90deg,var(--accent),var(--glow));color:#fff;cursor:pointer;z-index:1500}

</style>
</head>
<body>
<div id="fireAnim"></div>
<button id="modeToggle">Toggle Mode</button>

<div class="container">
  <div class="card header-card">
    <div class="header">
      <div class="photo"><img src="profile.jpg" /></div>
      <div class="h-info">
        <h1>Nonkosi Sibusiso Xaba</h1>
        <p>IT / Software Tester — Durban, South Africa</p>
        <p>DOB: <span style="filter:blur(4px)">25 May 2004</span></p>
        <p>Address: <span style="filter:blur(4px)">43 Bhekezela Grove, Durban</span></p>
      </div>
    </div>
  </div>

  <div class="grid">
    <main>
      <div class="card section">
        <h3>Objective</h3>
        <p>I am seeking employment where my skills will be challenged and new learning opportunities are available.</p>
      </div>

      <div class="card section">
        <h3>Personal Details</h3>
        <ul class="list-small">
          <li>Contact Number: <span style="filter:blur(4px)">083 984 0749</span></li>
          <li>Email: <span style="filter:blur(4px)">sbuxaba659@gmail.com</span></li>
          <li>Citizenship: South Africa</li>
        </ul>
      </div>

      <div class="card section">
        <h3>Education</h3>
        <ul class="list-small">
          <li>Burnwood Secondary School — Matric (2018–2022)</li>
          <li>Rural Metro EMS — First Aid & NFPA Firefighter (2023)</li>
        </ul>
      </div>

      <div class="card section">
        <h3>Experience</h3>
        <ul class="list-small">
          <li>Cathexis Technologies — Software Tester, Support & Driver (Sep 2023 – present)</li>
          <li>Tasks: Testing software, IT support, Driving</li>
        </ul>
      </div>

      <div class="card section">
        <h3>Skills & Qualifications</h3>
        <ul class="list-small">
          <li>Languages: Zulu, English</li>
          <li>Computer Skills: OS, Graphic design, Internet, Troubleshooting</li>
          <li>Certifications: First Aid L3, NFPA 1001 / 472</li>
        </ul>
      </div>

      <div class="card section">
        <h3>References</h3>
        <ul class="list-small">
          <li>Mr Mudua — <span style="filter:blur(4px)">072 062 0306</span></li>
          <li>Mr Makathini — <span style="filter:blur(4px)">072 902 5832</span></li>
          <li>Mark Randelhoff — <span style="filter:blur(4px)">083 660 1310</span></li>
        </ul>
      </div>
    </main>

    <aside>
      <div class="card section contact">
        <h3>Contact Me</h3>
        <a class="btn"><i class="fas fa-envelope"></i>Email (blurred)</a>
        <a class="btn" href="https://www.instagram.com/sibusiso_nx/" target="_blank"><i class="fab fa-instagram"></i>Instagram</a>
        <a class="btn" href="https://www.facebook.com/kado.deep/" target="_blank"><i class="fab fa-facebook"></i>Facebook</a>
        <a class="btn" href="https://www.linkedin.com/in/sibusiso-nonkosi-470238282/" target="_blank"><i class="fab fa-linkedin"></i>LinkedIn</a>
        <a class="btn" href="Sibusiso-CV.pdf" download><i class="fas fa-download"></i>Download CV</a>
      </div>

      <div class="card section">
        <h3>Skills (Google Search)</h3>
        <div class="skills">
          <span data-query="Troubleshooting">Troubleshooting</span>
          <span data-query="Software Testing">Software Testing</span>
          <span data-query="Networking">Networking</span>
          <span data-query="Computer Literacy">Computer Literacy</span>
        </div>
      </div>

      <div class="card section">
        <h3>Interests</h3>
        <div class="interests-items">
          <div data-href="https://www.youtube.com/@KADOrsa"><i class="fas fa-music"></i><span>Music</span></div>
          <div data-href="https://www.tiktok.com/@sbu_mabura"><i class="fas fa-video"></i><span>Editing</span></div>
          <div data-href="https://github.com/sbudeep01-maker"><i class="fas fa-code"></i><span>Tech</span></div>
          <div data-href="https://www.evetech.co.za/"><i class="fas fa-gamepad"></i><span>Gaming</span></div>
        </div>
      </div>
    </aside>
  </div>
</div>

<!-- Chatbox -->
<div class="chatbox" id="chatbox">
  <div class="chat-header">Ask AI About Sibusiso</div>
  <div class="chat-messages" id="messages">
    <div class="msg ai">Hey! Ask me anything about Sibusiso — skills, work, education, interests, etc.</div>
  </div>
  <div class="chat-input">
    <input id="chatInput" placeholder="Type your question..." />
    <button id="sendBtn">Send</button>
  </div>
</div>

<script>
setTimeout(()=>document.getElementById('fireAnim').remove(),1000);

document.querySelectorAll('.skills span').forEach(btn=>btn.onclick=()=>{
  const q=encodeURIComponent(btn.dataset.query);
  window.open('https://www.google.com/search?q='+q,'_blank');
});

