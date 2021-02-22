const axios = require('axios').default;
/**
 * -23.005389
 * -46.841032
 */
async function requestWeather({ name, lat, lon }) {
  let params;
  if (name) {
    params = {
      q: `${name}` || null,
      lat: `${lat}` || 0,
      lon: `${lon}` || 0,
      id: '2172797',
      lang: 'null',
      units: 'metric',
      mode: 'xml, html',
    };
  } else {
    params = {
      lat: `${lat}` || 0,
      lon: `${lon}` || 0,
      id: '2172797',
      lang: 'null',
      units: 'metric',
      mode: 'xml, html',
    };
  }

  const weather = await axios.get(
    'https://community-open-weather-map.p.rapidapi.com/weather',
    {
      params,
      headers: {
        'x-rapidapi-key': '2fffc958d0mshb87d81152abba04p1247ffjsndec3e8490e26',
        'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
        useQueryString: true,
      },
    }
  );

  return weather;
}

module.exports = {
  requestWeather,
};
