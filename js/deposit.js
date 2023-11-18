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
   // depositField empty
   depositField.value = '';
   if (isNaN(currentDepositAmount)) {
      alert('please fill by number!');
      return
   }
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





})