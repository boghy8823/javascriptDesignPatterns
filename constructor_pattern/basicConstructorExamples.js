// Basic constructors

function car ( model, year, miles ){
	this.model = model;
	this.year = year; 
	this.miles = miles;

	this.toString = function() {
		return this.model + "has done " + this.miles + " miles";
	};
}

// Usage: 

// We can create new instances of the car
var civic = new Car("Honda Civic", 2009, 20000);
var mondeo = new Car("Ford Mondeo", 2015, 0);
var focus = new Car("Ford Focus", 2008, 160000);

// Will output:

console.log( civic.toString() );
console.log( mondeo.toString() );
console.log( focus.toString() );

/*  Problems
 * It makes inheritance difficult 
 * Functions such as toString() are redefined for each of the new objects created using the Car constructor
 */


/* A better solution
 * Construnctor with prototypes
 */

function sportsCar( model, year, miles ){
	this.model = model;
	this.year = year;
	this.miles = miles;
}

// A single instance of toString will now be shared between all of the sportsCar object
sportsCar.prototype.toString = function() {
	return this.model + " has done" + this.miles + " miles";
};

// Usage: 

var celica = new sportsCar( "Toyota Celica", 2009, 20000);
var porsche = new sportsCar( "Porsche Cayman", 2000, 65000);

console.log( celica.toString() );
console.log( porsche.toString() );