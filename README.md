<html lang="en">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>Sibusiso — Modern CV</title>
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
  .base{background:var(--card);border-radius:16px;padding:26px;box-shadow:0 0 35px rgba(0,0,0,0.4)}
  .photo{width:120px;height:120px;border-radius:14px;background:linear-gradient(135deg,var(--accent),#00d4ff);display:flex;align-items:center;justify-content:center;font-size:42px;color:white;margin:auto;margin-bottom:18px;box-shadow:0 0 18px var(--glow)}
  .info{text-align:center;margin-bottom:22px}
  .info .name{font-size:22px;font-weight:700}
  .info .job{font-size:14px;color:var(--muted)}
  h3{margin:18px 0 10px;color:var(--accent);font-size:15px}

  .contact a{color:var(--text);text-decoration:none;display:flex;align-items:center;gap:10px;margin:6px 0;font-size:14px}
  .contact i{color:var(--accent)}

  .skills span{display:inline-block;background:rgba(255,255,255,0.04);padding:8px 12px;border-radius:12px;margin:5px;font-size:13px;border:1px solid rgba(255,255,255,0.05)}

  /* RIGHT SIDE */
  .func{background:var(--card);border-radius:16px;padding:30px;box-shadow:0 0 35px rgba(0,0,0,0.35)}
  .func h3 i{margin-right:8px;color:var(--accent)}
  ul{list-style:none;margin-top:10px}
  ul li{margin-bottom:14px;color:var(--muted)}
  ul li span{display:block;color:var(--text);font-weight:600;font-size:14px}
  ul li small{display:block;font-size:12px;color:var(--muted)}

  .interests-items div{display:inline-flex;flex-direction:column;align-items:center;width:70px;margin:10px;color:var(--text)}
  .interests-items i{font-size:22px;color:var(--accent);margin-bottom:6px}
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
      <p>Dedicated and hands-on IT / Software Tester with strong troubleshooting skills and experience in the IT field. Skilled in wiring, problem‑solving, and analysing system issues.</p>
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
      <span>Troubleshooting</span>
      <span>Software Testing</span>
      <span>Wiring</span>
      <span>Creative Thinking</span>
      <span>IT Support</span>
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
</body>
</html>
