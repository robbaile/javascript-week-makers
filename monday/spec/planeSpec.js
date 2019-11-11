describe("Plane", function() {
    let Plane = require('../lib/plane');
    var plane;
    
    beforeEach(function() {
      plane = new Plane();
    });

    it('should have a random flight number generated', () => {
        expect(plane.flightNumber.length).toEqual(10)
    });
});