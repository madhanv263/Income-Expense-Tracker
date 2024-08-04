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
            <h1 class="tracker-heading">Income and Expenses Tracker</h1>
            <p>
                Track your income and expenses easily with our tool. Stay on top of your finances by monitoring your spending and savings.
            </p>
        </header>
        <main class="main-container">
            <div class="tracker-container">
                <div class="column">
                    <h2>Income</h2>
                    <input type="number" id="incomeField" placeholder="Enter income amount">
                    <button onclick="addIncome()">Add Income</button>
                    <button id="editIncomeButton">Edit Income</button>
                    <p>Total Income: <span id="incomeTotal">0</span></p>
                </div>
                <div class="column">
                    <h2>Expenses</h2>
                    <input type="text" id="expenseDescriptionField" placeholder="Enter expense description">
                    <input type="number" id="expenseAmountField" placeholder="Enter expense amount">
                    <button onclick="addExpense()">Add Expense</button>
                    <ul id="expenseList"></ul>
                    <p>Total Expenses: <span id="expenseTotal">0</span></p>
                    <button onclick="removeAllExpenses()">Clear Expenses</button>
                </div>
                <div class="column">
                    <h2>Balance</h2>
                    <p>Remaining Balance: <span id="balanceTotal">0</span></p>
                </div>
            </div>
        </main>
        <div class="instructions">
            <h3>How to Use:</h3>
            <ol>
                <li>Enter your income amount and click "Add Income" to update your total income.</li>
                <li>Enter the description and amount for each expense, then click "Add Expense" to record it.</li>
                <li>Click "Clear Expenses" to remove all recorded expenses and update the remaining balance.</li>
            </ol>
        </div>
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
  