import { getBalance, setBalance, inputNumber, elementId, tempAccount, tempPin, availableBalance } from "./addmoney.js";
import { addTransaction } from "./transactions.js";

const withMoneyForm = elementId('withMoneyForm');

withMoneyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const agentNumber = inputNumber('withNumber');
    const withamount = inputNumber('withAmount');
    const withPin = inputNumber('withPinNum');

    if (agentNumber !== tempAccount) {
        alert("Please provide a valid Agent Account Number!");
    }
    else if (withPin !== tempPin) {
        alert("Please provide a valid Pin Number!");
    }
    else {
        const newBalanceAfterCashout = getBalance() - withamount;

        availableBalance.innerText = newBalanceAfterCashout;

        setBalance(newBalanceAfterCashout);

        // with type and amount;
        const typeWith = elementId('withTransaction').innerText;

        addTransaction(typeWith, withamount);

        withMoneyForm.reset();
    }
});