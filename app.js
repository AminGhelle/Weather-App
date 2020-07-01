// Initialise Weather Object
const weather = new Weather('London', 'uk');

// Initialise Weather Object
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

// Change Location event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value;
  const country = document.getElementById('country').value;


  // Change Location
  weather.changeLocation(city, country);


  // Get and display weather
  getWeather();

  //Close Modal
  $('#locModal').modal('hide');

});


function getWeather(){
weather.getWeather()
  .then(results => {
    ui.paint(results);
  })
  .catch(err => console.log(err));
}
