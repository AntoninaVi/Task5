const gra = function (min, max) {
  return Math.random() * (max - min) + min;
};
// const init = function () {
//   let items = document.getElementById("main__page-swiper-item");
//   for (let i = 0; i < items.length; i++) {
//     items[i].style.minHeight = gra(120, 205) + "vh";
//   }

  // cssScrollSnapPolyfill();
// };
// init();


// const elPromo = document.querySelector('main__page-swiper-item');
// const elCounter = document.getElementById('counter');

// const promoTop = () => {
//   const pixels = elPromo.getBoundingClientRect().top;
//   elCounter.textContent = `${Math.floor(pixels / 20)} `;
// }
 
// const onScroll = (e) => {
//   promoTop();
// }

// document.addEventListener('scroll', onScroll);
// onScroll();

let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function(){
  modal.style.display = "block";
}
span.onclick = function(){
  modal.style.display = "none";
}

window.onclick = function(event){
  if (event.target == modal){
    modal.style.display = "none"
  }
}