//mockup database
const googleDatabase = [
  'cats.com',
  'soup-recepies.com',
  'animals.com',
  'flowers.com',
  'cat-pictures.com',
  'my-faworites-cats.com',
  'my-faworites-cats3.com',
];

const googleSearch = (searchInput, db) => {
  const matches = db.filter((website) => {
    return website.includes(searchInput);
  });
  return matches.length > 3 ? matches.slice(0, 3) : matches;
};

// console.log(googleSearch('cats', googleDatabase));
module.exports = googleSearch;
