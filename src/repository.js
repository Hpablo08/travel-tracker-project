
class Repository {
  constructor(data) {
    this.data = data
  }

  findTraveler(id, property) {
    return this.data.filter(trip => trip[property] === id)
  }

  findDestinations(destinationRepository) {
    const tripDestinationIDs = destinationRepository
      .map(trip => trip.destinationID)

    return this.data.reduce((acc, destination) => {
      if (tripDestinationIDs.includes(destination.id)) {
        acc.push(destination)
      }
      return acc
    }, [])
  }
}

export default Repository
