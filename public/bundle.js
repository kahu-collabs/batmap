(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
L.mapbox.accessToken = 'pk.eyJ1IjoicGV0dHljcmltZSIsImEiOiJjaWY0cTBoZDgwbXl0c2RtN2ZjYzhicjZoIn0.FDjxXktw-rA-U-qobjyNxQ';
var map = L.mapbox.map(document.getElementById('map'), 'pettycrime.nj17g72j')
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
	type = testtype(event.target[0].value);
	console.log(event.target[1].checked); // note this is not working!!! False everytime
	console.log(event.target[2].value);
	console.log(latlng)
	submitCrime(data);
	var to_db = {description: event.target[1].value, happened_before: event.target[1].checked, location: latlng}


	// (:description, :happened_before,
	// 		:additional_info, :location)

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi9Vc2Vycy9nbGVuaXNwaGlsaXAtYmFyYmFyYS9EZXNrdG9wL3dvcmtzcGFjZS9iYXRtYXAvcHVibGljL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsK0ZBQStGLENBQUM7QUFDdkgsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxxQkFBcUIsQ0FBQztBQUM3RSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVuQyxJQUFJLE1BQU0sR0FBRyxFQUFFO0FBQ2Y7QUFDQTtBQUNBOztBQUVBLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQzVDLEdBQUcsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLFNBQVMsQ0FBQyxFQUFFO0NBQzNCLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDO0NBQ3JDLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0NBQ25CLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7QUFDL0IsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBOztBQUVBLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxLQUFLLENBQUM7Q0FDbkMsS0FBSyxDQUFDLGNBQWMsRUFBRSxDQUFDO0NBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0NBQzFCLElBQUksR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQztDQUN2QyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUM7Q0FDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0NBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO0NBQ25CLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUNuQixDQUFDLElBQUksS0FBSyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGVBQWUsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxDQUFDO0FBQzdHO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUMsQ0FBQztBQUNGOztBQUVBLFNBQVMsUUFBUSxDQUFDLElBQUksQ0FBQztDQUN0QixJQUFJLElBQUksSUFBSSxlQUFlLENBQUM7RUFDM0IsT0FBTyxDQUFDO0VBQ1I7TUFDSSxJQUFJLElBQUksSUFBSSxTQUFTLENBQUM7RUFDMUIsT0FBTyxDQUFDO0VBQ1I7TUFDSSxJQUFJLElBQUksSUFBSSxlQUFlLENBQUM7RUFDaEMsT0FBTyxDQUFDO0VBQ1I7TUFDSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hCLENBQUM7O0FBRUQsK0JBQStCO0FBQy9CLHFCQUFxQjtBQUNyQixVQUFVO0FBQ1YsY0FBYztBQUNkLGdCQUFnQjtBQUNoQiw4QkFBOEI7QUFDOUIsNEJBQTRCO0FBQzVCLE1BQU07QUFDTixJQUFJO0FBQ0o7O0FBRUEsMERBQTBEO0FBQzFEOztBQUVBLFNBQVMsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQy9CO0FBQ0E7O0tBRUssSUFBSSxFQUFFLFNBQVM7S0FDZixRQUFRLEVBQUU7QUFDZixTQUFTLElBQUksRUFBRSxPQUFPO0FBQ3RCOztTQUVTLFdBQVcsRUFBRSxLQUFLO01BQ3JCO0tBQ0QsVUFBVSxFQUFFO1NBQ1IsS0FBSyxFQUFFLEVBQUU7U0FDVCxXQUFXLEVBQUUsRUFBRTtTQUNmLGFBQWEsRUFBRSxPQUFPO1NBQ3RCLGNBQWMsRUFBRSxTQUFTO1NBQ3pCLGVBQWUsRUFBRSxNQUFNO01BQzFCO0VBQ0osQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztBQUNmLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiTC5tYXBib3guYWNjZXNzVG9rZW4gPSAncGsuZXlKMUlqb2ljR1YwZEhsamNtbHRaU0lzSW1FaU9pSmphV1kwY1RCb1pEZ3diWGwwYzJSdE4yWmpZemhpY2pab0luMC5GRGp4WGt0dy1yQS1VLXFvYmp5TnhRJztcbnZhciBtYXAgPSBMLm1hcGJveC5tYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCAncGV0dHljcmltZS5uajE3ZzcyaicpXG4gICAgLnNldFZpZXcoWy00MS4yOSwgMTc0Ljc4XSwgMTMpO1xuXG52YXIgbGF0bG5nID0gW11cblxuXG5cblxudmFyIGNsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrJylcbm1hcC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdGxhdGxuZyA9IFtlLmxhdGxuZy5sbmcsIGUubGF0bG5nLmxhdF1cblx0Y29uc29sZS5sb2cobGF0bG5nKVxuXHQkLmZlYXRoZXJsaWdodCgkKCcjZXhhbXBsZScpKTtcblx0fSk7XG5cblxuXG4kKCcjZXhhbXBsZScpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldCk7XG5cdHR5cGUgPSB0ZXN0dHlwZShldmVudC50YXJnZXRbMF0udmFsdWUpO1xuXHRjb25zb2xlLmxvZyhldmVudC50YXJnZXRbMV0uY2hlY2tlZCk7IC8vIG5vdGUgdGhpcyBpcyBub3Qgd29ya2luZyEhISBGYWxzZSBldmVyeXRpbWVcblx0Y29uc29sZS5sb2coZXZlbnQudGFyZ2V0WzJdLnZhbHVlKTtcblx0Y29uc29sZS5sb2cobGF0bG5nKVxuXHRzdWJtaXRDcmltZShkYXRhKTtcblx0dmFyIHRvX2RiID0ge2Rlc2NyaXB0aW9uOiBldmVudC50YXJnZXRbMV0udmFsdWUsIGhhcHBlbmVkX2JlZm9yZTogZXZlbnQudGFyZ2V0WzFdLmNoZWNrZWQsIGxvY2F0aW9uOiBsYXRsbmd9XG5cblxuXHQvLyAoOmRlc2NyaXB0aW9uLCA6aGFwcGVuZWRfYmVmb3JlLFxuXHQvLyBcdFx0OmFkZGl0aW9uYWxfaW5mbywgOmxvY2F0aW9uKVxuXG59KVxuXG5cbmZ1bmN0aW9uIHRlc3RUeXBlKHR5cGUpe1xuXHRpZiAodHlwZSA9PSBcIkpva2VyIEdhc3NpbmdcIil7XG5cdFx0cmV0dXJuIDFcblx0fVxuXHRlbHNlIGlmICh0eXBlID09IFwiTXVnZ2luZ1wiKXtcblx0XHRyZXR1cm4gMlxuXHR9XG5cdGVsc2UgaWYgKHR5cGUgPT0gXCJIb21lIEludmFzaW9uXCIpe1xuXHRcdHJldHVybiAzXG5cdH1cblx0ZWxzZSB7cmV0dXJuIDR9XG59XG5cbi8vIGZ1bmN0aW9uIHN1Ym1pdENyaW1lKGlucHV0KXtcbi8vIFx0dmFyIGRhdGEgPSBpbnB1dC5cbi8vIFx0JHBvc3QoXG4vLyBcdFx0dXJsOiBVUkwsXG4vLyBcdFx0ZGF0YTogREFUQSxcbi8vIFx0XHRzdWNjZXNzOiBEUk9QUElOIEkgVEhJTkssXG4vLyBcdFx0ZGF0YVR5cGU6IERVTk5PIFlFVCBXVEZcbi8vIFx0XHQpXG4vLyB9XG5cblxuLy8galF1ZXJ5LnBvc3QoIHVybCBbLCBkYXRhIF0gWywgc3VjY2VzcyBdIFssIGRhdGFUeXBlIF0gKVxuXG5cbmZ1bmN0aW9uIGRyb3BQaW4oY29vcmQpe1xuXHR2YXIgeSA9IEwubWFwYm94LmZlYXR1cmVMYXllcih7XG5cdCAgICAvLyB0aGlzIGZlYXR1cmUgaXMgaW4gdGhlIEdlb0pTT04gZm9ybWF0OiBzZWUgZ2VvanNvbi5vcmdcblx0ICAgIC8vIGZvciB0aGUgZnVsbCBzcGVjaWZpY2F0aW9uXG5cdCAgICAvLyBuZWVkIHRvIG1ha2UgdGhpcyBvYmplY3QgcmVsYXRlIHRvIHRoZSBvYmplY3QgaW4gdGhlIGRiIHNvbWVob3c/Pz9cblx0ICAgIHR5cGU6ICdGZWF0dXJlJyxcblx0ICAgIGdlb21ldHJ5OiB7XG5cdCAgICAgICAgdHlwZTogJ1BvaW50Jyxcblx0ICAgICAgICAvLyBjb29yZGluYXRlcyBoZXJlIGFyZSBpbiBsb25naXR1ZGUsIGxhdGl0dWRlIG9yZGVyIGJlY2F1c2Vcblx0ICAgICAgICAvLyB4LCB5IGlzIHRoZSBzdGFuZGFyZCBmb3IgR2VvSlNPTiBhbmQgbWFueSBmb3JtYXRzXG5cdCAgICAgICAgY29vcmRpbmF0ZXM6IGNvb3JkXG5cdCAgICB9LFxuXHQgICAgcHJvcGVydGllczoge1xuXHQgICAgICAgIHRpdGxlOiAnJyxcblx0ICAgICAgICBkZXNjcmlwdGlvbjogJycsXG5cdCAgICAgICAgJ21hcmtlci1zaXplJzogJ2xhcmdlJyxcblx0ICAgICAgICAnbWFya2VyLWNvbG9yJzogJyNCRTlBNkInLFxuXHQgICAgICAgICdtYXJrZXItc3ltYm9sJzogJ2NhZmUnXG5cdCAgICB9XG5cdH0pLmFkZFRvKG1hcCk7XG5cdGNvbnNvbGUubG9nKHkpXG5cbn0iXX0=
