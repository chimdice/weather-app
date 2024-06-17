const weatherApi = 'http://api.weatherapi.com/v1/current.json?key=94855a49c8a14bf3a8841418241706&q=';

const getLocactionWeather = async function (location) {
    try {
        const fullApi = weatherApi + location;
        const response = await fetch(fullApi, {mode:'cors'});
        const locationData = await response.json();

        const tempF = locationData.current.temp_f;
        const tempC = locationData.current.temp_c;
        const fullLocation = `${locationData.location.name}, ${locationData.location.country}`;

        console.log(tempF, tempC, fullLocation);
    } catch {
        (error) => {console.log(error)};
    };
};

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.querySelector('input[name="location"]');
    getLocactionWeather(location.value);
});