<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cathexis Tech | Smart Security Solutions</title>
  <style>
    /* Base Styles */
    body {
      margin: 0;
      font-family: "Segoe UI", Roboto, Arial, sans-serif;
      background-color: #f4f7fa;
      color: #222;
      line-height: 1.6;
    }

    /* Navbar */
    .navbar {
      background-color: #5eeb51;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 50px;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 100;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
    }

    .navbar .logo img {
      height: 48px;
      width: auto;
    }

    .navbar nav a {
      color: #041704;
      margin-left: 25px;
      text-decoration: none;
      font-weight: 600;
      transition: color 0.3s;
    }

    .navbar nav a:hover {
      color: #083b0d;
    }

    /* Hero Section */
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
      margin: 0 auto;
    }

    /* Services */
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
    }

    /* Footer */
    footer {
      background-color: #001f3f;
      color: white;
      text-align: center;
      padding: 25px 10px;
      font-size: 14px;
      margin-top: 60px;
    }

    /* Animations */
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }

    /* Responsive */
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

  <!-- Navbar -->
  <header class="navbar">
    <div class="logo">
      <img src="https://cathexisvideo.com/wp-content/uploads/2024/08/Cathexis-Logo-150.png" alt="Cathexis Logo" />
    </div>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
  </header>

  <!-- Hero Section -->
  <section class="hero">
    <h1>Smart Security. Smarter Future.</h1>
    <p>Leading-edge security and video management solutions engineered for performance and reliability.</p>
  </section>

  <!-- Services Section -->
  <section class="services-section">
    <h2>Our Core Services</h2>
    <div class="services">
      <div class="card">
        <h3>Camera Installation</h3>
        <p>Precision setup of IP and CCTV cameras for clear, secure, and reliable surveillance.</p>
      </div>
      <div class="card">
        <h3>System Integration</h3>
        <p>Connecting hardware and software seamlessly for smooth, automated operations.</p>
      </div>
      <div class="card">
        <h3>Software Testing</h3>
        <p>Rigorous testing to guarantee stability, scalability, and strong performance.</p>
      </div>
      <div class="card">
        <h3>Network Solutions</h3>
        <p>Custom network design ensuring secure and fast connections for all devices.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    © 2025 Cathexis Tech | Designed with 💡 by Sbu
  </footer>

</body>
</html>
