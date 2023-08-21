function getInputValue(InputId) {
    const inputAmount = document.getElementById(InputId);
    const inputAmountText = inputAmount.value;
    const inputAmountValue = parseFloat(inputAmountText);
    inputAmount.value = '';
    return inputAmountValue;
}
function totalElement(totalFieldId, newInputAmount) {
    const previousAmount = document.getElementById(totalFieldId);
    const previousAmountText = previousAmount.innerText;
    const previousTotalAmount = parseFloat(previousAmountText);
    const newTotalAmount = previousTotalAmount + newInputAmount;
    previousAmount.innerText = newTotalAmount;
}
function getCurrentBalance() {
    const pickCurrentBalance = document.getElementById('balance-total');
    const currentBalanceText = pickCurrentBalance.innerText;
    const previousCurrentBalance = parseFloat(currentBalanceText);
    return previousCurrentBalance;

}

function updateTotalBalance(inputAmounType, issAdd) {
    const pickCurrentBalance = document.getElementById('balance-total');

    const previousTotalCurrentBalance = getCurrentBalance();
    if (issAdd == true) {
        const newTotal = previousTotalCurrentBalance + inputAmounType;
        pickCurrentBalance.innerText = newTotal;
    }
    else {
        const newTotal = previousTotalCurrentBalance - inputAmounType;
        pickCurrentBalance.innerText = newTotal;
    }

}



document.getElementById('deposite-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposite-input');
    if (newDepositAmount > 0) {
        totalElement('deposite-total', newDepositAmount);
        updateTotalBalance(newDepositAmount, true);
    }

});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (newWithdrawAmount > 0 && currentBalance > newWithdrawAmount) {
        totalElement('withdraw-total', newWithdrawAmount);
        updateTotalBalance(newWithdrawAmount, false);

    }


});