var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');
var colorElements = document.querySelectorAll('.color');

//buttons

var prevBtn = document.querySelector('#prevBtn');
var nextBtn = document.querySelector('#nextBtn');

//counter

var counter = 1;
var size = carouselImages[0].clientWidth;
console.log(carouselImages[0].width);
console.log(size);
carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';

//button listeners

nextBtn.addEventListener('click', function () {
  if (counter >= carouselImages.length - 1) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter++;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});
prevBtn.addEventListener('click', function () {
  if (counter <= 0) return;
  carouselSlide.style.transition = "transform 0.4s ease-in-out";
  counter--;
  console.log(counter);
  carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
});
carouselSlide.addEventListener('transitionend', function () {
  if (carouselImages[counter].id === 'lastClone') {
    carouselSlide.style.transition = "none";
    counter = carouselImages.length - 2;
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }

  if (carouselImages[counter].id === 'firstClone') {
    counter = carouselImages.length - counter;
    carouselSlide.style.transition = "none";
    carouselSlide.style.transform = 'translateX(' + -size * counter + 'px)';
  }

  for (var i = 0; i < colorElements.length; i++) {
    if (counter === 1) {
      colorElements[0].style.display = "none";
      colorElements[1].style.fontWeight = "900";
      colorElements[1].style.display = "block";
      colorElements[1].style.color = "#000";
      colorElements[1].innerHTML = "Black";
      colorElements[2].style.display = "none";
    } else if (counter === 2) {
      colorElements[0].style.display = "none";
      colorElements[1].style.fontWeight = "900";
      colorElements[1].style.color = "#0000ff";
      colorElements[1].innerHTML = "Blue";
      colorElements[1].style.display = "block";
      colorElements[0].style.display = "none";
    } else {
      colorElements[0].style.display = "none";
      colorElements[1].style.fontWeight = "900";
      colorElements[1].style.color = "#ff0000";
      colorElements[1].innerHTML = "Red";
      colorElements[1].style.display = "block";
      colorElements[0].style.display = "none";
    }
  }
});
