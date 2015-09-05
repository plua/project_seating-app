/*
Once a seat is clicked, display html form.
When html form button is clicked, run function reserveSeat.
Function will hide form, update seat availability, addClass/removeClass.
*/

// Get HTML form button ID, wait for the button to be clicked, then run function reserveSeat
document.getElementById("assign").addEventListener('click', reserveSeat)

function reserveSeat(){

}

/* Step 1: Generate HTML */

 function Theatre(name,numberOfSeats,id) {
 	this.name = name;
 	this.numberOfSeats = numberOfSeats;
 	this.id = id;
 }

/* Step 2: When a div is clicked, have form pop up */



/* Step 3: Let user submit information on the form */



/* Step 4: Save user's information and associate it with the seat */