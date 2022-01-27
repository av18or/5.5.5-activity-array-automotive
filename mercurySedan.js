
// imports our Vehicle class from ''.
import Vehicle from 'vehicleBaseClass.js';  

//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)


// class with constructor and super keyword
class Car extends Vehicle {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);

        // add all properties
        this.maxPassengers = 6;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 200;
        this.fuel = 100;
        this.mileage = mileage;
        scheduleService = false;
    }


    scheduleService(mileage) {
        if (this.mileage > 10000) {
            this.scheduleService == true 
            return this.scheduleService;
        }
    }


    loadPassenger(num) {
        if (this.passenger < this.maxPassengers) {
            if ((num + this.passenger) <= this.maxPassengers) {
                this.passenger = num;
                return this.passenger;
            } else {
                console.log(this.model + " " + this.make + " we don't have enough room for all of you! " );
            }
        } else {
            console.log(this.model + " " + this.make + " is at maximum capacity");
        }
    }




}


