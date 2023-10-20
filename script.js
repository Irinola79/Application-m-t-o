// const liegeLat = 50.8503; 
// const liegeLon = 5.7190; 
// const apiKey = "53f1a4be0a3c82049f7edd352e25f04f";

// const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liegeLat}&lon=${liegeLon}&appid=${apiKey}&lang=fr`;

// const weatherOutput = document.getElementById("weather-output"); 

// form.addEventListener("submit", () => {
//   const formDate = document.getElementById("Date").value;
//   const formDescription = document.getElementById("Description").value;
//   const formVitesseVent = document.getElementById("Vitesse Vent").value;
//   const formTemperature = document.getElementById("Temprature").value;
//   const formIcone = document.getElementById("Icone").value;
//   let data = {
//     "Date": formDate,
//     "Description": formDescription,
//     "Vitesse Vent": formVitesseVent,
//     "Temprature": formTemperature,
//     "Icone": formIcone
//   };

// fetch("weatherUrl",{
//   method: "POST",
//   headers: myHeaders, 
//   body: JSON.stringify()
// })
//   .then(response => {
//       return response.json(); 
//     })
//     .then(response => {
//       let datas = response;
//       datas.forEach(data => {
//         let newHtmlElement = document.createElement("HTML TAG");
//         let newContent = document.createTextNode(data.author);
//         newHtmlElement.appendChild(newContent);
//         let currentElement = document.getElementById("#ID");
//         document.body.insertBefore(newHtmlElement, currentElement.nextElementSibling);
//       })
//     })
//   })

const liegeLat = 50.63;
const liegeLon = 5.56;
const count = 1;
const apiKey = "53f1a4be0a3c82049f7edd352e25f04f";

const weatherUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${liegeLat}&lon=${liegeLon}&units=metric&cnt=${count}&appid=${apiKey}&lang=fr`;

fetch(weatherUrl).then((response) => {
  return response.json();
})
.then((responseJson) => {
  const responseList = responseJson.list[0];
  const dateWeather = responseList.dt_txt;
  const mainTemperature = responseList.main.temp;
  const description = responseList.weather[0].description;
  const icon = responseList.weather[0].icon;
  const windSpeed = responseList.wind.speed;

  document.body.innerHTML = `
  <p>${dateWeather}</p>
  <p>${mainTemperature}</p>
  <p>${description}</p>
  <p>${icon}</p>
  <p>${windSpeed}</p>
  

  `

})
.catch((error) => {
  console.log(error)
});