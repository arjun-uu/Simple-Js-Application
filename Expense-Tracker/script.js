document.addEventListener('DOMContentLoaded', () => {

    const expenseForm = document.getElementById("expense-form");
    const expenseName = document.getElementById("expense-name");
    const expenseAmount = document.getElementById("expense-amount");
    const expenseList = document.getElementById("expense-list");
    const totalAmountDisplay = document.getElementById("total-amount");

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [];

    // calculate total
    function calculateTotal() {
        return expenses.reduce((sum, expense) => sum + expense.amount, 0);
    }

    // update total in UI
    function updateTotal() {
        const total = calculateTotal();
        totalAmountDisplay.textContent = total.toFixed(2);
    }

    // save in local storage
    function saveExpensesToLocal() {
        localStorage.setItem('expenses', JSON.stringify(expenses));
    }

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value.trim());

        if (name !== "" && !isNaN(amount) && amount > 0) {
            const newExpense = {
                id: Date.now(),
                name: name,
                amount: amount
            };

            expenses.push(newExpense);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

            // clear input
            expenseName.value = "";
            expenseAmount.value = "";
        }
    });

    function renderExpenses() {
        expenseList.innerHTML = "";
        expenses.forEach((expense) => {
            const li = document.createElement("li");
            li.innerHTML = `${expense.name}- ${expense.amount}
          <button data-id = "${expense.id}">delete</button>`

            expenseList.appendChild(li);

        })
    }

    expenseList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const expenseId = parseInt(e.target.getAttribute('data-id'));
            expenses = expenses.filter(expense => expense.id != expenseId);
            saveExpensesToLocal();
            renderExpenses();
            updateTotal();

        }
    })

});
