L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
    .setView([-41.29, 174.78], 13);

var latlng = []



var click = document.getElementById('click')
map.on('click', function(e) {
	latlng = [e.latlng.lng, e.latlng.lat]
	console.log(latlng)
	$.featherlight($('#example'));
	});



$('#example').submit(function(event){
	event.preventDefault();
	console.log(event.target);
	console.log(event.target[0].value);
	console.log(event.target[1].checked);
	console.log(event.target[2].value);
	console.log(latlng)
	submitCrime(data);
	// var to_db = {description: event.target[1].value, happened_before:  }


	// (:description, :happened_before,
	// 		:additional_info, :location)

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