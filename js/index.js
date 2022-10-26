// const gra = function (min, max) {
//   return Math.random() * (max - min) + min;
// };


// Modal windows
let modal = document.getElementById('myModal');
let btn = document.getElementById('myBtn');
let span = document.getElementsByClassName("close")[0];

btn.onclick = function () {
  modal.style.display = "block";
}
span.onclick = function () {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

let modal2 = document.getElementById('myModal2');
let btn2 = document.getElementById('myBtn2');
let span2 = document.getElementsByClassName("close2")[0];

btn2.onclick = function () {
  modal2.style.display = "block";
}
span2.onclick = function () {
  modal2.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none"
  }
}


let modal3 = document.getElementById('myModal3');
let btn3 = document.getElementById('myBtn3');
let span3 = document.getElementsByClassName("close3")[0];

btn3.onclick = function () {
  modal3.style.display = "block";
}
span3.onclick = function () {
  modal3.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none"
  }
}

let modal4 = document.getElementById('myModal4');
let btn4 = document.getElementById('myBtn4');
let span4 = document.getElementsByClassName("close4")[0];

btn4.onclick = function () {
  modal4.style.display = "block";
}
span4.onclick = function () {
  modal4.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal4) {
    modal4.style.display = "none"
  }
}


var swiper = new Swiper('.swiper-container', {
  direction: 'vertical',
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
grabCursor: true,
  loop: true,
  
  // pagination: {
  //   el: ".swiper-pagination",
  //   type: "fraction",
    
  // },
});




