var makeObjects = require('./source/map/make_objects')
var getCrime = require('./source/map/getCrimeObject')

var React = require('react')  //main
var BatmapModal = require('./source/batmap-modal')
React.render(<BatmapModal />, document.querySelector('#batmap-modal'))


var geoJson = []
L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';

var map = L.mapbox.map(document.getElementById('map'), 'pettycrime.nj17g72j')
    .setView([-41.29, 174.78], 13);

var myLayer = L.mapbox.featureLayer().addTo(map);
var latlng = []


$(document).ready(function(){
		dat_get()
})


function dat_get(){
	$.get( "api/v1/reports", function( data ) {
		  $( ".result" ).html( data );
		  // console.log("call back data", data)
		  var renderObjects = makeObjects(data)
		  // console.log('render objects ', renderObjects)
		  render(renderObjects);
	});
}

// use the type ID to find the actual ID of the object

// function makeObjects(rawData){
//   for(i = 0; i < rawData.length; i++){
//     var item = rawData[i]
//     var id = item.id
//     var type = item.category_types_id
//     if(type == 1){
//     	var title = "Joker Gassing",
//     		img = "assets/joker_pin.png"
//     	} else if(type == 2){
//     		var title = "Mugging",
//     			img = "assets/batpin.png"
//     	} else if(type == 3){
//     		var title = "Home invasion",
//     			img = "assets/home_invasion.png"
//     	} else {
//     		var title = "Car Theft",
//     			img = "assets/car_thieft.png"
//     	}

//     console.log(item.location)
//     x = (item.category_types_id) - 1

//     var crime = getCrime(item.id, title, img, item.location, item.description)
//     console.log("crime ", crime)
//     geoJson.push(crime)
//     // pull the appropriate object out of the crime objects array, populate the relevant fields and push into geoJson array
//   }
//   return geoJson
// }






var click = document.getElementById('click')

map.on('click', function(e) {
	latlng = [e.latlng.lng, e.latlng.lat]
	$.featherlight($('#example'));
	});



$('#example').submit(function(event){
	event.preventDefault();
	var type = testType(event.target[0].value);
	var to_db = {category_types_id: type, description: event.target[1].value, happened_before: event.target[2].checked, location: latlng.join() };
	submitCrime(to_db);
	dat_get();


})


function testType(type){
	if (type == "Joker Gassing"){
		return 1
	}
	else if (type == "Mugging"){
		return 2
	}
	else if (type == "Home Invasion"){
		return 3
	}
	else {return 4}
}

function submitCrime(input){

	$.ajax({
	  type: "POST",
	  url: "api/v1/reports",
	  data: input,
	  success: dat_get(),
	  dataType: "json"
	});
}


function render(data){
	myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;
   marker.setIcon(L.icon(feature.properties.icon));
	});
	myLayer.setGeoJSON(data);
}
