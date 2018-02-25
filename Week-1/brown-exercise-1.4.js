/*
============================================
; Title:  Exercise 1.4
; Author: Professor Krasso, Jared Brown 
; Date:   21 Feburary 2018
; Modified By: Jared Brown
; Description: Quack Quack, an exercise in
; duck typing.  
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 1.4");
console.log(headerMsg + "\n".repeat(2));

/**
 * The Constructor function for the
 * car object.
 * 
 * @param {any} model 
 */
function Car(model){
    this.model = model;
}

Car.prototype.start = function(){
    console.log( this.constructor.name + " Added to the Racetrack!");
}
/**
 * The constrcutor function for the
 * Truck Object.
 * 
 * @param {any} model 
 * @param {any} year 
 */
function Truck(model, year){
    this.model = model;
    this.year = year;
}

Truck.prototype.start = function(){
    console.log( this.constructor.name + " Added to the Racetrack!");
}

/**
 * The constructor function for the
 * Jeep object.
 * 
 * @param {any} model 
 * @param {any} year 
 * @param {any} color 
 */
function Jeep(model, year, color){
    this.model = model;
    this.year = year;
    this.color = color;
}

Jeep.prototype.start = function(){
    console.log( this.constructor.name + " Added to the Racetrack!");
}

var racetrack = [];

/**
 * Adds Calls the start() method on the given
 * object and then pushes it to the
 * racetrack array.
 * 
 * @param {any} vehicle 
 */
function driveIt(vehicle){
    vehicle.start();
    racetrack.push(vehicle);
}

var camry = new Car("Camry");
var tundra = new Truck("Tundra", "2016");
var fjCruiser = new Jeep("FJ Cruiser", "2009", "Blue");

driveIt(camry);
driveIt(tundra);
driveIt(fjCruiser);

console.log("-- The following vehicles have been added to the racetrack --");
racetrack.forEach(x =>{
    console.log(x.constructor.name + ": " + x.model);
})
