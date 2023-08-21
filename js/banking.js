function getInputValue(inputId) {
  const inputField = document.getElementById(inputId);
  const inputAmountText = inputField.value;
  const amountValue = parseFloat(inputAmountText);
  inputField.value = '';
  return amountValue;
}
function updateTotalField(totalFieldId, amount) {
  const totalElement = document.getElementById(totalFieldId);
  const previousAmountText = totalElement.innerText;
  const previuosAmount = parseFloat(previousAmountText);
  const newTotal = previuosAmount + amount;
  totalElement.innerText = newTotal;

}
function getCurrentBalance() {
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  return previousBalanceTotal;
}

function updateBalance(newDepositAmount, isAdd) {
  const balanceTotal = document.getElementById('balance-total');

  const previousBalanceTotal = getCurrentBalance();
  if (isAdd == true) {
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
  }
  else {
    const newBalanceTotal = previousBalanceTotal - newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
  }


}

document.getElementById('deposite-button').addEventListener('click', function () {

  /*   //get Amount deposited
    const depositInput = document.getElementById('deposite-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText); */
  const newDepositAmount = getInputValue('deposite-input');
  if (newDepositAmount > 0) {
    updateTotalField('deposite-total', newDepositAmount);
    updateBalance(newDepositAmount, true);



  }


  //update deposite toatal
  /* const depositTotal = document.getElementById('deposite-total');
  const previousDepositAmountText = depositTotal.innerText;
  const previuosDepositAmount = parseFloat(previousDepositAmountText);
  const newDepositTotal = previuosDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal; */


  //update account balance
  /*   const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal; */


  /*  //clear the deposite input field
   depositInput.value = ''; */


});



// handle withdraw handler

document.getElementById('withdraw-button').addEventListener('click', function () {


  /*  const withdrawInput = document.getElementById('withdraw-input');
   const withdrawAmountText = withdrawInput.value;
 
   const newWithdrawAmount = parseFloat(withdrawAmountText);
   */
  const newWithdrawAmount = getInputValue('withdraw-input');
  const currentBalance = getCurrentBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
    updateTotalField('withdraw-total', newWithdrawAmount);
    updateBalance(newWithdrawAmount, false)
  }

  /*   //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previuosWithdrawText = withdrawTotal.innerText;
    const previuosWithdrawAmount = parseFloat(previuosWithdrawText);
  
    const newWithdrawTotal = newWithdrawAmount + previuosWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;
   */

  /* // upadate account balnce
  const banlanceTotal = document.getElementById('balance-total');

  const previousBalanceAmountText = banlanceTotal.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceAmountText);
  const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
  banlanceTotal.innerText = newBalanceTotal; */


  /*   // clear withdraw input
    withdrawInput.value = ''; */








});