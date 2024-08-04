document.addEventListener("DOMContentLoaded", function() {
  // Navbar
  const navbar = `
      <nav class="navbar">
          <div class="left-section">
              <img src="images/coin.png" alt="">
          </div>
          <div class="right-section">
              <ul>
                  <li><a href="index.html">Home</a></li>
                  <li><a href="budget.html">Income/Expenses</a></li>
                  <li><a href="table.html">Table</a></li>
                  <li><a href="financial.html">Financial Study</a></li>
              </ul>
          </div>
      </nav>
      <hr>
  `;

  // Header
  const header = `
      <header class="header">
          <div class="header-image">
              <img src="images/header.jpg" alt="">
          </div>
          <div class="header-section">
              <h1 class="header-text">
                  Welcome to Techniques for Managing Income and Expenses.
              </h1>
              <h4>Make Plan, Save Money</h4>
              <p class="header-pg">
                  Welcome to our comprehensive guide on managing your income and expenses. Our goal is to provide you with the knowledge and tools you need to take control of your finances and achieve your financial goals. Explore our resources and start managing your budget more effectively today.
              </p>
          </div>
      </header>
  `;

  // Main Content
  const mainContent = `
      <h1 class="main-text">Income & Expense Tips</h1>
      <main>
          <div class="main">
              <div class="main-container">
                  <div class="img-section">
                      <img src="images/image1.avif" alt="Budgeting Image">
                  </div>
                  <div class="main-section">
                      <p><span>Create a Budget:</span>
                          Track your income and expenses using apps or spreadsheets. Set spending limits for categories like groceries and entertainment, and review your budget regularly to find savings opportunities.
                      </p>
                  </div>
              </div>
          </div>
          <div class="main">
              <div class="main-container">
                  <div class="img-section">
                      <img src="images/image2.avif" alt="Budgeting Image">
                  </div>
                  <div class="main-section">
                      <p><span>Cook at Home:</span>
                          Plan weekly meals and cook at home to save money. Batch cook and use leftovers creatively to reduce waste, and buy staples in bulk to cut grocery costs.
                      </p>
                  </div>
              </div>
          </div>
          <div class="main">
              <div class="main-container">
                  <div class="img-section">
                      <img src="images/image3.avif" alt="Budgeting Image">
                  </div>
                  <div class="main-section">
                      <p><span>Use Public Transportation:</span>
                          Cut commuting costs by using public transport, carpooling, or biking. For short trips, walk to save money and boost your health. Consider combining errands to reduce travel.
                      </p>
                  </div>
              </div>
          </div>
          <div class="main">
              <div class="main-container">
                  <div class="img-section">
                      <img src="images/image4.avif" alt="Budgeting Image">
                  </div>
                  <div class="main-section">
                      <p><span>Cancel Unused Subscriptions:</span>
                          Review and cancel unused subscriptions. Use free alternatives, negotiate for better deals, and set reminders to revisit your subscriptions regularly.
                      </p>
                  </div>
              </div>
          </div>
          <div class="main">
              <div class="main-container">
                  <div class="img-section">
                      <img src="images/image5.avif" alt="Budgeting Image">
                  </div>
                  <div class="main-section">
                      <p><span>Shop Smart:</span>
                          Save more by using coupons, choosing store brands, comparing prices, sticking to your shopping list, and taking advantage of cashback offers.
                      </p>
                  </div>
              </div>
          </div>
          <!-- Bonus Section -->
          <div class="bonus-container">
              <h1>Bonus Tips</h1>
              <ul>
                  <li>
                      Create an emergency fund to cover unexpected expenses and avoid debt. Regularly review and adjust your budget to stay aligned with your financial goals.
                  </li>
                  <li>
                      Automate savings and bill payments to ensure consistency and avoid late fees. Track your spending with apps to identify and eliminate unnecessary expenses.
                  </li>
              </ul>
              <img src="images/money.png" alt="">
          </div>
          <!-- Start Today -->
          <div class="start-today">
              <h1>Start Saving Today</h1>
              <p>
                  Start saving now by using these strategies and tools to reduce your expenses. Even small adjustments can lead to significant savings. Let's work together to enhance your financial efficiency and manage your budget better.
              </p>
          </div>
      </main>
  `;

  // Footer
  const footer = `
      <footer id="contact" class="contact-section">
          <div class="contact-container">
              <div class="footer-section">
                  <img src="images/coin.png" alt="">
              </div>
              <h2 class="contact-title">Contact</h2>
              <ul>
                  <li><i class="fab fa-linkedin social-icons"></i><a href="https://www.linkedin.com/in/madhankumarv24/" target="_blank">LinkedIn</a></li>
                  <li><i class="fab fa-instagram social-icons"></i><a href="https://www.instagram.com/madhan_kumar.__?igsh=M3ZrN3ltMjJmemRt" target="_blank">Instagram</a></li>
                  <li><i class="fas fa-envelope social-icons"></i><a href="mailto:madhanv263@gmail.com?subject=Hello&body=Hi%20there,%0A%0AHow%20are%20you?">Email</a></li>
                  <li><i class="fab fa-whatsapp social-icons"></i><a href="https://wa.me/qr/AWJZMX34OF6RE1" target="_blank">WhatsApp</a></li>
              </ul>
              <p>Feel free to contact me through social media or email</p>
          </div>
      </footer>
      <p class="copy-right">Copyright 2024. All rights reserved.</p>
  `;

  // Inject HTML into the document
  document.body.innerHTML = `
      ${navbar}
      ${header}
      ${mainContent}
      ${footer}
  `;
});
