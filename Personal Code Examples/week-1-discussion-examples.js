
/**
 * Author: Jared Brown
 * Created: February 22, 2018
 * Comments: Example for Week 1 if WEB-330
 * 
**/
function User(name, age, flavor){
    this.name = name;
    this.age = age;
    this.flavor = flavor;
}

User.prototype.toString = function(){
    return this.name + " is " + this.age + " and their " +
        "favorite flavor of ice cream is " + this.flavor + ".";
} //Will work because "this" refers to the object which callls this method 

User.prototype.nameAndAge = this.name + " " + this.age; //Will not work

var example = new User("Dave", 20, "chocolate");
console.log(example.toString());
/*
    Output: 
    Dave is 20 and their favorite flavor of ice cream is chocolate.
*/
console.log(example.nameAndAge);
/*
    Output: 
    undefined undefined
*/


