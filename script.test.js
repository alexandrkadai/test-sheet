const googleSearch = require('./script');
dbMock = ['dog.com', 'cheespuff.com', 'dog-pictures.com', 'disney.com'];
it('this is a test', () => {
  expect('hello').toBe('hello');
  //   googleSearch('testtest', dbMock);
});

describe('googleSearch', () => {
  it('Searching gogle test', () => {
    expect(googleSearch('dog', dbMock)).toEqual(['dog.com', 'dog-pictures.com']);
  });

  it('Work with undefined and null', () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it('Does not import more than 3 matches', () => {
    expect(googleSearch('.com', dbMock).length).toEqual(3);
  });
});
