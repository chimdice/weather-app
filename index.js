const weatherApi = 'http://api.weatherapi.com/v1/current.json?key=94855a49c8a14bf3a8841418241706&q=';
const form = document.querySelector('form');
const tempShower = document.querySelector('.temp-shower');
const locationhower = document.querySelector('.location-shower');

const getLocactionWeather = async function (location) {
    try {
        const fullApi = weatherApi + location;
        const response = await fetch(fullApi, {mode:'cors'});
        const locationData = await response.json();

        const tempF = locationData.current.temp_f+'F';
        const tempC = locationData.current.temp_c+'C';
        const fullLocation = `${locationData.location.name}, ${locationData.location.country}`;

        tempShower.textContent = tempF;
        locationhower.textContent = fullLocation
        console.log(tempF, tempC, fullLocation);
    } catch {
        (error) => {console.log(error)};
    };
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.querySelector('input[name="location"]');
    getLocactionWeather(location.value);
});