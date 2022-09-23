
class Traveler {
  constructor(data) {
    this.id = data.id
    this.name = data.name
    this.travelerType = data.travelerType
  }

  findFirstName() {
    return this.name.split(' ', 1)[0]
  }
  setTravelerTrips(data, property) {
   this.trips = data.findTravelerTrips(this.id, property)
 }

 setTravelerDestinations(data) {
   this.destinations = data.findTravelerDestinations(this.trips)
 }
}



export default Traveler;
