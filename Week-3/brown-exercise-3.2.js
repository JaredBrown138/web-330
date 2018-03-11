/*
============================================
; Title:  Exercise 3.2
; Author: Professor Krasso, Jared Brown 
; Date:   11 March 2018
; Description: A short exercise in using 
; factories
;===========================================
*/ 


var header = require('../header.js');
var headerMsg = header.display("Jared", "Brown", "Exercise 3.2");
console.log(headerMsg + "\n".repeat(2)); 


// start program
function Postgres(properties) {
    this.username = properties.username || "admin";
    this.password = properties.password || "s3cret";
    this.server = properties.server || "localhost:5432";
}

function MySql(properties) {
    this.username = properties.username || "ca-admin";
    this.password = properties.password || "ca-s3cret";
    this.server = properties.server || "localhost:8000";
    this.version = properties.version || 5.7
}

function Oracle(properties){
    this.username = properties.username || "administrator";
    this.password = properties.password || "password";
    this.server = properties.server || "localhost:8080";
    this.version = properties.version || 1.3
}

function Informix(properties){
    this.username = properties.username || "@dmin";
    this.password = properties.password || "coolkidsonly";
    this.server = properties.server || "localhost:8001";
}
function DatabaseFactory() {}

DatabaseFactory.prototype.databaseClass = MySql;
DatabaseFactory.prototype.createDatabase = function(properties) {
    if (properties.databaseType === "Postgres") {
        this.databaseClass = Postgres;
    } 
    if (properties.databaseType === "MySql") {
        this.databaseClass = MySql;
    }
    if (properties.databaseType === "Oracle") {
        this.databaseClass = Oracle;
    } 
    if (properties.databaseType === "Informix") {
        this.databaseClass = Informix;
    }
    return new this.databaseClass(properties);
};

var postgresFactory = new DatabaseFactory();
var postgres = postgresFactory.createDatabase({
    databaseType: "Postgres",
    username: "admin",
    password: "SuperSecret"
});

var mySqlFactory = new DatabaseFactory();
var mySql = mySqlFactory.createDatabase({
    databaseType: 'MySQL',
    username: "default",
    password: "password"
});

var oracleFactory = new DatabaseFactory();
var oracle = oracleFactory.createDatabase({
    databaseType: "Oracle",
    username: "H4KeRmAn",
    password: "hunter1"
});

var informixFactory = new DatabaseFactory();
var informix = informixFactory.createDatabase({
    databaseType: "Informix",
    username: "GreyHat01",
    password: "*******"
});

console.log(oracle);
console.log(informix)
