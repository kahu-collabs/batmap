L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';

var geoJson = []
var map = L.mapbox.map(document.getElementById('map'), 'pettycrime.nj17g72j')
    .setView([-41.29, 174.78], 13);

var myLayer = L.mapbox.featureLayer().addTo(map);
var latlng = []



render();




var click = document.getElementById('click')

map.on('click', function(e) {
	console.log(e.latlng.lng)
	console.log(e.latlng.lat)
	latlng = [e.latlng.lng, e.latlng.lat]
	console.log(latlng)
	$.featherlight($('#example'));
	});



$('#example').submit(function(event){
	event.preventDefault();
	var type = testType(event.target[0].value);


	var to_db = {category_type: type, description: event.target[1].value, happened_before: event.target[2].checked, location: latlng.join() };
	console.log("onclick " + to_db["category_type"])
	submitCrime(to_db);


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
	  success: dropPin(input),
	  dataType: "json"
	});

	// $post(
	// 	url: "./api/v1/reports",
	// 	data: input,
	// 	success: dropPin(data),
	// 	)
}




function dropPin(object_with_data){

		var crimeObjects = [{
		       "type": "Feature",
		       "geometry": {
		           "type": "Point",
		           "coordinates": latlng
		       },
		       "properties": {
		           "title": "Joker Gassing",
		           "icon": {
		               "iconUrl": "assets/joker_pin.png",
		               "iconSize": [50, 50], // size of the icon
		               "iconAnchor": [25, 25], // point of the icon which will correspond to marker's location
		               "popupAnchor": [0, -25], // point from which the popup should open relative to the iconAnchor
		               "className": "dot"
		           }
		       }
		   }, {
		       "type": "Feature",
		       "geometry": {
		           "type": "Point",
		           "coordinates": latlng
		       },
		       "properties": {
		           "title": "Mugging",
		           "icon": {
		               "iconUrl": "assets/batpin.png",
		               "iconSize": [50, 50],
		               "iconAnchor": [25, 25],
		               "popupAnchor": [0, -25],
		               "className": "dot"
		           }
		       }
		   }, {
		       "type": "Feature",
		       "geometry": {
		           "type": "Point",
		           "coordinates": latlng
		       },
		       "properties": {
		           "title": "Home Invasion",
		           "icon": {
		               "iconUrl": "assets/home_invasion.png",
		               "iconSize": [50, 50],
		               "iconAnchor": [25, 25],
		               "popupAnchor": [0, -25],
		               "className": "dot"
		           }
		       }
		   }, {
		       "type": "Feature",
		       "geometry": {
		           "type": "Point",
		           "coordinates": latlng
		       },
		       "properties": {
		           "title": "Car Theft",
		           "icon": {
		               "iconUrl": "assets/car_thieft.png",
		               "iconSize": [50, 50],
		               "iconAnchor": [25, 25],
		               "popupAnchor": [0, -25],
		               "className": "dot"
		           }
		       }
		   }];




	x = (object_with_data["category_type"]) - 1;

	geoJson.push(crimeObjects[x])
	console.log(geoJson);
	render()


}


function render(){
	myLayer.on('layeradd', function(e) {
    var marker = e.layer,
        feature = marker.feature;

   marker.setIcon(L.icon(feature.properties.icon));

	});



	myLayer.setGeoJSON(geoJson);
}
