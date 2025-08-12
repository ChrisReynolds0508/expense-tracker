const expenses = []; 

const savedExpenses = localStorage.getItem('expenses');
if (savedExpenses) {
  expenses.push(...JSON.parse(savedExpenses));
}
renderExpenses();

const form = document.querySelector('form'); 

form.addEventListener('submit', function(event){
    event.preventDefault();
    const amount = document.getElementById('amount').value;
     const  category = document.getElementById('category').value;
      const description = document.getElementById('description').value;
       const date = document.getElementById('date').value;

    const expense = {
        amount:amount,
        category:category,
        description:description,
        date:date
    };
    expenses.push(expense)
    localStorage.setItem('expenses', JSON.stringify(expenses));
    renderExpenses();
})

function renderExpenses(){
    const container = document.getElementById('expenses-list');
     container.innerHTML = '';
     const title = document.createElement('h2');
     title.textContent = 'Expenses';
     container.appendChild(title)
 
    const table = document.createElement('table');
    const thead = document.createElement('thead');
    thead.innerHTML = `
    <tr>
    <th>Date</th>
    <th>Category</th>
    <th>Amount</th>
    <th>Description</th>
    </tr>`;
    table.appendChild(thead);

    const tbody = document.createElement('tbody');

    expenses.forEach(expense => {
        const row = document.createElement('tr');

        row.innerHTML = `
        <td>${expense.date}</td>
        <td>${expense.category}</td>
        <td>${expense.amount}</td>
        <td>${expense.description}</td>`

        tbody.appendChild(row)
    })
   table.appendChild(tbody);
   container.appendChild(table)
}

function calculateTotal(){

}



