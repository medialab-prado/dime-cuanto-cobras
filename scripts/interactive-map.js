'use strict';

document.addEventListener("DOMContentLoaded", function() {
  //Lo que ocurre cuando haces click en el botón de Madrid o Barcelona

  var buttonMadrid = document.querySelector(".btn-madrid");
  var buttonBarcelona = document.querySelector(".btn-barcelona");
  var mapMadrid = document.querySelector(".map-madrid");
  var mapBarcelona = document.querySelector(".map-barcelona");

  var salary = 1200;
  var size = 45;

  function changeMapMadrid(){
    buttonMadrid.classList.add("btn-focus");
    buttonBarcelona.classList.remove("btn-focus");
    mapMadrid.classList.add("on");
    mapBarcelona.classList.add("off");
    mapMadrid.classList.remove("off");
    mapBarcelona.classList.remove("on");
  }

  function changeMapBarcelona(){
    buttonBarcelona.classList.add("btn-focus");
    buttonMadrid.classList.remove("btn-focus");
    mapMadrid.classList.add("off");
    mapBarcelona.classList.add("on");
    mapMadrid.classList.remove("on");
    mapBarcelona.classList.remove("off");
  }

  buttonMadrid.addEventListener("click", changeMapMadrid);
  buttonBarcelona.addEventListener("click", changeMapBarcelona);

  function drawMapColors(){
    var paths = document.querySelectorAll('path');
    for(var i = 0; i < paths.length; i++) {
      var path = paths[i];
      var priceZone = parseFloat(path.dataset.value);
      var totalPrice = size * priceZone;

      var percentage = (totalPrice / salary) * 100;
      var color;
      if(percentage > 50) {
         color = 'unit-50';
      } else if (percentage > 46 && percentage <= 50) {
         color = 'unit-46';
      } else if (percentage > 41 && percentage <= 45) {
         color = 'unit-41';
      } else if (percentage > 36 && percentage <= 41) {
        color = 'unit-36';
      } else if (percentage > 31 && percentage <= 36) {
        color = 'unit-31';
      } else if (percentage <= 30) {
        color = 'unit-30';
      }
      console.log(color);
      if (path.classList)
        path.classList.add(color);
      else
        path.className += ' ' + color;

    }
  }


  //Lo que ocurre cuando cambias el dinero
  var inputMoney = document.querySelector(".range-one");
  var colormap = document.querySelector(".st13");
  colormap.setAttribute("fill", "#7A8417");

  var changeColor = function(){
    var salary = inputMoney.value;
    drawMapColors();
  };

  inputMoney.addEventListener("input", changeColor);
  drawMapColors();

});
