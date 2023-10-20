const liegeLat = 50.8503; 
const liegeLon = 5.7190; 
const apiKey = "53f1a4be0a3c82049f7edd352e25f04f";

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liegeLat}&lon=${liegeLon}&appid=${apiKey}&lang=fr`;

const weatherOutput = document.getElementById("weather-output"); 

fetch(weatherUrl)
  .then(response => {
      if (response.ok) {
      return response.json(); 
    } else {
      throw new Error('Échec de la requête à l\'API OpenWeatherMap');
    }
  })
  .then(data => {
    console.log(data); 
  })
  .catch(error => {
    console.error('Erreur :', error); 
  });


  