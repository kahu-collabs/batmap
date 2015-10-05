var test = require('tape')
var testType = require('../source/map/testType')

var fakeType1 = "Joker Gassing"

test('it returns the correct number of crime type', function(t) {
  t.plan(1)
  var actualResult = testType (fakeType1)
  var expectedResult = 1

  t.equal(actualResult, expectedResult, 'it works')


})
