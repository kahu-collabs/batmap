(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	var type = testType(event.target[0].value);


	var to_db = {category_type: type, description: event.target[1].value, happened_before: event.target[2].checked, location: latlng.join() };

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
	var data = input.location

	$.ajax({
	  type: "POST",
	  url: "api/v1/reports",
	  data: input,
	  success: dropPin(data),
	  dataType: "json"
	});

	// $post(
	// 	url: "./api/v1/reports",
	// 	data: input,
	// 	success: dropPin(data),
	// 	)
}



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
	        coordinates: latlng
	    },
	    properties: {
	        title: 'asdf',
	        description: 'asdf',
	        'marker-size': 'large',
	        'marker-color': '#BE9A6B',
	        'marker-symbol': 'cafe'
	    }
	}).addTo(map);
	console.log(y)

}

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Vzci9sb2NhbC9saWIvbm9kZV9tb2R1bGVzL3dhdGNoaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYXByZW50aWNlL1dvcmtzcGFjZS9iYXRtYXAvcHVibGljL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUEsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsK0ZBQStGLENBQUM7QUFDdkgsSUFBSSxHQUFHLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQztBQUN4RSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDOztBQUVuQyxJQUFJLE1BQU0sR0FBRyxFQUFFO0FBQ2Y7QUFDQTs7QUFFQSxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQztBQUM1QyxHQUFHLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxTQUFTLENBQUMsRUFBRTtDQUMzQixNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztDQUNyQyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQztDQUNuQixDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0FBQy9CLEVBQUUsQ0FBQyxDQUFDO0FBQ0o7QUFDQTs7QUFFQSxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsS0FBSyxDQUFDO0NBQ25DLEtBQUssQ0FBQyxjQUFjLEVBQUUsQ0FBQztBQUN4QixDQUFDLElBQUksSUFBSSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQzVDOztBQUVBLENBQUMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxhQUFhLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxlQUFlLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDOztBQUUzSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNwQjs7QUFFQSxDQUFDLENBQUM7QUFDRjs7QUFFQSxTQUFTLFFBQVEsQ0FBQyxJQUFJLENBQUM7Q0FDdEIsSUFBSSxJQUFJLElBQUksZUFBZSxDQUFDO0VBQzNCLE9BQU8sQ0FBQztFQUNSO01BQ0ksSUFBSSxJQUFJLElBQUksU0FBUyxDQUFDO0VBQzFCLE9BQU8sQ0FBQztFQUNSO01BQ0ksSUFBSSxJQUFJLElBQUksZUFBZSxDQUFDO0VBQ2hDLE9BQU8sQ0FBQztFQUNSO01BQ0ksQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNoQixDQUFDOztBQUVELFNBQVMsV0FBVyxDQUFDLEtBQUssQ0FBQztBQUMzQixDQUFDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFROztDQUV6QixDQUFDLENBQUMsSUFBSSxDQUFDO0dBQ0wsSUFBSSxFQUFFLE1BQU07R0FDWixHQUFHLEVBQUUsZ0JBQWdCO0dBQ3JCLElBQUksRUFBRSxLQUFLO0dBQ1gsT0FBTyxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUM7R0FDdEIsUUFBUSxFQUFFLE1BQU07QUFDbkIsRUFBRSxDQUFDLENBQUM7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7QUFDRDtBQUNBOztBQUVBLFNBQVMsT0FBTyxDQUFDLEtBQUssQ0FBQztBQUN2QixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDO0FBQy9CO0FBQ0E7O0tBRUssSUFBSSxFQUFFLFNBQVM7S0FDZixRQUFRLEVBQUU7QUFDZixTQUFTLElBQUksRUFBRSxPQUFPO0FBQ3RCOztTQUVTLFdBQVcsRUFBRSxNQUFNO01BQ3RCO0tBQ0QsVUFBVSxFQUFFO1NBQ1IsS0FBSyxFQUFFLE1BQU07U0FDYixXQUFXLEVBQUUsTUFBTTtTQUNuQixhQUFhLEVBQUUsT0FBTztTQUN0QixjQUFjLEVBQUUsU0FBUztTQUN6QixlQUFlLEVBQUUsTUFBTTtNQUMxQjtFQUNKLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZixDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIkwubWFwYm94LmFjY2Vzc1Rva2VuID0gJ3BrLmV5SjFJam9pY0dWMGRIbGpjbWx0WlNJc0ltRWlPaUpqYVdZMGNUQm9aRGd3YlhsMGMyUnROMlpqWXpoaWNqWm9JbjAuRkRqeFhrdHctckEtVS1xb2JqeU54USc7XG52YXIgbWFwID0gTC5tYXBib3gubWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwgJ21hcGJveC5zdHJlZXRzJylcbiAgICAuc2V0VmlldyhbLTQxLjI5LCAxNzQuNzhdLCAxMyk7XG5cbnZhciBsYXRsbmcgPSBbXVxuXG5cblxudmFyIGNsaWNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NsaWNrJylcbm1hcC5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XG5cdGxhdGxuZyA9IFtlLmxhdGxuZy5sbmcsIGUubGF0bG5nLmxhdF1cblx0Y29uc29sZS5sb2cobGF0bG5nKVxuXHQkLmZlYXRoZXJsaWdodCgkKCcjZXhhbXBsZScpKTtcblx0fSk7XG5cblxuXG4kKCcjZXhhbXBsZScpLnN1Ym1pdChmdW5jdGlvbihldmVudCl7XG5cdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdHZhciB0eXBlID0gdGVzdFR5cGUoZXZlbnQudGFyZ2V0WzBdLnZhbHVlKTtcblxuXG5cdHZhciB0b19kYiA9IHtjYXRlZ29yeV90eXBlOiB0eXBlLCBkZXNjcmlwdGlvbjogZXZlbnQudGFyZ2V0WzFdLnZhbHVlLCBoYXBwZW5lZF9iZWZvcmU6IGV2ZW50LnRhcmdldFsyXS5jaGVja2VkLCBsb2NhdGlvbjogbGF0bG5nLmpvaW4oKSB9O1xuXG5cdHN1Ym1pdENyaW1lKHRvX2RiKTtcblxuXG59KVxuXG5cbmZ1bmN0aW9uIHRlc3RUeXBlKHR5cGUpe1xuXHRpZiAodHlwZSA9PSBcIkpva2VyIEdhc3NpbmdcIil7XG5cdFx0cmV0dXJuIDFcblx0fVxuXHRlbHNlIGlmICh0eXBlID09IFwiTXVnZ2luZ1wiKXtcblx0XHRyZXR1cm4gMlxuXHR9XG5cdGVsc2UgaWYgKHR5cGUgPT0gXCJIb21lIEludmFzaW9uXCIpe1xuXHRcdHJldHVybiAzXG5cdH1cblx0ZWxzZSB7cmV0dXJuIDR9XG59XG5cbmZ1bmN0aW9uIHN1Ym1pdENyaW1lKGlucHV0KXtcblx0dmFyIGRhdGEgPSBpbnB1dC5sb2NhdGlvblxuXG5cdCQuYWpheCh7XG5cdCAgdHlwZTogXCJQT1NUXCIsXG5cdCAgdXJsOiBcImFwaS92MS9yZXBvcnRzXCIsXG5cdCAgZGF0YTogaW5wdXQsXG5cdCAgc3VjY2VzczogZHJvcFBpbihkYXRhKSxcblx0ICBkYXRhVHlwZTogXCJqc29uXCJcblx0fSk7XG5cblx0Ly8gJHBvc3QoXG5cdC8vIFx0dXJsOiBcIi4vYXBpL3YxL3JlcG9ydHNcIixcblx0Ly8gXHRkYXRhOiBpbnB1dCxcblx0Ly8gXHRzdWNjZXNzOiBkcm9wUGluKGRhdGEpLFxuXHQvLyBcdClcbn1cblxuXG5cbmZ1bmN0aW9uIGRyb3BQaW4oY29vcmQpe1xuXHR2YXIgeSA9IEwubWFwYm94LmZlYXR1cmVMYXllcih7XG5cdCAgICAvLyB0aGlzIGZlYXR1cmUgaXMgaW4gdGhlIEdlb0pTT04gZm9ybWF0OiBzZWUgZ2VvanNvbi5vcmdcblx0ICAgIC8vIGZvciB0aGUgZnVsbCBzcGVjaWZpY2F0aW9uXG5cdCAgICAvLyBuZWVkIHRvIG1ha2UgdGhpcyBvYmplY3QgcmVsYXRlIHRvIHRoZSBvYmplY3QgaW4gdGhlIGRiIHNvbWVob3c/Pz9cblx0ICAgIHR5cGU6ICdGZWF0dXJlJyxcblx0ICAgIGdlb21ldHJ5OiB7XG5cdCAgICAgICAgdHlwZTogJ1BvaW50Jyxcblx0ICAgICAgICAvLyBjb29yZGluYXRlcyBoZXJlIGFyZSBpbiBsb25naXR1ZGUsIGxhdGl0dWRlIG9yZGVyIGJlY2F1c2Vcblx0ICAgICAgICAvLyB4LCB5IGlzIHRoZSBzdGFuZGFyZCBmb3IgR2VvSlNPTiBhbmQgbWFueSBmb3JtYXRzXG5cdCAgICAgICAgY29vcmRpbmF0ZXM6IGxhdGxuZ1xuXHQgICAgfSxcblx0ICAgIHByb3BlcnRpZXM6IHtcblx0ICAgICAgICB0aXRsZTogJ2FzZGYnLFxuXHQgICAgICAgIGRlc2NyaXB0aW9uOiAnYXNkZicsXG5cdCAgICAgICAgJ21hcmtlci1zaXplJzogJ2xhcmdlJyxcblx0ICAgICAgICAnbWFya2VyLWNvbG9yJzogJyNCRTlBNkInLFxuXHQgICAgICAgICdtYXJrZXItc3ltYm9sJzogJ2NhZmUnXG5cdCAgICB9XG5cdH0pLmFkZFRvKG1hcCk7XG5cdGNvbnNvbGUubG9nKHkpXG5cbn0iXX0=
