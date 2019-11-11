class Plane {
    constructor() {
        this.flightNumber = this.generateFlightNumber();
    };

    generateFlightNumber() {
        let string = ""
        for (let index = 0; index < 10; index++) {
            string += `${Math.floor((Math.random() * 10))}`;
        }
        return string;
    };
};

module.exports = Plane
