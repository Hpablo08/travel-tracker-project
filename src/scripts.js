import {
  fetchData,
  postData
} from './apiCalls';
import './css/styles.css';
import Repository from './repository';
import Traveler from './travelers';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// DOM ELEMENTS ***************************************************
const travelerName = document.querySelector('.display-name')
const destinations = document.querySelector('.destination-name')
const upcomingTrips = document.querySelector('.upcoming-destination')
const pastTrips = document.querySelector('.past-destination')
const tripStatus = document.querySelector('.trip-status')
const cardsContainer = document.querySelector('.cards-container')
//const todaysDate

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



function displayData() {
  displayTravelerData()
  displayDestinations()
  randomTraveler.calcMoneySpent()
}

function displayTravelerData() {
  travelerName.innerText = randomTraveler.findFirstName()

}

function displayDestinations() {
  // need to set date of today to access the past and future trips
  // const todaysDate = new Date().toLocaleDateString().split('/').reverse().join('/')
  const todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')
  console.log(todaysDate)

  randomTraveler.trips.forEach(trip => {
      const travelerDestinations = randomTraveler.destinations.find(destination => trip.destinationID === destination.id)
      if (trip.status === 'pending') {
       displayTripCards('Pending Trip',travelerDestinations, trip)
      }
      else if(trip.date < todaysDate) {
     //pastTrips.innerText += travelerDestinations.destination
       displayTripCards('Past Trip',travelerDestinations, trip)
      }
      else {
        displayTripCards('Upcoming Trip',travelerDestinations, trip)
      }
      })
  }


function displayTripCards(status, travelerDestinations, trip) {
  //cardsContainer.innerHTML = ""
  cardsContainer.innerHTML += ` <article class='card'>
        <img class="card-img" src="${travelerDestinations.image}" alt="${travelerDestinations.alt}">
        <section class='card-description'>
          <h4 class='destination-name'>${travelerDestinations.destination}</h4>
          <p>${trip.date}</p>
          <h4 class='trip-status'>${status}</h4>
        </article>
      `
}
  //this gets me to the destination
  // const destination = randomTraveler.destinations.map((place) => place.destination)
  // if (trip.date < todaysDate){

  // }

//randomTraveler.trips.status === 'approved' vs pending
// compare trip.date


// 8/3/2018
// let today = new Date().toLocaleDateString()
// console.log(today)

//2018-08-03
//let today = new Date().toISOString().slice(0, 10)
//console.log(today)










// EVENT LISTENERS ************************************************


// EVENT HANDLERS *************************************************
