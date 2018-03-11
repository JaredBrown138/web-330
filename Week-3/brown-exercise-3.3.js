/*
============================================
; Title:  Exercise 3.3
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: A short exercise in using 
; the singleton pattern.
;===========================================
*/ 


var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 3.2");
console.log(headerMsg + "\n".repeat(2)); 

var DatabaseSingleton = (function(){
    var instance;
    function createInstance(){
        var postgressDatabase = new Object("Database instance has been intialized");
        return postgressDatabase;
    }
    return{
        /**
         * If no instance exists, create one, otherwise
         * return the existing instance. 
         */
        getInstance: function(){
            if(!instance){
                instance = createInstance();
            }
            return instance;
        }
    }
})();

function databaseSingletonTest(){
    var oracle = DatabaseSingleton.getInstance();
    var postgres = DatabaseSingleton.getInstance();
    console.log("Same database instance?", oracle === postgres);
}
databaseSingletonTest();