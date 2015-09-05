/*
Once a seat is clicked, display html form.
When html form button is clicked, run function reserveSeat.
Function will hide form, update seat availability, addClass/removeClass.
*/

/* Step 1: Generate HTML */
// We set up a class named Theatre and pass name, number of seats, and id through its parameter
function Theatre(name, numberOfSeats, id){
	this.name = name;
	this.numberOfSeats = numberOfSeats;
	this.id = id;
}

//Add a method to the prototype of Theatre (through prototype inheritance, we can use "this" to refer to Theatre)
//The method returns the number of seats passed through Theatre
Theatre.prototype.getNumberOfSeats(){
	return this.numberOfSeats;
}

//Create a class for Seat, define the seat number's ID
function Seat(seatNumber){
	this.seatNumber = seatNumber;
	this.id ="seat_"+ this.seatNumber;
}




/* Step 2: When a div is clicked, have form pop up */



/* Step 3: Let user submit information on the form */



/* Step 4: Save user's information and associate it with the seat */