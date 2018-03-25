
var globalVarName = (function(){
    
    var privateVar = "This is a private variable!";

    return {
        getPrivateVar: function(){
            return privateVar;
        },

        publicVar: "This is a public variable",
    }

})();

//Calls made from the global scope:

console.log(globalVarName.getPrivateVar());
//Returns: This is a private variable
console.log(globalVarName.privateVar);
//Returns: Undefined
console.log(privateVar);
//Returns: Error, privateVar is not defined.
console.log(publicVar);
//Returns: Error, publicVar is not defined. 
console.log(globalVarName.publicVar);
//Returns: This is a public variable