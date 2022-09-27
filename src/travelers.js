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
        const pastTripFlightCost = currentPastTrip.travelers * destination.estimatedFlightCostPerPerson
        const pastTripLodgingCost = currentPastTrip.duration * destination.estimatedLodgingCostPerDay
        acc += pastTripFlightCost + pastTripLodgingCost
      }
      return acc
    }, 0)
    const fee = total * .10
    const totalPlusFee = total + fee
    return totalPlusFee.toFixed(2)
  }
}

export default Traveler;
