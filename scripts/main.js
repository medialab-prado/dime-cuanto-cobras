var current_city;
var cityLookup = {
		    'Madrid':[40.468, -3.76, 11],
		    'Barcelona':[41.387, 2.10, 11.5]
};
var current_year = '2017';

function calculateColor(percentage) {
  if(percentage > 50) {
    return '#6e1c0f';
  } else if (percentage > 45 && percentage <= 50) {
    return '#94341c';
  } else if (percentage > 41 && percentage <= 45) {
    return '#bc6c25';
  } else if (percentage > 36 && percentage <= 41) {
    return '#d6a500';
  } else if (percentage > 30 && percentage <= 36) {
    return '#7b8815';
  } else if (percentage <= 30) {
    return '#55790e';
  }
}

function calculatePercentage(feature) {
  var salary = parseFloat($('#map-salary').val());
  var apartmentSize = parseFloat($('#map-apartment-size').val());
  var apartmentRent = parseFloat(feature.properties['q'+current_year+'4']) * apartmentSize;
  return (apartmentRent / salary)*100;
}

function dynamicStyle(feature) {
  var percentage = calculatePercentage(feature);
  var color = calculateColor(percentage);
  return {
    fillColor: color,
    weight: 2,
    opacity: 1,
    color: 'white',
    dashArray: '1',
    fillOpacity: 0.7,
  };
}

var jsonLayer = new L.GeoJSON.AJAX(["data/BarcelonaDistrictsDatosIdealista.geojson", "data/MadridDistrictsDatosIdealista.geojson"],{
  filter: setByCity,
  onEachFeature: popUp,
  style: dynamicStyle
});

function changeCurrentCity(newcity){

		    current_city=newcity;
		    jsonLayer.refresh();
		    mymap.setView(new L.LatLng(cityLookup[current_city][0], cityLookup[current_city][1]),cityLookup[current_city][2]);
        $('.btn-city').removeClass('btn-focus');
        $('.btn-' + newcity.toLowerCase()).addClass('btn-focus');
};


function changeCurrentYear(newyear){
		    current_year=newyear;
		    jsonLayer.refresh();
};

// set the filter based on values from geojson file - only display elements for currently selected city
function setByCity(f,l){

		    if (current_city === f.properties.city) {
					return true;}
};


function popUp(f,l){
  var out = [];
  if (f.properties){
		out.push("<span class='district'>" + f.properties['name'] + '</span>');
    out.push(calculatePercentage(f).toPrecision(2) + '% de tu sueldo.')
    out.push(f.properties['q'+current_year+'4'] + ' €/m²');
    
    
		// for(key in f.properties){
	 //    if (new RegExp(current_year).test(key)){

		// 		out.push(current_year+" T"+key.slice(-1)+": Precio m² - €"+f.properties[key]);
  //     }
		// }
  }
  l.bindPopup(out.join("<br />"));

};





$(document).ready(function(){
  $.getJSON("https://jsonip.com/?callback=?", function (data) {
    var ip = data.ip;
    $.getJSON("https://freegeoip.net/json/" + ip, function (data) {
      current_city = data.city;
      if(current_city !== 'Madrid' && current_city !== 'Barcelona')
        current_city = 'Madrid';
      mymap = L.map('map');
      mymap.scrollWheelZoom.disable();

      // create cartodb layer
      var cartoLayer = new L.TileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png');

      // create the tile layer with correct attribution
      var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        minZoom: 4,
        maxZoom: 12,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      });

      mymap.setView(new L.LatLng(cityLookup[current_city][0], cityLookup[current_city][1]),cityLookup[current_city][2]);
      mymap.addLayer(cartoLayer);

      mymap.addLayer(jsonLayer);
      // set the zoom limits for the map
      mymap.options.maxZoom = 15;
      mymap.options.minZoom = 6;

      changeCurrentCity(current_city);

      $('[data-number]').on('change', function(e){
        if($('#solo').is(':checked'))
          $('#question').html('¿Cuánto cobras al mes?');
        else
          $('#question').html('¿Cuánto cobráis al mes juntos?');
      });

      $('.btn-madrid').on('click', function(){
        $('.btn-barcelona').removeClass('btn-focus');
        $(this).addClass('btn-focus');
        changeCurrentCity('Madrid');
      });

      $('.btn-barcelona').on('click', function(){
        $('.btn-madrid').removeClass('btn-focus');
        $(this).addClass('btn-focus');
        changeCurrentCity('Barcelona');
      });

      $('#map-salary-value').html($('#map-salary').val() + ' €');
      $('#map-apartment-size-value').html($('#map-apartment-size').val() + ' m2');
      $('#map-year-value').html($('#map-year').val());

      $('.selection-map input[type="range"]').on('input change', function(){
        $('#map-salary-value').html($('#map-salary').val() + ' €');
        $('#map-apartment-size-value').html($('#map-apartment-size').val() + ' m2');
        var newYear = $('#map-year').val();
        $('#map-year-value').html(newYear);
        changeCurrentYear(newYear);
        changeCurrentCity(current_city);
      });
    });
  });
});
