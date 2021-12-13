let container = document.querySelector('.container');

const x = [1, 2, 3, 4, 5, 6, 7, 8];
const y = [1, 2, 3, 4, 5, 6, 7, 8];

let figura = document.querySelectorAll('.figura');

function createDesk (e) {

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 == 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 != 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 == 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 != 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 == 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 != 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 == 0) {
         eldiv.className = 'kate qora';
      }
   }

   for (let i = 1; i <= 8; i++) {
      let eldiv = document.createElement('div');
      eldiv.className = 'kate';
      container.appendChild(eldiv);

      if (i % 2 != 0) {
         eldiv.className = 'kate qora';
      }
   }

   // for (let xi of x) {
   //    console.log(xi);
   //    // if (xi[1]) {
         

   //    // }
   // }

   // for (let yi of y) {
   //    console.log(yi);
   // }
}

figura.forEach(item => {
   item.addEventListener('click', () => {
      let kate = document.querySelectorAll('.kate');  
      item.style.border = '1px solid #222'

      kate.forEach(item2 => {
         // item2.style.background = '#22afb626';

         item2.addEventListener('click', (e) => {
            if (item.value = 3) {
               item2.innerHTML += '<div class="figura tora"><i class="fas fa-chess-rook"></i></div>';
            }
            item2.innerHTML += '';
            console.log(item.value);
         })
      })
   })
})

createDesk();










// '<div class="kate"></div>'