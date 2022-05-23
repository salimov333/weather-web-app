//console.log("Test index.js");


//Define the HTML Elements
const city = document.getElementById("city");
//console.log(city);
const resultDiv = document.getElementById("result");
//console.log(resultDiv);
const btn = document.getElementById("btn");
//console.log(btn);

//Click enent on btn
btn.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather();
});

//Onload method
window.onload = () => {
    //console.log("Page is loaded");
    document.getElementById("city").focus();
    city.setAttribute("placeholder", "");
    city.placeholder = "For example: Berlin"
};

function getWeather() {
    let cityName = city.value;
    //console.log("cityName = ", cityName);
    if (!cityName) {
        //console.log("Enter a city name");
        city.placeholder = "Enter a valid City name!"
        city.focus();
        return;
    }
    //cityName = city.value;

    //Weather API
    const API_KEY = "5fe8d9f6fdc543a38b673009221905";
    const baseURL = "https://api.weatherapi.com/v1";
    const endPoint = `${baseURL}/current.json?key=${API_KEY}&q=${cityName}`;

    axios
        .get(endPoint)
        .then((res) => {
            const data = res.data;
            //console.log(data);
            const img = document.getElementById("img");
            const src = data.current.condition.icon;
            img.setAttribute("src", src);
            const name = data.location.name;
            const country = data.location.country;
            const temp_c = res.data.current.temp_c;
            const condition = res.data.current.condition.text;
            const wind_kph = res.data.current.wind_kph;
            const lastUpdated = res.data.current.last_updated;
            const time = lastUpdated.split(" ").pop();            
            const resultText = `The weather today in ${name}/${country} at ${time} is ${condition}. The temperature is ${temp_c}°C and the wind speed is ${wind_kph} km/h.`;
            console.log(resultText);
            resultDiv.innerHTML = resultText;
            city.value = "";
            city.focus();
            city.placeholder = "";
        })
        .catch((err) => {
            console.log(err);
            alert("Enter a valid city name");
        })
};
