let descInput = document.getElementById("desc");
let amountInput = document.getElementById("amount");
let addBtn = document.getElementById("add-btn");
let expenseList = document.getElementById("expense-list");
let totalSpan = document.getElementById("total");

let total = 0;

addBtn.addEventListener("click", function () {
  let desc = descInput.value.trim();
  let amount = parseFloat(amountInput.value);

  if (desc === "" || isNaN(amount)) {
    alert("Please enter valid description and amount.");
    return;
  }

  let li = document.createElement("li");
  li.innerHTML = `
    ${desc}: ${amount} PKR 
    <button class="delete-btn">Delete</button>
  `;

  expenseList.appendChild(li);

  total += amount;
  updateTotal();

  let deleteBtn = li.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", function () {
    total -= amount;
    updateTotal();
    li.remove();
  });

  descInput.value = "";
  amountInput.value = "";
});

function updateTotal() {
  totalSpan.textContent = total.toFixed(2);
}