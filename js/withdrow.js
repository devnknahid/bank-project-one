// withdrowBtn
document.getElementById('withdrowBtn').addEventListener('click', function () {
   // withdrowField
   const withdrowField = document.getElementById('withdrowField');
   const withdrowFieldAmountString = withdrowField.value;
   const withdrowAmount = parseFloat(withdrowFieldAmountString);
   // withdrowField
   withdrowField.value = '';
   
   if (isNaN(withdrowAmount)) {
      alert('please set number!');
      return;
   }

   // withdrowNumber
   const withdrowNumber = document.getElementById('withdrowNumber');
   const withdrowNumberTolat = withdrowNumber.innerText;
   const withdrowNumberTolatString = parseFloat(withdrowNumberTolat);


   // blanceNumber
   const blanceNumber = document.getElementById('blanceNumber');
   const blanceNumberString = blanceNumber.innerText;
   const blanceNumberTotla = parseFloat(blanceNumberString);



   if (withdrowAmount > blanceNumberTotla) {
      alert('taka nai re vai');
      return;
   }
   const currentWithdrowTotal = withdrowNumberTolatString + withdrowAmount;
   withdrowNumber.innerText = currentWithdrowTotal;

   const newBlanceNumber = blanceNumberTotla - withdrowAmount;
   blanceNumber.innerText = newBlanceNumber;

})