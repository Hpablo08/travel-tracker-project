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
const totalMoneySpent = document.querySelector('.total-money-spent')
const displayInputForm = document.querySelector('.trip-request-section')
const requestTripBtn = document.querySelector('.trip-request-btn')
const bookBtn = document.querySelector('.book-trip-btn')
const destinationChoices = document.querySelector('#mySelect')
const tripForm = document.querySelector('.trip-form')

const tripEstimate = document.querySelector('.trip-estimate')
const displayEstimateBtn = document.querySelector('.display-estimate')

//const userName = document.querySelector('.userName')
const password = document.querySelector('.password')
const logInBtn = document.querySelector('.log-in-btn')
const displayLogInForm = document.querySelector('.log-in-section')
const submitLoginBtn = document.querySelector('.submit-login')



// EVENT LISTENERS ************************************************
submitLoginBtn.addEventListener('click', loginTraveler)
requestTripBtn.addEventListener('click', displayDataForm)
bookBtn.addEventListener('click', checkButtonPushed)
logInBtn.addEventListener('click', displayLogIn)
displayEstimateBtn.addEventListener('click', collectInputFormData)
//displayEstimateBtn.addEventListener('click', calcSingleTrip)

// GLOBAL DATA ***************************************************

let currentTraveler
let tripRepository
let destinationRepository
let randomTraveler
let newId
let bookButton



// FETCH DATA *****************************************************
function loginTraveler() {
let userNameNumber = userName.value.slice(8)
    Promise.all([fetchData(`travelers/${userNameNumber}`), fetchData("trips"), fetchData("destinations")])
      .then(data => {
        setData(data)
      })
}

function checkUsername(){

}

function checkPassword() {

}
//
// Promise.all([fetchData("travelers"), fetchData("trips"), fetchData("destinations")])
//   .then((data) => {
//     setData(data);
//     console.log('promise', data[0])
//   });


function setData(data) {
  randomTraveler = new Traveler(data[0])
  tripRepository = new Repository(data[1].trips)
  destinationRepository = new Repository(data[2].destinations)

  //randomTraveler = getRandomTraveler(currentTraveler.data)
  randomTraveler.setTravelerData(tripRepository, 'trips', 'userID')
  randomTraveler.setTravelerDestinations(destinationRepository)
  console.log('random', randomTraveler)
  displayData()
}

// function getRandomTraveler(users) {
//   const randomIndex = Math.floor(Math.random() * users.length)
//   const randomTravelerData = currentTraveler.findTraveler(randomIndex, 'id')
//   return new Traveler(randomTravelerData[0])
// }

function displayData() {
  displayTravelerData()
  displayDestinations()
  randomTraveler.calcMoneySpent()
  displayDestinationOptions()
}

function displayTravelerData() {
  travelerName.innerText = randomTraveler.findFirstName()
  totalMoneySpent.innerText = randomTraveler.calcMoneySpent()
}

function displayDestinations() {
  const todaysDate = new Date().toISOString().slice(0, 10).split('-').join('/')

  randomTraveler.trips.forEach(trip => {
    const travelerDestinations = randomTraveler.destinations.find(destination => trip.destinationID === destination.id)
    if (trip.status === 'pending') {
      createTripCards('Pending Trip', travelerDestinations, trip)
    } else if (trip.date < todaysDate) {
      createTripCards('Past Trip', travelerDestinations, trip)
    } else {
      createTripCards('Upcoming Trip', travelerDestinations, trip)
    }
  })
}

function createTripCards(status, travelerDestinations, trip) {
  //  cardsContainer.innerHTML = ""
  cardsContainer.innerHTML += ` <article class='card'>
        <img class="card-img" src="${travelerDestinations.image}" alt="${travelerDestinations.alt}">
        <section class='card-description'>
          <h3 class='destination-name'>${travelerDestinations.destination}</h4>
          <h4>${trip.date}</h4>
          <h4 class='trip-status'>${status}</h4>
        </article>
      `
}

function displayDataForm() {
  displayInputForm.classList.toggle('hidden')
  const todaysInputDate = new Date().toISOString().slice(0, 10)
  console.log(todaysInputDate)
  const tripDate = document.getElementById("tripDate").min = `${todaysInputDate}`
  tripForm.reset()
}

function checkButtonPushed() {
  console.log('it was clicked')
  let bookButton = true
  collectInputFormData(bookButton)
}

function collectInputFormData(bookButton) {
  const selectedDestination = destinationChoices.options[destinationChoices.selectedIndex].value
  const matchDestinationId = destinationRepository.data.find(destination => destination.destination === selectedDestination)
  let idNumberArray = tripRepository.data.map((trip) => trip.id)
  let newId = idNumberArray.length + 1

  let travelerInputData = {
    id: newId,
    userID: randomTraveler.id,
    destinationID: matchDestinationId.id,
    travelers: parseInt(numOfTravelers.value),
    date: tripDate.value.split('-').join('/'),
    duration: parseInt(tripDuration.value),
    status: 'pending',
    suggestedActivities: []
  }
  if (bookButton === true){
    postData('trips', travelerInputData)
    createTripCards('Pending Trip', matchDestinationId, travelerInputData)
    tripRepository.data.push(travelerInputData)
    calcSingleTrip(travelerInputData)
  }
  else {
    calcSingleTrip(travelerInputData)
  }
}

function calcSingleTrip(inputData) {
  const currentDestinationID = inputData.destinationID
  const total = destinationRepository.data.reduce((acc, destination) => {
    if (currentDestinationID === destination.id) {
      const currentFlightCost = inputData.travelers * destination.estimatedFlightCostPerPerson
      const currentLodgingCost = inputData.duration * destination.estimatedLodgingCostPerDay
      acc += currentFlightCost + currentLodgingCost
    }
    return acc
  }, 0)
  const fee = total * .10
  const totalPlusFee = total + fee
  const estimate = totalPlusFee.toFixed(2)
  let bookButton = false
  return tripEstimate.innerHTML = `<h2>Your estimate is: ${estimate} </h2>`
}

function displayDestinationOptions() {
  const sortedDestinations = destinationRepository.getAllDestinations(destinationRepository)
  const showDestinations =
    sortedDestinations.forEach((destination) => {
      var options = document.createElement("OPTION")
      options.setAttribute("value", `${destination}`)
      var destinations = document.createTextNode(`${destination}`)
      options.appendChild(destinations)
      document.getElementById("mySelect").appendChild(options)
    })
  return showDestinations
}

// function displayBookedTrip() {
//   collectInputFormData()
//   postData('trips', travelerInputData)
//   createTripCards('Pending Trip', matchDestinationId, travelerInputData)
// }

function displayLogIn() {
  displayLogInForm.classList.toggle('hidden')
}

function displayEstimate() {
  collectInputFormData()
}
