import { addTransaction } from './transactions.js';

export function getBalance() {
    return parseInt(localStorage.getItem('availableBalance')) || 0;
}

export function setBalance(amount) {
    localStorage.setItem('availableBalance', amount);
}

export function inputNumber(id) {
    const inputField = elementId(id);
    const inputFieldValue = inputField.value;
    const inputFieldNumber = parseInt(inputFieldValue);

    return inputFieldNumber;
}

export function elementId(id) {
    return document.getElementById(id);
}

const addMoneyForm = elementId('addMoneyForm');
const selectBank = elementId('selectBank');
export const availableBalance = elementId('availableBalance');

availableBalance.innerText = getBalance();

export const tempAccount = 19222222222;
export const tempPin = 1234;

addMoneyForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const bank = selectBank.value;
    const account = inputNumber('accountNumber');
    const amount = inputNumber('addAmount');
    const pin = inputNumber('pinNumber');

    if (bank === '') {
        alert('Please select a valid Bank!');
    }
    else if (account !== tempAccount) {
        alert('Please provide a valid Account Number!');
    }
    else if (isNaN(amount) || amount < 1) {
        alert('Please provide a valid Amount!')
    }
    else if (pin !== tempPin) {
        alert('Please provide a valid Pin Number!');
    }
    else {
        const totalBalance = parseInt(availableBalance.innerText) + amount;

        availableBalance.innerText = totalBalance;

        setBalance(totalBalance);

        const typeAddMoney = elementId('addMoneyTransaction').innerText;
        addTransaction(typeAddMoney, amount);

        addMoneyForm.reset();
    }

});

///****---- Toggle ----****///
document.querySelectorAll('.toggle-btn').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll('.toggle-btn').forEach(active => {
            active.classList.remove('bg-[#0874F2]/5');
            active.classList.remove('border-[#0874F2]')
            active.classList.add('border-[#080808]/10');
        });

        link.classList.remove('border-[#080808]/10');

        link.classList.add('border-[#0874F2]', 'bg-[#0874F2]/5');

        const targetId = link.dataset.target;
        // console.log(link.id)

        document.querySelectorAll('.toggle-panel').forEach(panel => {
            panel.style.display = panel.id === targetId ? 'block' : 'none';
        });
    });
});



///****---- Log Out ----****///
const authBtn = document.getElementById('auth-btn');

authBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if (authBtn.classList.contains('logged-in')) {
        authBtn.classList.remove('logged-in');
        window.location.href = 'index.html';
    } else {
        authBtn.classList.add('logged-in');
        authBtn.innerText = 'Log In';
    }
});
