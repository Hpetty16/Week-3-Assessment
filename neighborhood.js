let restButton = document.querySelector(`button`)
let result = document.querySelector(`h3`)

let randoRestaurant = [`J. Alexanders`,`Stoney River Steak House`,`benihana`,`Sedona Taphouse`, `Eddie V's`,`Season 52`,`Yard House`,`Andiamos`, `Mortons Steak House`,`Cooper's Hawk`]

// const randomButton = math.floor(math.random() * localRestaurants.length)
// console.log (random, localRestaurants[randomButton])

function getRandomRestaurant(min,max){
  let step1 = max - min + 1;
  let step2 = Math.random() * step1;
  let result = Math.floor(step2) + min;

  return result;
}

restButton.addEventListener(`click`, () => {
  let index = getRandomRestaurant(0, randoRestaurant.length - 1);
  result.innerText= randoRestaurant[index];
});
