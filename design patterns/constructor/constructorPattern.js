

/* Constructor pattern
 * There are four ways in which 
 * keys and values can then be assigned to an object.
 * Thereby "constructing" or "creating" an object.
 */

var newObject = {};

 // 1. Dot syntax 

 // Set properties
 newObject.somekey = "Hello there, newObject";

 // Get properties
 var value = newObject.somekey;


 // 2. Square bracket syntax

 // Set properties
 newObject["somekey"] = "Hello World";

 // Get properties 
 var value = newObject["somekey"];




 /*
  * ECMAScript 5 only compatible approaches
  */
 
 // 3. Object.defineProperty
 
 var person = Object.create(Object.prototype);

 // Set Properties
 Object.defineProperty( newObject, "somekey", { 
 	value: "We have more control over the property behaviour",
 	writable: true,
 	enumerable: true,
 	configurable: true
 });

 defineProp(person, "car", "Delorean");

 // Get values 
 var value = person.car;

 // 4. Object.defineProperties

 // Set properties
 Object.defineProperties(newObject, {
 	"someKey" : {
 		value: "Hello there",
 		writable: "true"
 	},
 	"anotherKey" : {
 		value: "John",
 		writable: false
 	}
 });

 // Get values 
 var value = person.car;
 
