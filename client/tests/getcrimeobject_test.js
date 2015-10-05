var test = require('tape')
var getcrimeobject = require('../source/map/getCrimeObject')
var fakeData = {
  geometry:
    { coordinates: [ 0, NaN ], type: 'Point' },
  properties:
    { description: '',
      icon:
        { className: 'dot',
          iconAnchor: [ 25, 25 ],
          iconSize: [ 50, 50 ],
          iconUrl: 'assets/mugging.png',
          popupAnchor: [ 0, -25 ] },
      id: 1,
      title: 'Mugging' },
  type: 'Feature' }

var x = {
  id: 1,
  title: "Mugging",
  iconURL: "assets/mugging.png",
  coord: "",
  desc:""
}

test('it gets a crime object', function(t){
  var thing = getcrimeobject(x.id, x.title, x.iconURL, x.coord, x.desc)
  t.equal(thing, fakeData, 'it fails')

  t.ok(thing.properties)

  t.equal(thing.properties.description, '')



  t.end()
})
