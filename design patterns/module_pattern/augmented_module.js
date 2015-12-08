// Augmented-Module pattern

// First we declare the MODULE
var MODULE = (function () {
	var my = {},
		privateVariable = 1;

	function privateMethod() {
		
	}

	my.moduleProperty = 1;
	my.moduleMethod = function () {
		
	};

	return my;
}());


// We instantiate the MODULE, augment/add to it, export it
// With this approach the module can be declared in another file
// and imported into a separate file and augmented
// 'var' is used again only for consistency
var MODULE = (function(my) {
	var counter = 0;
	
		my.incrementCounter = function() {
			return counter++;
		};

		my.resetCounter = function() {
			console.log("Counter value prior to reset" , counter);
			counter = 0;
		};
  
  return my;

})(MODULE);


// LOOSE AUGMENTATION pattern
// This way we create the module if it does not already exist
var MODULE = (function (my) {
	// add capabilities...

	return my;
}(MODULE || {}));


// Increment our counter
MODULE.incrementCounter();

// Check the counter value and reset
// Outputs: counter value prior to reset: 1
MODULE.resetCounter();

console.log(MODULE);