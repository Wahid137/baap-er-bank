function getInputValue() {
  const depositInput = document.getElementById('deposite-input');
  const depositAmountText = depositInput.value;
  const newDepositAmount = parseFloat(depositAmountText);
  depositInput.value = '';
  return newDepositAmount;
}

document.getElementById('deposite-button').addEventListener('click', function () {

  /*   //get Amount deposited
    const depositInput = document.getElementById('deposite-input');
    const depositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(depositAmountText); */
  const newDepositAmount = getInputValue();


  //update deposite toatal
  const depositTotal = document.getElementById('deposite-total');
  const previousDepositAmountText = depositTotal.innerText;
  const previuosDepositAmount = parseFloat(previousDepositAmountText);
  const newDepositTotal = previuosDepositAmount + newDepositAmount;
  depositTotal.innerText = newDepositTotal;

  //update account balance
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;


  //clear the deposite input field
  depositInput.value = '';


});



// handle withdraw handler

document.getElementById('withdraw-button').addEventListener('click', function () {


  const withdrawInput = document.getElementById('withdraw-input');
  const withdrawAmountText = withdrawInput.value;

  const newWithdrawAmount = parseFloat(withdrawAmountText);
  // console.log(newWithdrawAmount);

  //set withdraw total
  const withdrawTotal = document.getElementById('withdraw-total');
  const previuosWithdrawText = withdrawTotal.innerText;
  const previuosWithdrawAmount = parseFloat(previuosWithdrawText);

  const newWithdrawTotal = newWithdrawAmount + previuosWithdrawAmount;
  withdrawTotal.innerText = newWithdrawTotal;


  // upadate account balnce
  const banlanceTotal = document.getElementById('balance-total');

  const previousBalanceAmountText = banlanceTotal.innerText;
  const previousBalanceAmount = parseFloat(previousBalanceAmountText);
  const newBalanceTotal = previousBalanceAmount - newWithdrawAmount;
  banlanceTotal.innerText = newBalanceTotal;


  // clear withdraw input
  withdrawInput.value = '';








});