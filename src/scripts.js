import { fetchData, postData } from './apiCalls';
import './css/styles.css';
import Repository from './repository';
import Session from './session';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
import './images/turing-logo.png'
// GLOBAL DATA ***************************************************


// FETCH DATA *****************************************************

Promise.all([fetchData("travelers"), fetchData("trips"), fetchData("destinations")])
  .then((repos) => {
    setData(repos);
  });
