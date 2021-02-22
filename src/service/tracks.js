const axios = require('axios').default;

async function findTracks(celcius) {
  let tracks;
  let term;

  if (celcius > 32) {
    term = 'party';
  } else if (celcius > 22 && celcius <= 32) {
    term = 'pop';
  } else if (celcius > 10 && celcius <= 22) {
    term = 'rock';
  } else {
    term = 'classic';
  }

  const response = await axios.get(
    'https://shazam.p.rapidapi.com/auto-complete',
    {
      params: {
        term,
        locale: 'en-US',
      },
      headers: {
        'x-rapidapi-key': '2fffc958d0mshb87d81152abba04p1247ffjsndec3e8490e26',
        'x-rapidapi-host': 'shazam.p.rapidapi.com',
      },
    }
  );

  return response.data;
}

module.exports = {
  findTracks,
};
