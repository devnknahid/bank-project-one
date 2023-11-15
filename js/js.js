// button
document.getElementById('submit').addEventListener('click', function () {

   // userEmail
   const userEmail = document.getElementById('userEmail');
   const eamil = userEmail.value;
   // userPassword
   const userPassword = document.getElementById('userPassword');
   const password = userPassword.value;

   if (eamil === "admin@gmail.com" && password === 'admin') {
      window.location.href = 'bank.html';
   } else {
      window.location.href = 'index.html';
   }


})
