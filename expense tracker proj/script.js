const form = document.getElementById("transaction-form");
const list = document.getElementById("transaction-list");

const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");

const typeSelect = document.getElementById("type");
const categoryButtons = document.getElementById("category-buttons");
let selectedCategory = "Other";

function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

function loadTransactions() {
  const data = localStorage.getItem("transactions");
  return data ? JSON.parse(data) : [];
}

// show/hide buttons based on type
typeSelect.addEventListener("change", () => {
  if (typeSelect.value === "expense") {
    categoryButtons.style.display = "flex"; // visible
  } else {
    categoryButtons.style.display = "none"; // hide for income
    selectedCategory = "Income"; // force category
  }
});

// capture button clicks
document.querySelectorAll(".category-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedCategory = btn.getAttribute("data-category");
    
    // optional: highlight active button
    document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// Format date-time
function formatDateTime(isoString) {
  const date = new Date(isoString);
  return date.toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short"
  });
}

let transactions = loadTransactions();

transactions.forEach(addToUI);
updateSummary();


// Handle form submit
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const description = document.getElementById("description").value.trim();
  const amount = Number(document.getElementById("amount").value);
  const type = document.getElementById("type").value;
  const category = type === "income" ? "Income" : selectedCategory;

  if (!description || amount <= 0) return;

  const transaction = {
    id: Date.now(),
    description,
    amount,
    type,
    category,
    timestamp: new Date().toISOString(),
  };

  transactions.push(transaction);
  saveTransactions();

  addToUI(transaction);
  updateSummary();

  form.reset();
  selectedCategory = "Other";
  document.querySelectorAll(".category-btn").forEach(b => b.classList.remove("active"));
  categoryButtons.style.display = "none";
});

// Add transaction to UI
function addToUI(transaction) {
  const li = document.createElement("li");
  li.classList.add(transaction.type);

  li.innerHTML = `
  <div>
      <div>${transaction.description} (${transaction.category})</div>
      <small style="color:#666;">${formatDateTime(transaction.timestamp)}</small>
    </div>
    <span>${transaction.description} (${transaction.category})</span>
    <span>${transaction.type === "expense" ? "-" : "+"}₹${transaction.amount}</span>
  `;

  list.appendChild(li);
}

// Calculate and update totals
function updateSummary() {
  let income = 0;
  let expense = 0;

  transactions.forEach((t) => {
    if (t.type === "income") {
      income += t.amount;
    } else {
      expense += t.amount;
    }
  });

  const balance = income - expense;

  incomeEl.textContent = `₹${income}`;
  expenseEl.textContent = `₹${expense}`;
  balanceEl.textContent = `₹${balance}`;

  
  balanceEl.style.color = balance < 0 ? "#c53030" : "#2d3748";
}
