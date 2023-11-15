// logout
document.getElementById('logout').addEventListener('click', () => {
   window.location.href = 'index.html';
})

// deposit
document.getElementById('depositBtn').addEventListener('click', () => {

   // depositField
   const depositField = document.getElementById('depositField');
   const currentDepositAmountString = depositField.value;
   const currentDepositAmount = parseFloat(currentDepositAmountString);

   // depositNumber
   const depositNumber = document.getElementById('depositNumber');
   const perviousTotalDepositString = depositNumber.innerText;
   const perviousTotalDeposit = parseFloat(perviousTotalDepositString);
   const currentDepositTotal = currentDepositAmount + perviousTotalDeposit;

   depositNumber.innerText = currentDepositTotal;

   // blanceNumber
   const blanceNumberString = document.getElementById('blanceNumber');
   const blanceNumberTotal = blanceNumberString.innerText;
   const blanceNumber = parseFloat(blanceNumberTotal);
   const newBlance = blanceNumber + currentDepositAmount;

   blanceNumberString.innerText = newBlance;


   // depositField empty
   depositField.value = '';


})