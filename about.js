console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('form submitted');
	console.log('form  submitted')
}

function alertMouse (){
	alert(`give the user a compliment`)
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector(`img`)
image.addEventListener(`mouseover`, alertMouse)
