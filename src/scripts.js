import {
  fetchData,
  postData
} from './apiCalls';
import './css/styles.css';
import Repository from './repository';
import Traveler from './travelers';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// GLOBAL DATA ***************************************************

let currentTraveler
let tripRepository
let destinationRepository
let randomTraveler

// FETCH DATA *****************************************************

Promise.all([fetchData("travelers"), fetchData("trips"), fetchData("destinations")])
  .then((data) => {
    setData(data);
    console.log('promise', data[0])
  });

function setData(data) {
  currentTraveler = new Repository(data[0].travelers)
  tripRepository = new Repository(data[1].trips)
  destinationRepository = new Repository(data[2].destinations)
  randomTraveler = getRandomTraveler(currentTraveler.data)
  randomTraveler.setTravelerData(tripRepository, 'trips', 'userID')
  randomTraveler.setTravelerDestinations(destinationRepository);

  console.log('random', randomTraveler)
  displayData()
}

function getRandomTraveler(users) {
  const randomIndex = Math.floor(Math.random() * users.length);
  const randomTravelerData = currentTraveler.findTraveler(randomIndex, 'id');
  return new Traveler(randomTravelerData[0]);
}

const travelerName = document.querySelector('.display-name')

function displayData() {
  displayTravelerData()
  displayTravelerData
  //travelerName.innerText = currentTraveler.name
  //  travelerName.innerText = 'Hazel'
}

function displayTravelerData() {
  travelerName.innerText = randomTraveler.findFirstName()

}




// DOM ELEMENTS ***************************************************


// EVENT LISTENERS ************************************************
// EVENT HANDLERS *************************************************
