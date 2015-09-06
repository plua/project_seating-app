
/* Step 1: Generate HTML */

var wrapper = document.getElementById('wrapper');

var theatre = {
	name: 'Grand Circus Theatre',
	numberOfSeats: 24
}

function createSeats(){
	for (var i = 1; i < theatre.numberOfSeats+1; i++){
	var id = "seat_" + i;
	wrapper.innerHTML += '<div id="'+ id +'">'+ "A" + i +'</div';
	document.getElementById(id).className= 'available';	
	}
}

createSeats();


/* Step 2: When a div is clicked, have form pop up */




/* Step 3: Let user submit information on the form */




/* Step 4: Save user's information and associate it with the seat */




//Please keep the code below, I may build upon it or scrap it. -Pam

/*
//Created a class named Theatre and passed name, number of seats, and seat id through its parameter
 function Theatre(name,numberOfSeats,id) {
 	this.name = name;
 	this.numberOfSeats = numberOfSeats;
 	this.id = id;
 }

//We are adding a method getNumOfSeats to the prototype of Theatre
//prototype is used so that javascript knows that everytime we create an instance of Theatre, it has a method called getNumOfSeats.
//The method returns the number of seats passed through Theatre. This refers to our theatre object. 
Theatre.prototype.getNumOfSeats = function(){
	return this.numberOfSeats;
};

//Created a class name Seat which we'll pass in the seatNumber through its parameters
//We are taking the id of Seat and setting it equal to what will become the id of our seat divs
function Seat(seatNumber){
	this.seatNumber = seatNumber;
	this.id = "seat_" + this.seatNumber;
}
*/