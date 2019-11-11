describe("when song has been paused", function() {
    let Airport = require('../lib/airport');
    var airport;
    
    beforeEach(function() {
      airport = new Airport();
    });

    it("should have an empty hangar array", function() {
        expect(airport.hangar).toEqual([]);  
    });
});
