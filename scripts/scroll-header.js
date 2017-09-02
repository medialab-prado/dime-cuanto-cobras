var header = document.querySelector(".header");

function headerFixed() {
  var viewportSize = 85 * window.innerHeight / 100;
  var currentViewportSize = window.scrollY;
  if(window.scrollY > viewportSize){
    header.style.position = "fixed";
    header.style.top = 0;
    header.style.zIndex = 999;
    header.style.height = "60px";
  }else{
    header.style.position = "static";
    header.style.height = "80px";
  }
}

window.addEventListener('scroll', headerFixed);
