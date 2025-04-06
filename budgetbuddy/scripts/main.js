document.addEventListener("DOMContentLoaded", () => {
  const expenseList = document.getElementById('expense-list');
  const totalEl = document.getElementById('total');
  const entryForm = document.getElementById('entry-form');

  // Exit if not on a page with the budget tracker
  if (!entryForm || !expenseList || !totalEl) return;

  let expenses = JSON.parse(localStorage.getItem("budgetBuddyExpenses")) || [];

  function updateTotal() {
    const total = expenses.reduce((sum, item) => sum + item.amount, 0);
    totalEl.textContent = total.toFixed(2);
  }

  function renderExpenses() {
    expenseList.innerHTML = '';
    expenses.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.description} - $${item.amount.toFixed(2)} (${item.category})`;
      
      const delBtn = document.createElement('button');
      delBtn.textContent = 'X';
      delBtn.onclick = () => {
        expenses.splice(index, 1);
        localStorage.setItem("budgetBuddyExpenses", JSON.stringify(expenses));
        renderExpenses();
        updateTotal();
      };
      
      li.appendChild(delBtn);
      expenseList.appendChild(li);
    });
  }

  entryForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value);
    const category = document.getElementById('category').value;

    if (!description || isNaN(amount)) {
      alert('Please enter valid description and amount.');
      return;
    }

    expenses.push({ description, amount, category });
    localStorage.setItem("budgetBuddyExpenses", JSON.stringify(expenses));
    renderExpenses();
    updateTotal();
    this.reset();
  });

  renderExpenses();
  updateTotal();
});
