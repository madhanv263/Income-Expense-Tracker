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

  // Header and Main Content
  const headerAndMainContent = `
    <header>
      <h1>Income and Expense Table</h1>
      <p>Track your earnings and spending effortlessly with our Income and Expense Tracker, your ultimate tool for budgeting and financial planning.</p>
    </header>
    <main>
      <section class="tracker-table">
        <div class="table-container">
          <h3>Income Range and Associated Categories (INR)</h3>
          <table>
            <thead>
              <tr>
                <th>Income Range</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>₹0 - ₹50,000</td>
                <td>Entry-level jobs, small freelance projects</td>
              </tr>
              <tr>
                <td>₹50,001 - ₹1,00,000</td>
                <td>Junior to mid-level positions, larger freelance projects</td>
              </tr>
              <tr>
                <td>₹1,00,001 - ₹3,00,000</td>
                <td>Mid-level positions, managerial roles</td>
              </tr>
              <tr>
                <td>Above ₹3,00,000</td>
                <td>Senior roles, high-income professions, significant investments</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="table-container">
          <h3>Expense Categories and Typical Costs (INR)</h3>
          <table>
            <thead>
              <tr>
                <th>Expense Category</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Rent/Mortgage</td>
                <td>Monthly payment for housing</td>
              </tr>
              <tr>
                <td>Utilities</td>
                <td>Electricity, water, gas, and other services</td>
              </tr>
              <tr>
                <td>Groceries</td>
                <td>Food and household supplies</td>
              </tr>
              <tr>
                <td>Transportation</td>
                <td>Car payments, public transport</td>
              </tr>
              <tr>
                <td>Entertainment</td>
                <td>Dining out, movies, hobbies</td>
              </tr>
              <tr>
                <td>Health & Insurance</td>
                <td>Medical expenses, health insurance</td>
              </tr>
              <tr>
                <td>Savings & Investments</td>
                <td>Contributions to savings or investment accounts</td>
              </tr>
              <tr>
                <td>Miscellaneous</td>
                <td>Other occasional or irregular expenses</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
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

  document.body.innerHTML = `
    ${navbar}
    ${headerAndMainContent}
    ${footer}
  `;
});