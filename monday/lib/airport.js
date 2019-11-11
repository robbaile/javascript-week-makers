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
}

module.exports = Airport;