function getInputValue() {
    const depositInput = document.getElementById('deposite-input');
    const depositInputAmountText = depositInput.value;
    const newDepositInputAmount = parseFloat(depositInputAmountText);
    depositInput.value = '';

    return newDepositInputAmount;
}





document.getElementById('deposite-button').addEventListener('click', function () {
    /*     const depositInput = document.getElementById('deposite-input');
        const depositInputAmountText = depositInput.value;
        const newDepositInputAmount = parseFloat(depositInputAmountText); */

    const newDepositInputAmount = getInputValue();

    const totalDepositBalance = document.getElementById('deposite-total');
    const previousDepositBalanceText = totalDepositBalance.innerText;
    const previousDepositBalance = parseFloat(previousDepositBalanceText);

    const totalDepositBalanceAmount = previousDepositBalance + newDepositInputAmount;

    totalDepositBalance.innerText = totalDepositBalanceAmount;


    // upadate account balance

    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalText);
    const totalBalanceAmount = previousBalanceTotal + newDepositInputAmount;
    balanceTotal.innerText = totalBalanceAmount;


});

document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputAmountText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputAmountText);


    const withdrawTotal = document.getElementById('withdraw-total');
    const withdrawTotalAmountText = withdrawTotal.innerText;
    const withdrawTotalAmount = parseFloat(withdrawTotalAmountText);

    const newWithdrawAmount = withdrawInputAmount + withdrawTotalAmount;
    withdrawTotal.innerText = newWithdrawAmount;


    // update total balance
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceAmountText = totalBalance.innerText;
    const totalBalanceAmount = parseFloat(totalBalanceAmountText);
    const newTotalBalanceAmount = totalBalanceAmount - withdrawInputAmount;
    totalBalance.innerText = newTotalBalanceAmount;

    withdrawInput.value = '';
});