
document.addEventListener('DOMContentLoaded', () => {
    const incomeField = document.getElementById('incomeField');
    const expenseDescriptionField = document.getElementById('expenseDescriptionField');
    const expenseAmountField = document.getElementById('expenseAmountField');
    const incomeTotalEl = document.getElementById('incomeTotal');
    const expenseTotalEl = document.getElementById('expenseTotal');
    const balanceTotalEl = document.getElementById('balanceTotal');
    const expenseList = document.getElementById('expenseList');
    const editIncomeButton = document.getElementById('editIncomeButton');
  
    let totalIncome = parseFloat(localStorage.getItem('totalIncome')) || 0;
    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
  
    function updateUI() {
        let totalExpenses = expenses.reduce((sum, expense) => sum + parseFloat(expense.amount), 0);
        let remainingBalance = totalIncome - totalExpenses;
  
        incomeTotalEl.textContent = `$${totalIncome.toFixed(2)}`;
        expenseTotalEl.textContent = `$${totalExpenses.toFixed(2)}`;
        balanceTotalEl.textContent = `$${remainingBalance.toFixed(2)}`;
  
        expenseList.innerHTML = '';
        expenses.forEach((expense, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                ${expense.description}: $${expense.amount}
                <button class="delete-btn" data-index="${index}">Delete</button>
            `;
            expenseList.appendChild(li);
        });
    }
  
    function addIncome() {
        let incomeAmount = parseFloat(incomeField.value);
        if (!isNaN(incomeAmount) && incomeAmount > 0) {
            totalIncome += incomeAmount;
            localStorage.setItem('totalIncome', totalIncome);
            incomeField.value = '';
            updateUI();
        }
    }
  
    function editIncome() {
        let incomeAmount = parseFloat(incomeField.value);
        if (!isNaN(incomeAmount) && incomeAmount > 0) {
            totalIncome = incomeAmount;
            localStorage.setItem('totalIncome', totalIncome);
            incomeField.value = '';
            updateUI();
        }
    }
  
    function addExpense() {
        let description = expenseDescriptionField.value.trim();
        let amount = parseFloat(expenseAmountField.value);
        if (description && !isNaN(amount) && amount > 0) {
            expenses.push({ description, amount });
            localStorage.setItem('expenses', JSON.stringify(expenses));
            expenseDescriptionField.value = '';
            expenseAmountField.value = '';
            updateUI();
        }
    }
  
    function removeAllExpenses() {
        expenses = [];
        localStorage.setItem('expenses', JSON.stringify(expenses));
        updateUI();
    }
  
    document.querySelector('button[onclick="addIncome()"]').addEventListener('click', addIncome);
    editIncomeButton.addEventListener('click', editIncome);
    document.querySelector('button[onclick="addExpense()"]').addEventListener('click', addExpense);
    document.querySelector('button[onclick="removeAllExpenses()"]').addEventListener('click', removeAllExpenses);
  
    expenseList.addEventListener('click', (event) => {
        if (event.target.classList.contains('delete-btn')) {
            const index = event.target.getAttribute('data-index');
            expenses.splice(index, 1);
            localStorage.setItem('expenses', JSON.stringify(expenses));
            updateUI();
        }
    });
  
    updateUI();
  });