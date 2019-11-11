describe("Airport", function() {
    let Airport = require('../lib/airport');
    var airport;
    
    beforeEach(function() {
      airport = new Airport();
    });

    it("should have an empty hangar array", () => {
        expect(airport.hangar).toEqual([]);  
    });

    it("should be able to land a plane and add it to the hangar", () => {
      plane = {flightNumber: "01234"}
      airport.landPlane(plane);

      expect(airport.hangar.length).toEqual(1);
    });

    it("should not let more than capacity planes land", () => {
      plane = {flightNumber: "01234"}
    
      for (let index = 0; index < 20; index++) {
        airport.landPlane(plane); 
      }

      expect(() => airport.landPlane(plane)).toThrow();
      expect(airport.hangar.length).toEqual(20)
    });

    it("should let the ready plane take off", () => {
      plane = {flightNumber: "01234"}
      plane2 = {flightNumber: "12345"}
    
      for (let index = 0; index < 10; index++) {
        airport.landPlane(plane); 
      }
      airport.landPlane(plane2)
      airport.takeOff(plane2)

      expect(airport.hangar.filter(plane => plane.flightNumber == "12345").length).toEqual(0)
    });
});