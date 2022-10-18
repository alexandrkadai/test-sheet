const fetch = require('node-fetch');
const getPeople = (fetch) => {
  return fetch('https://swapi.py4e.com/api/people')
    .then((response) => response.json())
    .then((data) => {
      return {
        count: data.count,
        results: data.results,
      };
    });
};

const getPeopleAsync = async (fetch) => {
  const getRequest = await fetch('https://swapi.py4e.com/api/people');
  const data = await getRequest.json();

  return {
    count: data.count,
    results: data.results,
  };
};

module.exports = {
  getPeopleAsync,
  getPeople,
};
