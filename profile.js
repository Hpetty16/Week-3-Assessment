let color = document.getElementById(`color`)
let place = document.getElementById(`place`)
let ritual = document.getElementById(`ritual`)

function favColor(){
  
  alert(`My favorite color is Olive Green`);
	console.log('Fav color button clicked')
}

color.addEventListener(`click`,favColor)

function favPlace(){
  
  alert(`My favorite place is on the golf course or watching Anime`);
	console.log('Fav place button clicked')
}

place.addEventListener(`click`,favPlace)

function favRitual(){
  
  alert(`My favorite ritual is Waking up at 5am and doing my morning routine`);
	console.log('Fav ritual button clicked')
}

ritual.addEventListener(`click`,favRitual)