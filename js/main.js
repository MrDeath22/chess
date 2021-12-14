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

      kate.forEach(item2 => {

         item2.addEventListener('click', (e) => {

            if ((item.classList[1]) == 'tora') {
               item2.innerHTML = '<div class="figura tora"><i class="fas fa-chess-rook"></i></div>';
            }
            if ((item.classList[1]) == 'ferz') {
               item2.innerHTML = '<div class="figura ferz"><i class="fas fa-chess-queen"></i></div>';
            }
            if ((item.classList[1]) == 'slon') {
               item2.innerHTML = '<div class="figura slon"><i class="fas fa-chess-bishop"></i></div>';
            }
            if ((item.classList[1]) == 'ot') {
               item2.innerHTML = '<div class="figura ot"><i class="fas fa-chess-knight"></i></div>';
            }  
         })
      })
   })
})

createDesk();










// '<div class="kate"></div>'