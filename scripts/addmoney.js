export function getBalance() {
    return parseInt(localStorage.getItem("availableBalance")) || 0;
}

export function setBalance(amount) {
    localStorage.setItem("availableBalance", amount);
}

export function inputNumber(id) {
    const inputField = elementId(id);
    const inputFieldValue = inputField.value;
    const inputFieldNumber = parseInt(inputFieldValue);
    console.log(inputFieldNumber);
    return inputFieldNumber;
}

export function elementId(id) {
    return document.getElementById(id);
}

const addMoneyForm = elementId('addMoneyForm');
const selectBank = elementId('selectBank');
const availableBalance = elementId('availableBalance');

availableBalance.innerText = getBalance();

addMoneyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const bank = selectBank.value;
    const account = inputNumber('accountNumber');
    const amount = inputNumber('addAmount');
    const pin = inputNumber('pinNumber');

    const tempAccount = 19222222222;
    const tempPin = 1234;

    if (bank === "") {
        alert("Please select a valid Bank!");
    }
    else if (account !== tempAccount) {
        alert("Please provide a valid Account Number!");
    }
    else if (pin !== tempPin) {
        alert("Please provide a valid Pin Number!");
    }
    else {
        const totalBalance = parseInt(availableBalance.innerText) + amount;

        availableBalance.innerText = totalBalance;

        setBalance(totalBalance);

        addMoneyForm.reset();
    }

});

///**** Toggle ****///
document.querySelectorAll(".toggle-btn").forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll(".toggle-btn").forEach(active => {
            active.classList.remove("bg-[#0874F2]/5");
            active.classList.remove("border-[#0874F2]")
            active.classList.add("border-[#080808]/10");
        });

        link.classList.remove("border-[#080808]/10");

        link.classList.add("border-[#0874F2]");
        link.classList.add("bg-[#0874F2]/5");

        const targetId = link.dataset.target;
        // console.log(link.id)

        document.querySelectorAll(".toggle-panel").forEach(panel => {
            panel.style.display = panel.id === targetId ? "block" : "none";
        });
    });
});