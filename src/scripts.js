import { fetchData, postData } from './apiCalls';
import './css/styles.css';
// GLOBAL DATA ***************************************************


// FETCH DATA *****************************************************
Promise.all([fetchData("travelers"), fetchData("trips"), fetchData("destinations")])
  .then((repos) => {
    setData(repos);
  });
