
let myHeros = ["thor", "spiderman"]
let heroPower = {
    thor : "hammer",
    spiderman : "sling",

    getSpiderpower : function(){
        console.log(`spider power is ${this.spiderman}`)
    }
}

Object.prototype.newMethod = function(){
    console.log("new method is a method of this object")
}

heroPower.newMethod()
myHeros.newMethod()

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()