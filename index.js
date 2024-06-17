const weatherApi = 'http://api.weatherapi.com/v1/current.json?key=94855a49c8a14bf3a8841418241706&q=';
const form = document.querySelector('form');
const info = document.querySelector('.info-shower');
const tempShower = document.querySelector('.temp-shower');
const locationhower = document.querySelector('.location-shower');

const getLocactionWeather = async function (location) {
    try {
        const fullApi = weatherApi + location;
        const response = await fetch(fullApi, {mode:'cors'});
        const locationData = await response.json();

        const tempF = locationData.current.temp_f;
        const tempC = locationData.current.temp_c;
        const fullLocation = `${locationData.location.name}, ${locationData.location.country}`;

        tempShower.textContent = tempF;
        locationhower.textContent = fullLocation

        const tempFNumber = Number(tempF);
        console.log(tempFNumber)

        if (tempFNumber >= 100) {
            info.setAttribute('style', 'background:#EF9A9A');
            console.log('one');
        } else if (tempFNumber >= 64) {
            info.setAttribute('style', 'background:#FFE0B2' );
            console.log('two');
        } else if (tempFNumber >= 32) {
            info.setAttribute('style', 'background:#DCEDC8');
            console.log('three');
        } else {
            info.setAttribute('style', 'background:#BBDEFB');
            console.log('four');
        };

        let tempBtn;

         if (document.querySelector('button')) {
            tempBtn = document.querySelector('button');
         } else {
            tempBtn = document.createElement('button');
            tempBtn.textContent = 'switch temperature scale';
         };
        
        tempShower.parentElement.appendChild(tempBtn);
        
        let isTempF = true;

        tempBtn.addEventListener('click', ()=>{
            if (isTempF) {
                tempShower.textContent = tempC+" C";
                isTempF = false;
            } else {
                tempShower.textContent = tempF+" F";
                isTempF = true;
            };
        });
    } catch {
        (error) => {console.log(error)};
    };
};


form.addEventListener('submit', (event) => {
    event.preventDefault();
    const location = document.querySelector('input[name="location"]');
    getLocactionWeather(location.value);
});