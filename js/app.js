function openNav() {
  document.getElementById('navBar').style.width = '100%';
}
function closeNav() {
  document.getElementById('navBar').style.width = '0%';
}
function link() {
  closeNav();
}


let slideIndex = 1;
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
  // const dots = document.getElementsByClassName('dot');
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



document.getElementById('content-four').addEventListener('mouseover', mouseOver);
document.getElementById('content-four').addEventListener('mouseout', mouseOut);
document.getElementById('content-three').addEventListener('mouseover', mouseOver);
document.getElementById('content-three').addEventListener('mouseout', mouseOut);
document.getElementById('content-two').addEventListener('mouseover', mouseOver);
document.getElementById('content-two').addEventListener('mouseout', mouseOut);
document.getElementById('content-one').addEventListener('mouseover', mouseOver);
document.getElementById('content-one').addEventListener('mouseout', mouseOut);

function mouseOver() {
  document.getElementById('content-four').style.opacity = '0.8';
  document.getElementById('content-three').style.opacity = '0.8';
  document.getElementById('content-two').style.opacity = '0.8';
  document.getElementById('content-one').style.opacity = '0.8';
}

function mouseOut() {
  document.getElementById('content-four').style.opacity = '0';
  document.getElementById('content-three').style.opacity = '0';
  document.getElementById('content-two').style.opacity = '0';
  document.getElementById('content-one').style.opacity = '0';
}
