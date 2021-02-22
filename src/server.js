const express = require('express');

const { requestWeather } = require('./service/weather');
const { findTracks } = require('./service/tracks');

const PORT = 3333;
const HOST = '0.0.0.0';

const app = express();

app.use(express.json());

app.post('/', async (request, response) => {
  const { name, lat, lon } = request.body;

  try {
    const res = await requestWeather({ name, lat, lon });

    const celcius = res.data.main.temp;

    let tracks = await findTracks(celcius);

    return response.json(tracks);
  } catch (error) {
    return response.json({ message: 'Cidade não encontrada' });
  }
});

app.listen(PORT, HOST, () => {
  console.log('Server is runing ato port 3333');
});
