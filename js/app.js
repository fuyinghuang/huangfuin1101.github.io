// const myDiv = document.getElementsByClassName('nav');
// console.log('Hi! Thank you for checking my portfolio. If you would like to get in touch, please contact me at dorisfuying.huang@gmail.com');
// Open when someone clicks on the i element
function openNav() {
  document.getElementById('navBar').style.width = '100%';
}
//Close when someone clicks on the "x" symbol
function closeNav() {
  document.getElementById('navBar').style.width = '0%';
}
function link() {
  closeNav();
}



var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName('slides');
  const dots = document.getElementsByClassName('dot');
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';
  }
  // for (i = 0; i < dots.length; i++) {
  //   dots[i].className = dots[i].className.replace('active', '');
  // }
  slides[slideIndex-1].style.display = 'block';
  // dots[slideIndex-1].className += ' active';
}
