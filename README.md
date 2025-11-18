<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cathexis Tech | Smart Security Solutions</title>

  /* ====== BASE STYLES ====== */
    body {
      margin: 0;
      font-family: "Segoe UI", Roboto, Arial, sans-serif;
      background-color: #f4f7fa;
      color: #222;
      line-height: 1.6;
      scroll-behavior: smooth;
    }

    a {
      text-decoration: none;
    }

    /* ====== NAVBAR ====== */
    .navbar {
      background: linear-gradient(90deg, #5eeb51, #32c740);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 50px;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 100;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
      transition: background 0.3s;
    }

    .navbar.scrolled {
      background: #2b8c1d;
    }

    .navbar .logo img {
      height: 48px;
      width: auto;
    }

    .navbar nav a {
      color: #041704;
      margin-left: 25px;
      font-weight: 600;
      transition: color 0.3s, transform 0.2s;
    }

    .navbar nav a:hover {
      color: #fff;
      transform: translateY(-2px);
    }

    /* ====== HERO SECTION ====== */
    .hero {
      background: linear-gradient(rgba(0, 31, 63, 0.5), rgba(0, 31, 63, 0.5)),
        url('https://images.unsplash.com/photo-1581092795360-fd1f5d3d4d30?auto=format&fit=crop&w=1600&q=80') center/cover;
      color: #fff;
      text-align: center;
      padding: 180px 20px 130px;
      margin-top: 65px;
      animation: fadeIn 1.2s ease-in;
    }

    .hero h1 {
      font-size: 48px;
      margin-bottom: 15px;
      text-shadow: 2px 2px 10px rgba(0,0,0,0.4);
    }

    .hero p {
      font-size: 20px;
      color: #d4e8ff;
      max-width: 650px;
      margin: 0 auto 30px;
    }

    .hero .btn {
      background-color: #5eeb51;
      color: #003300;
      border: none;
      padding: 14px 28px;
      border-radius: 30px;
      font-weight: 600;
      cursor: pointer;
      transition: background 0.3s, transform 0.2s;
    }

    .hero .btn:hover {
      background-color: #3fc736;
      transform: translateY(-3px);
    }

    /* ====== SERVICES ====== */
    .services-section {
      text-align: center;
      padding: 80px 30px;
      background-color: #fff;
    }

    .services-section h2 {
      font-size: 36px;
      color: #003366;
      margin-bottom: 50px;
      position: relative;
      display: inline-block;
    }

    .services-section h2::after {
      content: "";
      display: block;
      height: 3px;
      width: 60%;
      background-color: #5eeb51;
      margin: 10px auto 0;
      border-radius: 2px;
    }

    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }

    .card {
      background: #f9fafc;
      border-radius: 12px;
      box-shadow: 0 2px 12px rgba(0,0,0,0.1);
      padding: 30px 25px;
      width: 270px;
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    .card:hover {
      transform: translateY(-8px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.2);
    }

    .card h3 {
      color: #001f3f;
      margin-bottom: 10px;
    }

    .card p {
      color: #555;
      font-size: 15px;
      margin-bottom: 20px;
    }

    .card a.btn {
      display: inline-block;
      background-color: #5eeb51;
      color: #003300;
      padding: 10px 20px;
      border-radius: 25px;
      font-size: 14px;
      transition: all 0.3s ease;
    }

    .card a.btn:hover {
      background-color: #32c740;
      color: white;
    }

    /* ====== FOOTER ====== */
    footer {
      background-color: #001f3f;
      color: white;
      text-align: center;
      padding: 25px 10px;
      font-size: 14px;
      margin-top: 60px;
    }

    /* ====== ANIMATIONS ====== */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* ====== RESPONSIVE ====== */
    @media (max-width: 768px) {
      .navbar {
        flex-direction: column;
        text-align: center;
      }

      .navbar nav a {
        margin: 10px 0;
      }

      .services {
        flex-direction: column;
      }

      .hero h1 {
        font-size: 36px;
      }
    }
  </style>
</head>
<body>

  <!-- ====== NAVBAR ====== -->
  <header class="navbar">
    <div class="logo">
      <img src="https://cathexisvideo.com/wp-content/uploads/2024/08/Cathexis-Logo-150.png" alt="Cathexis Logo" />
    </div>
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#services">Services</a>
      <a href="#projects">Projects</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>

  <!-- ====== HERO ====== -->
  <section class="hero" id="home">
    <h1>Smart Security. Smarter Future.</h1>
    <p>Leading-edge security and video management solutions engineered for performance and reliability.</p>
    <a href="#services" class="btn">Explore Services</a>
  </section>

  <!-- ====== SERVICES ====== -->
  <section class="services-section" id="services">
    <h2>Our Core Services</h2>
    <div class="services">
      <div class="card">
        <h3>Camera Installation</h3>
        <p>Precision setup of IP and CCTV cameras for clear, secure, and reliable surveillance.</p>
        <a href="camera.html" class="btn">Learn More</a>
      </div>
      <div class="card">
        <h3>System Integration</h3>
        <p>Connecting hardware and software seamlessly for smooth, automated operations.</p>
        <a href="integration.html" class="btn">Learn More</a>
      </div>
      <div class="card">
        <h3>Software Testing</h3>
        <p>Rigorous testing to guarantee stability, scalability, and strong performance.</p>
        <a href="testing.html" class="btn">Learn More</a>
      </div>
      <div class="card">
        <h3>Network Solutions</h3>
        <p>Custom network design ensuring secure and fast connections for all devices.</p>
        <a href="network.html" class="btn">Learn More</a>
      </div>
    </div>
  </section>

  <!-- ====== FOOTER ====== -->
  <footer id="contact">
    © 2025 Cathexis Tech | Designed with 💡 by Sbu
  </footer>

  <script>
    // Navbar scroll effect
    window.addEventListener("scroll", function() {
      const nav = document.querySelector(".navbar");
      nav.classList.toggle("scrolled", window.scrollY > 50);
    });
  </script>

</body>
</html>
