import { getBalance, setBalance, inputNumber, elementId } from "./addmoney.js";

let allTransactions = JSON.parse(localStorage.getItem('allTransactions')) || [];

function setTransactionToLocalStore() {
    localStorage.setItem('allTransactions', JSON.stringify(allTransactions));
}

export function addTransaction(type, amount) {
    const icon = (type === 'Add Money' || type === 'Get Bonus') ? "↓" : "↑";
    const date = new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    const transaction = {
        id: Date.now(),
        icon: icon,
        type: type,
        date: date,
        amount: amount,
    };

    allTransactions.push(transaction);
    setTransactionToLocalStore();
    showAllTransactions();
}

function createItem(item) {
    return document.createElement(item);
}

function updateList(transaction) {
    // createElement;
    const itemEl = createItem('li');
    const iconEl = createItem('div');
    const detailsEl = createItem('div');
    const typeEl = createItem('div');
    const dateEl = createItem('div');
    const amountEl = createItem('div');
    const deleteEl = createItem('button');

    // add classlist;
    itemEl.classList.add('flex', 'items-center', 'gap-4', 'px-4', 'py-3', 'mb-3', 'bg-white', 'rounded-xl');

    iconEl.classList.add('flex', 'items-center', 'justify-center', 'w-10', 'h-10', 'rounded-full', 'bg-[#0874F2]/20', 'text-[#0874F2]', 'text-2xl');

    detailsEl.classList.add('flex-1');

    typeEl.classList.add('text-sm', 'font-semibold', 'text-[#080808]/70');

    dateEl.classList.add('text-[12px]', 'text-[#080808]/70', 'mt-1');

    amountEl.classList.add('font-bold', 'text-green-600');

    deleteEl.classList.add('p-2', 'text-[#080808]/70', 'hover:text-red-500', 'hover:bg-red-50', 'rounded-lg', 'cursor-pointer');

    // set value;

    iconEl.innerText = transaction.icon;

    typeEl.innerText = transaction.type;

    dateEl.innerText = transaction.date;

    amountEl.innerText = "$" + transaction.amount;

    deleteEl.innerHTML = '<i class="fa-solid fa-trash-can"></i>';

    deleteEl.addEventListener("click", () => {
        deleteTransaction(transaction.id);
    });

    // append child;
    detailsEl.appendChild(typeEl);
    detailsEl.appendChild(dateEl);
    itemEl.appendChild(iconEl);
    itemEl.appendChild(detailsEl);
    itemEl.appendChild(amountEl);
    itemEl.appendChild(deleteEl);

    // prepend; --> insert first;
    elementId('transactionList').prepend(itemEl);
}

function showAllTransactions() {
    elementId('transactionList').innerHTML = '';

    allTransactions.forEach(singleTransaction => {
        updateList(singleTransaction);
    });
}

function deleteTransaction(id) {
    allTransactions = allTransactions.filter(t => t.id !== id);
    setTransactionToLocalStore();
    showAllTransactions();
}

showAllTransactions();