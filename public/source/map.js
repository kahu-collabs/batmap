L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'mapbox.streets')
    .setView([-41.29, 174.78], 13);



var click = document.getElementById('click')
map.on('click', function(e) {
	var latlng = [e.latlng.lng, e.latlng.lat]
	$.featherlight($('#example'));
	});


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