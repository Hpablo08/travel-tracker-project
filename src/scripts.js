import { fetchData, postData } from './apiCalls';
import './css/styles.css';
import Repository from './repository';
import Traveler from './travelers';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// GLOBAL DATA ***************************************************

let currentTraveler
let tripData
let destinationData

// FETCH DATA *****************************************************

Promise.all([fetchData("travelers"), fetchData("trips"), fetchData("destinations")])
  .then((data) => {
    setData(data)
  })

function setData(data) {
  currentTraveler = new Traveler(data[0])
  tripData = new Repository(data[1].trips)
  destinationData = new Repository(data[2].destinations)
  currentTraveler.setTravelerTrips(tripData, 'userID')
  currentTraveler.setTravelerDestinations(destinationData)
  displayData()
  }

  function displayData() {
    
  }
// DOM ELEMENTS ***************************************************
// EVENT LISTENERS ************************************************
// EVENT HANDLERS *************************************************
