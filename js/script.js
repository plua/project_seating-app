/* Step 1: Generate HTML */
var wrapper = document.getElementById('wrapper');
var form = document.getElementById('form');;
var theatre = {
	name: 'Grand Circus Theatre',
	numberOfSeats: 24
}
function createSeats(){
 for (var i = 1; i < theatre.numberOfSeats+1; i++){
  var element = document.createElement('div');
   element.id = "seat_"+i;
   element.className= 'available';
   element.innerHTML = i;
   element.addEventListener('click', showForm);
   wrapper.appendChild(element);
 }
};
createSeats();

/* Step 2: When a div is clicked, have form pop up */

function showForm(id){
	var picked = document.getElementById('picked_seat');
	form.style.display = "block";
	var currentSeat = document.getElementById('current_seat');
	currentSeat.value = this.id;
	picked.innerText = "You have chosen to reserve seat " + this.id.substr(5,6);
};

/* Step 3: Let user submit information on the form */

var formButton = document.getElementById('formButton');
formButton.addEventListener('click', getFormData);
function getFormData() {
	var formName = document.getElementById('form_name');
	var formEmail = document.getElementById('form_email');
	var formSeat = document.getElementById('current_seat');
	var reservationName = formName.value;
	var reservationEmail = formEmail.value;
	var reservationSeat = formSeat.value;
	document.getElementById(reservationSeat).className="unavailable";
	appendFormData(reservationName, reservationEmail, reservationSeat);
}
function appendFormData(name,email,seat){
	var reservationInfo = document.createElement('div');
	form.style.display = "none";
	reservationInfo.id = seat;
	reservationInfo.className= 'unavailable';
   	reservationInfo.innerHTML = name, email;
   	reservationInfo.appendChild(element);	
}

/* Step 4: Save user's information and associate it with the seat */

