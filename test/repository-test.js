import chai from 'chai';
const expect = chai.expect;
import Traveler from '../src/travelers.js'
import Repository from '../src/repository.js'
import destinationData from '../src/data/destination-data.js'
import tripsData from '../src/data/trips-data.js'
import travelersData from '../src/data/traveler-data.js'

describe('Repository', function() {
  let traveler1
  let traveler2
  let destinationRepo
  let tripRepo
  let travelerRepo

  beforeEach(() => {
      traveler1 = new Traveler(travelersData[0]),
      traveler2 = new Traveler(travelersData[1]),
      travelerRepo = new Repository(travelersData)
      destinationRepo = new Repository(destinationData),
      tripRepo = new Repository(tripsData)
  })
    it('should be a function', () => {
      expect(Repository).to.be.a('function')
    })

    it('should have a property that stores data', () => {
    expect(travelerRepo.data).to.equal(travelersData)
    expect(destinationRepo.data).to.be.equal(destinationData)
    expect(tripRepo.data).to.be.equal(tripsData)
  })

    it('should be able to find user data given a user ID', () => {
    traveler1 = travelerRepo.findTraveler(1 ,'id')
    traveler2 = travelerRepo.findTraveler(2, 'id')

    expect(traveler1[0]).to.equal(travelersData[0])
    expect(traveler2[0]).to.equal(travelersData[1])

    })

    it('should be able to find destinations', () => {
    traveler1 = travelerRepo.findDestinations(tripsData)

  expect(travelerRepo.findDestinations(tripsData)).to.deep.equal([{
    id: 2,
    name: "Rachael Vaughten",
    travelerType: "thrill-seeker"
    }])
  });

    it('should be able to get all destination and sort alphabetically', () => {
    let allDestinations =  destinationRepo.getAllDestinations(destinationRepo)

    expect(allDestinations).to.deep.equal(['Cartagena, Colombia', 'Jakarta, Indonesia', 'Lima, Peru', 'Madrid, Spain', 'Stockholm, Sweden', 'Sydney, Austrailia'])

    })
})
