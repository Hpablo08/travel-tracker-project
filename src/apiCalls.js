import { displayDataForm } from './scripts.js';

function fetchData(repo) {
  return fetch(`http://localhost:3001/api/v1/${repo}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Not a 200 status');
        }
        console.log('you are getting the data')
        return response.json();
      })
      .catch(error => {
        alert('Oops, something went wrong. Try refreshing your page.');
      })
}

export { fetchData }
