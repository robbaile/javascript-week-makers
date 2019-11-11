class Airport {
    constructor() {
        this.hangar = [];
        this.capacity = 20;
    }

    landPlane(plane) {
        if(this.hangar.length == this.capacity) {
            throw new Error("The hangar is full!")
        };

        this.hangar.push(plane)
    }

    takeOff(readyPlane) {
        this.hangar = this.hangar.filter(plane => plane.flightNumber != readyPlane.flightNumber)
    }
}

module.exports = Airport;