
class Traveler {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.travelerType = data.travelerType
  }

  findFirstName() {
    return this.name.split(' ', 1)[0]
  }

  setTravelerData(repo, dataArray, property) {
   this[dataArray] = repo.findTraveler(this.id, property)
  }

  setTravelerDestinations(dataset) {
    this.destinations = dataset.findDestinations(this.trips);
  }

  calcMoneySpent() {
  const pastTrips = this.trips.filter((trip) => trip.date > '2022/01/01').map((trip) => trip.destinationID)
  const total = this.destinations.reduce((acc, destination) => {
    if (pastTrips.includes(destination.id)) {
      const currentPastTrip = this.trips.find((trip) => trip.destinationID === destination.id)
      //console.log('trip', currentPastTrip)
      const pastTripFlightCost = currentPastTrip.travelers * destination.estimatedFlightCostPerPerson
      //console.log('COST flight', pastTripFlightCost)
      const pastTripLodgingCost = currentPastTrip.duration * destination.estimatedLodgingCostPerDay
    //  console.log('LODGING', pastTripLodgingCost)
      acc += pastTripFlightCost + pastTripLodgingCost
    //  console.log('TOTAL', acc)
      }
      return acc
 }, 0)
  const fee = total * .10
  //console.log('fee', fee)
  const totalPlusFee = total + fee
  return totalPlusFee.toFixed(2)
  //console.log('total with fee', totalPlusFee)
  // i want to use the past trips array and use it to find the destination ID
  // then use those destinations properties to calculate the total const
  // then return

  }
}



export default Traveler;
