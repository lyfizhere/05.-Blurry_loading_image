const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
let int = setInterval(blurring, 30); // This will set the interval 30ms for the number to change on the screen.

function blurring() {
  load++;

  if (load > 99) {
    clearInterval(int); //When the number is 100, this will clear the interval.
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0); // This will set the opacity of text from 1 to 0.

  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`; // This will set the filter blur for the image from 30px to 0px.
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}
/*The scale function here is for map a range of numbers to another range of numbers */
