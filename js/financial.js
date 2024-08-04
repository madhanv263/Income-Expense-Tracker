document.addEventListener('DOMContentLoaded', function() {
  const navbarHTML = `
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

  const financialStudyHTML = `
      <section id="financial-study" class="financial-study">
          <div class="container">
              <h1>Financial Study</h1>
              <div class="content">
                  <ul>
                      <li><strong>Set Clear Financial Goals</strong>: Establish <span class="highlight">short-term</span> and <span class="highlight">long-term</span> financial objectives to guide your decisions.</li>
                      <li><strong>Create a Budget</strong>: Track your income and expenses to understand where your money is going and <span class="highlight">adjust</span> accordingly.</li>
                      <li><strong>Build an Emergency Fund</strong>: Save <span class="highlight">three to six months'</span> worth of living expenses to cover unexpected costs.</li>
                      <li><strong>Manage Debt Wisely</strong>: Prioritize paying off <span class="highlight">high-interest</span> debt and avoid accumulating new debt.</li>
                      <li><strong>Invest for the Future</strong>: Explore various <span class="highlight">investment options</span> such as stocks, bonds, or mutual funds to grow your wealth.</li>
                      <li><strong>Understand Your Credit Score</strong>: Regularly check your credit report and take steps to <span class="highlight">improve</span> and maintain a good credit score.</li>
                      <li><strong>Plan for Retirement</strong>: Contribute to retirement accounts like <span class="highlight">401(k)</span> or <span class="highlight">IRA</span> to ensure financial security in your later years.</li>
                      <li><strong>Monitor and Adjust</strong>: Regularly review your financial plan and make <span class="highlight">adjustments</span> based on changes in your situation.</li>
                      <li><strong>Seek Professional Advice</strong>: Consult with <span class="highlight">financial advisors</span> for personalized guidance and investment strategies.</li>
                      <li><strong>Educate Yourself</strong>: Stay informed about <span class="highlight">financial trends</span>, tools, and strategies to make well-informed decisions.</li>
                  </ul>
              </div>
          </div>
      </section>
  `;

  const footerHTML = `
      <footer id="contact" class="contact-section">
          <div class="contact-container">
              <div class="footer-section">
                  <img src="images/coin.png" alt="">
              </div>
              <h2 class="contact-title">Contact</h2>
              <ul>
                  <li><i class="fab fa-linkedin social-icons"></i><a href="https://www.linkedin.com/in/madhankumarv24/" target="_blank">Linked In</a></li>
                  <li><i class="fab fa-instagram social-icons"></i><a href=" https://www.instagram.com/madhan_kumar.__?igsh=M3ZrN3ltMjJmemRt" target="_blank">Instagram</a></li>
                  <li><i class="fas fa-envelope social-icons"></i><a href="mailto:madhanv263@gmail.com?subject=Hello&body=Hi%20there,%0A%0AHow%20are%20you?">Email</a></li>
                  <li><i class="fab fa-whatsapp social-icons"></i><a href="https://wa.me/qr/AWJZMX34OF6RE1" target="_blank">WhatsApp</a></li>
              </ul>
              <p>Feel free to contact me through social media or email</p>
          </div>
      </footer>
      <p class="copy-right">Copyright 2024. All rights reserved.</p>
  `;

  document.body.innerHTML = navbarHTML + document.body.innerHTML;
  document.body.innerHTML += financialStudyHTML + footerHTML;
});
