/*
============================================
; Title:  Exercise 1.3
; Author: Professor Krasso, Jared Brown 
; Date:   21 Feburary 2018
; Modified By: Jared Brown
; Description: Quick Review of Object
; constructors. 
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 1.3");
console.log(headerMsg + "\n".repeat(2)); 

const NEWLINE = "\n";

/**
 * The constructor function for the
 * CellPhone Object.
 * 
 * @param {any} manufacturer 
 * @param {any} model 
 * @param {any} color 
 * @param {any} price 
 */
function CellPhone(manufacturer, model, color, price){
    this.manufacturer = manufacturer;
    this.model = model;
    this.color = color;
    this.price = price;
    
    /**
     * Getter method for the price
     * property
     * 
     * @returns {any} this.price
     */
    this.getPrice = function(){
        return this.price;
    }
    /**
     * Getter method for the model
     * property
     * 
     * @returns {any} this.model
     */
    this.getModel = function(){
        return this.model;
    }
    /**
     * Prints out general information
     * about the phone object
     * 
     * @returns void
     */
    this.getDetails = function(){
        var printString = "Manufacturer: " + this.manufacturer + NEWLINE+ "Model: " + this.getModel() +
            NEWLINE + "Color: " + this.color + NEWLINE + "Price: " + this.getPrice();
        console.log(printString);    
    }
}

var myCellPhone = new CellPhone( "Samsung", "Galaxy Note 4", "Black", "$300");
myCellPhone.getDetails();

