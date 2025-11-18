<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>Sibusiso — CV</title>
  <style>
    :root{
      --accent:#0b74de;
      --muted:#6b7280;
      --bg:#f8fafc;
      --card:#ffffff;
      --maxw:900px;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
    }
    *{box-sizing:border-box}
    body{
      margin:0;
      background:var(--bg);
      padding:24px;
      display:flex;
      justify-content:center;
      font-size:16px;
      line-height:1.45;
      color:#111827;
    }
    .wrap{
      width:100%;
      max-width:var(--maxw);
      background:white;
      padding:28px;
      border-radius:12px;
      box-shadow:0 8px 30px rgba(0,0,0,0.08);
      display:grid;
      grid-template-columns: 1fr 320px;
      gap:20px;
    }
    header{
      grid-column: 1 / -1;
      display:flex;
      gap:20px;
      align-items:center;
      border-bottom:1px solid #EEF2F7;
      padding-bottom:18px;
    }
    .avatar{
      width:84px;
      height:84px;
      border-radius:12px;
      background:linear-gradient(135deg,var(--accent),#6C5CE7);
      display:flex;
      align-items:center;
      justify-content:center;
      color:white;
      font-size:28px;
      font-weight:700;
    }
    h1{margin:0;font-size:22px}
    .muted{color:var(--muted)}
    .card{
      background:var(--card);
      border-radius:10px;
      padding:16px;
      box-shadow:0 4px 14px rgba(0,0,0,0.04);
      margin-bottom:16px;
    }
    h2{margin-top:0;font-size:16px}
    .skills span{
      background:#f1f5f9;
      padding:6px 10px;
      border-radius:8px;
      font-size:13px;
      margin-right:6px;
      margin-bottom:6px;
      display:inline-block;
    }
    @media (max-width:880px){
      .wrap{grid-template-columns:1fr}
    }
  </style>
</head>
<body>
  <main class="wrap">
    <!-- HEADER -->
    <header>
      <div class="avatar">SN</div>
      <div>
        <h1>Sibusiso — IT / Software Tester</h1>
        <p class="muted">
          Durban, South Africa ·
          <strong>081 804 4146</strong> ·
          <strong>sbudeep01@gmail.com</strong>
        </p>
      </div>
    </header>
    <!-- MAIN CONTENT -->
    <section>
      <div class="card">
        <h2>Profile</h2>
        <p class="muted">
          Dedicated and hands-on IT / Software Tester with strong troubleshooting skills and experience in the IT field. Skilled in wiring, technical problem-solving, and analysing system issues. Creative thinker who learns fast and enjoys improving systems and workflows.
        </p>
      </div>
      <div class="card">
        <h2>Experience</h2>
        <p><strong>IT Field Experience</strong></p>
        <ul class="muted">
          <li>Practical experience in technical troubleshooting and PC support.</li>
          <li>Software testing and identifying system issues.</li>
          <li>Testing camera systems, devices and IT setups.</li>
          <li>Working with developers to reproduce and resolve bugs.</li>
          <li>Basic networking and wiring setup experience.</li>
        </ul>
      </div>
      <div class="card">
        <h2>Education</h2>
        <ul class="muted">
          <li>Currently studying: A+, IT Fundamentals</li>
          <li>High School: Maths Literacy was a favourite subject</li>
        </ul>
      </div>
      <div class="card">
        <h2>Projects</h2>
        <ul class="muted">
          <li>Personal website built with HTML/CSS (GitHub Pages)</li>
          <li>Python audio player project</li>
          <li>Testing automation scripts for daily tasks</li>
        </ul>
      </div>
      <div class="card">
        <h2>References</h2>
        <p class="muted">Available on request.</p>
      </div>
    </section>
    <!-- SIDEBAR -->
    <aside>
      <div class="card">
        <h2>Contact</h2>
        <p class="muted">
          <strong>Email:</strong> sbudeep01@gmail.com<br>
          <strong>Phone:</strong> 081 804 4146<br>
          <strong>Location:</strong> Durban, SA<br>
        </p>
      </div>
      <div class="card">
        <h2>Skills</h2>
        <div class="skills">
          <span>Troubleshooting</span>
          <span>Creative Thinking</span>
          <span>Wiring</span>
          <span>Driving</span>
          <span>Software Testing</span>
          <span>IT Support</span>
        </div>
      </div>
      <div class="card">
        <h2>Languages</h2>
        <p class="muted">Zulu (Native)<br>English (Fluent)</p>
      </div>
      <div class="card">
        <h2>Hobbies</h2>
        <p>Making <a class="text-success" type="button" href="https://www.youtube.com/@KADOrsa"> YouTube Videos</a></p>
        <form action="" href="https://cathexisvideo.com/">
          <button type ="submit" class="btn btn-success"><i></i> Show place of work </button>
        </form>
      </div>
    </aside>
  </main>
</body>
