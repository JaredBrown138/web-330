/**
 * Author: Jared Brown
 * Created: February 22, 2018
 * Comments: Example for Week 1 if WEB-330
 * 
**/
function Bread(){
    this.density = 5,
    this.crustThickness = 3,
    this.hasSeeds = false,
    this.length = 12,
    this.hasBeenConsumed = false;
    
    //Method Definition in Constructor Function
    this.consume = function(){
        console.log("A loaf of bread has been consumed");
    }
}
//Method Definition outside of constructor function using prototype of the constructor.
Bread.prototype.discard = function(){
    console.log("The loaf of bread has been discarded! " +
        "Now we wait for the garbage collector"); 
}

var goodBread = new Bread();
var badBread = new Bread();

goodBread.consume();
badBread.discard();

/**
 *  Output:
 *  A loaf of bread has been consumed
 *  The loaf of bread has been discarded!Now we wait for the garbage collector
 * 
 */