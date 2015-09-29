(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
    .setView([-41.29, 174.78], 13);



var click = document.getElementById('click')
map.on('click', function(e) {
	var latlng = [e.latlng.lng, e.latlng.lat]
	$.featherlight($('#example'));
	});


$('#example').submit(function(event){
	event.preventDefault();
	console.log($('#dropDownId :selected').text())
	console.log(event.target[1].value);
	submitCrime(data);

})

// function submitCrime(input){
// 	var data = input.
// 	$post(
// 		url: URL,
// 		data: DATA,
// 		success: DROPPIN I THINK,
// 		dataType: DUNNO YET WTF
// 		)
// }


// jQuery.post( url [, data ] [, success ] [, dataType ] )


function dropPin(coord){
	var y = L.mapbox.featureLayer({
	    // this feature is in the GeoJSON format: see geojson.org
	    // for the full specification
	    // need to make this object relate to the object in the db somehow???
	    type: 'Feature',
	    geometry: {
	        type: 'Point',
	        // coordinates here are in longitude, latitude order because
	        // x, y is the standard for GeoJSON and many formats
	        coordinates: coord
	    },
	    properties: {
	        title: '',
	        description: '',
	        'marker-size': 'large',
	        'marker-color': '#BE9A6B',
	        'marker-symbol': 'cafe'
	    }
	}).addTo(map);
	console.log(y)

}

},{}]},{},[1]);
