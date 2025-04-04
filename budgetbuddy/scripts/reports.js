const reportTotalEl = document.getElementById("report-total");
const categorySummaryEl = document.getElementById("category-summary");

// Simulated expenses from localStorage (shared across budget.html)
const expenses = JSON.parse(localStorage.getItem("budgetBuddyExpenses")) || [];

function calculateReports(expenses) {
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);
  reportTotalEl.textContent = total.toFixed(2);

  const categoryTotals = {};
  expenses.forEach((item) => {
    categoryTotals[item.category] = (categoryTotals[item.category] || 0) + item.amount;
  });

  categorySummaryEl.innerHTML = "";
  Object.entries(categoryTotals).forEach(([cat, amt]) => {
    const p = document.createElement("p");
    p.textContent = `${cat.charAt(0).toUpperCase() + cat.slice(1)}: $${amt.toFixed(2)}`;
    categorySummaryEl.appendChild(p);
  });
}

calculateReports(expenses);