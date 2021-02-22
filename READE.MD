# Teste Playscores

## Frameworks utilizados

- Express: Foi utilizado para criação do servidor de requisição node.
- Axios: Foi utilizado para fazer requisições HTTP para às API's OpenWeatherMaps (Informações sobre o tempo) e Shazam API (tracks de músicas);
  
## Solução

Para realizar os testes Http de chamada, foi utilizado o Insominia, cria-se uma rota do tipo POST http://localhost:3333 e em seu Body colocamos a seguinte estruta:

```json
 {
"name": "London",
"lat": -23.005389,
"lon": -46.841032
}
```

Assim que recebida a requisição é chamada a função requestWeather() para que possa ser retornada a temperatura da cidade ou latitude/longitude.

Após o retorno da temperatura da cidade é feita uma requisição para Shazam API para que assiim possa ser retornada a lista de música conforme a temperatura.

Caso não encontrada a cidade é retornado uma mensagem dizendo que a "Cidade não foi encontrada".
