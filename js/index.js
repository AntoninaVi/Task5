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

import * as basicLightbox from 'basiclightbox'
document.querySelector('button.iframe').onclick = () => {

	basicLightbox.create(`
		<iframe width="560" height="315" src="https://www.youtube.com/watch?v=geFi-ZpN2ZM" frameborder="0" allowfullscreen></iframe>
	`).show()

}