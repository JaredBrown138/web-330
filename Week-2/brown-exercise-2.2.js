/*
============================================
; Title:  Exercise 2.2
; Author: Jared Brown 
; Date:   26 Feburary 2018
; Description: A short exercise in using 
; object literals for prototyping. 
;===========================================
*/ 

var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 2.2");
console.log(headerMsg + "\n".repeat(2));

var Person = {
/**
 * A getter function which 
 * returns this.age
 * 
 * @returns this.age
 */
getAge: function(){
        return this.age;
    }
}

var Albert = Object.create(Person, {
    age: {
        value: "25"
    },
    fullname: {
        value: "Albert Johnson"
    }

});

console.log(Albert.fullname);
console.log(Albert.getAge());