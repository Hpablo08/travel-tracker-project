
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
}



export default Traveler;
