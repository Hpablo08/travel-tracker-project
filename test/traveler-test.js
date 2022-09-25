import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/travelers.js'
import Repository from '../src/repository.js'
import destinationData from '../src/data/destination-data.js'
import tripsData from '../src/data/trips-data.js'
import travelersData from '../src/data/traveler-data.js'


describe('Traveler', function() {
  let traveler1
  let traveler2
  let destinationRepo
  let tripRepo

beforeEach(() => {
    traveler1 = new Traveler(travelersData[0]),
    traveler2 = new Traveler(travelersData[1]),
    destinationRepo = new Repository(destinationData),
    tripRepo = new Repository(tripsData)
})
  it('should be a function', () => {
    expect(Traveler).to.be.a('function')
  })

  it('should be an instance of traveler', () => {
    expect(traveler1).to.be.instanceOf(Traveler)
    expect(traveler2).to.be.instanceOf(Traveler)
  })

  it('should have an id for traveler', () => {
    expect(traveler1.id).to.equal(1)
    expect(traveler2.id).to.equal(2)
  })

  it('should have a name for traveler', () => {
    expect(traveler1.name).to.equal('Ham Leadbeater')
    expect(traveler2.name).to.equal('Rachael Vaughten')
  })

  it('should have a travelerType', () => {
    expect(traveler1.travelerType).to.equal('relaxer')
    expect(traveler2.travelerType).to.equal('thrill-seeker')
  })

  it('should return a traveler name', () => {
    expect(traveler1.findFirstName()).to.equal('Ham')
  })

  it("should have a property that stores trip data", () => {
    traveler1.setTravelerData(tripRepo, 'trips', 'userID')
    traveler2.setTravelerData(tripRepo, 'trips', 'userID')
    expect(traveler1).to.have.property('trips')
    expect(traveler2).to.have.property('trips')
  })

  it('should have a property that stores destination data', () => {
    traveler1.setTravelerData(tripRepo, 'trips', 'userID')
    traveler2.setTravelerData(tripRepo, 'trips', 'userID')
    traveler1.setTravelerDestinations(destinationRepo)
    traveler2.setTravelerDestinations(destinationRepo)
    expect(traveler1).to.have.property('destinations')
    expect(traveler2).to.have.property('destinations')
  })

  it('should calculate an average for trips this year', () => {
    traveler1.setTravelerData(tripRepo, 'trips', 'userID')
    traveler2.setTravelerData(tripRepo, 'trips', 'userID')
    traveler1.setTravelerDestinations(destinationRepo)
    traveler2.setTravelerDestinations(destinationRepo)
    expect(traveler1.calcMoneySpent()).to.equal('0.00')
    expect(traveler2.calcMoneySpent()).to.equal('6270.00')
  })

})
