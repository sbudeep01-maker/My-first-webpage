<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cathexis Tech - Our Services</title>
  <style>
    body {
      margin: 0;
      font-family: "Segoe UI", Arial, sans-serif;
      background-color: #f8f9fa;
      color: #333;
    }

    /* Navbar */
    .navbar {
      background-color: #5eeb51;
      color: rgb(8, 22, 10);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 40px;
      position: fixed;
      width: 100%;
      top: 0;
      z-index: 10;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
    }

    /* Logo */
    .navbar .logo img {
      height: 50px;
      width: auto;
    }

    /* Navbar links */
    .navbar nav a {
      color: rgb(8, 22, 10);
      margin-left: 20px;
      text-decoration: none;
      font-weight: 600;
    }

    .navbar nav a:hover {
      color: #0a420d;
      text-decoration: underline;
    }

    /* Hero section */
    .hero {
      background: linear-gradient(rgba(0, 31, 63, 0.4), rgba(0, 31, 63, 0.4)),
                  url('https://images.unsplash.com/photo-1581092795360-fd1f5d3d4d30?auto=format&fit=crop&w=1600&q=80');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      padding: 150px 20px 100px;
      margin-top: 60px;
    }

    .hero h1 {
      font-size: 42px;
      margin-bottom: 10px;
    }

    .hero p {
      font-size: 18px;
      color: #d0eaff;
    }

    /* Services Section */
    .services-section {
      text-align: center;
      padding: 60px 30px;
      background-color: #fff;
    }

    .services-section h2 {
      font-size: 32px;
      color: #001f3f;
      margin-bottom: 40px;
    }

    .services {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 25px;
    }

    .card {
      background: #f4f6f9;
      border-radius: 10px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      padding: 25px;
      width: 260px;
      transition: all 0.3s ease;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 4px 12px rgba(0,0,0,0.2);
    }

    .card h3 {
      color: #001f3f;
      margin-top: 0;
    }

    .card p {
      color: #555;
    }

    /* Footer */
    footer {
      background-color: #001f3f;
      color: white;
      text-align: center;
      padding: 20px 10px;
      margin-top: 40px;
    }
  </style>
</head>
<body>

  <!-- Navbar -->
  <div class="navbar">
    <div class="logo">
      <img width="150" height="49"
        src="https://cathexisvideo.com/wp-content/uploads/2024/08/Cathexis-Logo-150.png"
        alt="Cathexis Logo">
    </div>
    <nav>
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Services</a>
      <a href="#">Projects</a>
      <a href="#">Contact</a>
    </nav>
  </div>

  <!-- Hero -->
  <section class="hero">
    <h1>Innovative Security Solutions</h1>
    <p>Professional Installation, Integration, and Support for Modern Surveillance Systems</p>
  </section>

  <!-- Services -->
  <section class="services-section">
    <h2>Our Services</h2>
    <div class="services">
      <div class="card">
        <h3>Camera Installation</h3>
        <p>Professional CCTV and IP camera setup for maximum security coverage.</p>
      </div>
      <div class="card">
        <h3>System Integration</h3>
        <p>Connecting your security and IT systems for seamless operations.</p>
      </div>
      <div class="card">
        <h3>Software Testing</h3>
        <p>Ensuring reliability and performance for all security-related software.</p>
      </div>
      <div class="card">
        <h3>Network Setup</h3>
        <p>Strong wired and wireless network solutions for business environments.</p>
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer>
    © 2025 Cathexis Tech
  </footer>

</body>
</html>


