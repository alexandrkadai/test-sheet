const fetch = require('node-fetch');
const swapi = require('./script.async');

describe('googleSearch', () => {
  it('calls swapi to get people', () => {
    expect.assertions(1);
    return swapi.getPeople(fetch).then((data) => {
      expect(data.count).toEqual(87);
    });
  });

  it('calls swapi to get people with a promise', () => {
    expect.assertions(2);
    return swapi.getPeopleAsync(fetch).then((data) => {
      expect(data.count).toEqual(87);
      expect(data.results.length).toBeGreaterThan(5);
    });
  });
});
