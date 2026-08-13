import { availableBalance, elementId, getBalance, inputNumber, setBalance, tempAccount, tempPin } from "./addmoney.js";
import { addTransaction } from "./transactions.js";

const transferMoneyForm = elementId('transferMoneyForm');
const isEmptyInput = document.querySelectorAll('.input');

transferMoneyForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const transfernumber = inputNumber('transferNumber');
    const transferMoneyAmount = inputNumber('transferAmount');
    console.log(transferMoneyAmount.value);
    const transferpin = inputNumber('transferPinNum');

    if (transfernumber !== tempAccount) {
        alert("Please provide a valid User Account Number!");
    }
    else if (isNaN(transferMoneyAmount) || transferMoneyAmount < 1) {
        alert('Please provide a valid Amount!')
    }
    else if (transferpin !== tempPin) {
        alert("Please provide a valid Pin Number!");
    }
    else {
        const newBalanceAfterTransfer = getBalance() - transferMoneyAmount;

        availableBalance.innerText = newBalanceAfterTransfer;

        setBalance(newBalanceAfterTransfer);

        // transfer type and amount
        const typeTransfer = elementId('transferTransaction').innerText;

        addTransaction(typeTransfer, transferMoneyAmount);

        transferMoneyForm.reset();
    }
});
