// withdrowBtn
document.getElementById('withdrowBtn').addEventListener('click', function () {
   // withdrowField
   const withdrowField = document.getElementById('withdrowField');
   const withdrowFieldAmountString = withdrowField.value;
   const withdrowAmount = parseFloat(withdrowFieldAmountString);


   // withdrowNumber
   const withdrowNumber = document.getElementById('withdrowNumber');
   const withdrowNumberTolat = withdrowNumber.innerText;
   const withdrowNumberTolatString = parseFloat(withdrowNumberTolat);

   const currentWithdrowTotal = withdrowNumberTolatString + withdrowAmount;
   withdrowNumber.innerText = currentWithdrowTotal;

   // blanceNumber
   const blanceNumber = document.getElementById('blanceNumber');
   const blanceNumberString = blanceNumber.innerText;
   const blanceNumberTotla = parseFloat(blanceNumberString);

   const newBlanceNumber = blanceNumberTotla - withdrowAmount;
   blanceNumber.innerText = newBlanceNumber;

   // withdrowField
   withdrowField.value = '';
})