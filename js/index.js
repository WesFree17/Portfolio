const slides = document.querySelectorAll(".slide");
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

let curSlide = 0;

let maxSlide = slides.length - 1;

const nextSlide = document.querySelector(".btn-next");

nextSlide.addEventListener("click", function () {

  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

const prevSlide = document.querySelector(".btn-prev");

prevSlide.addEventListener("click", function () {

 if (curSlide === 0) {
    curSlide = maxSlide;
 } else {
    curSlide--;
 }

 slides[curSlide].style.transform = `translateX(${-curSlide * 100}%)`;
});

  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

