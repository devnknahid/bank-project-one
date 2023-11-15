const liCollection = document.getElementsByTagName('li');

for (const li of liCollection) {

   console.log(li.innerText);

}

function makeBlue() {
   document.body.style.backgroundColor = 'blue';
}

function update() {
   let inputText = document.getElementById('input-text');
   let updateText = document.getElementById('updateText');
   updateText.innerText = inputText.value;
   inputText.value = '';
}

// option 2
let submitValue = document.getElementById('submitValue').addEventListener('click', function () {
   let submitValue2 = document.getElementById('submitValue2');
   let inputText2 = document.getElementById('input-text2');
   submitValue2.innerText = inputText2.value;
   inputText2.value = '';


})


// let post = document.getElementById('post').addEventListener('click', function () {
//    let textArea = document.getElementById('textArea');
//    let txt = textArea.value;
//    let p = document.getElementById('p');
//    p.innerText = txt;
//    textArea.value = '';
//    console.log(p);
// })



// adsa
let inp = document.getElementById('disable').addEventListener('keyup', function (event) {
   let text = event.target.value;
   let nDelete = document.getElementById('nDelete');
   nDelete.addEventListener('click', () => {
      document.getElementById('disable').value = '';
   })
   if (text == 'delete') {
      nDelete.removeAttribute('disabled');
   } else {
      nDelete.setAttribute('disabled', true);
   }

});






