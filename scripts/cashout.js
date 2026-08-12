import { getBalance, setBalance, inputNumber, elementId } from "./addmoney.js";

const withMoneyForm = elementId('withMoneyForm');
const withAmount = elementId('withAmount');

withMoneyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const agentNumber = inputNumber('withNumber');
    const withamount = inputNumber('withAmount');
    const withPin = inputNumber('withPinNum');

    const tempWithAccount = 19222222222;
    const tempWithPin = 1234;

    if (agentNumber !== tempWithAccount) {
        alert("Please provide a valid Agent Account Number!");
    }
    else if (withPin !== tempWithPin) {
        alert("Please provide a valid Pin Number!");
    }
    else {
        const newBalance = getBalance() - withamount;
        setBalance(newBalance);

        elementId('availableBalance').innerText = newBalance;

        withMoneyForm.reset();
    }
});