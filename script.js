let key = 'cebcd482eda57fa9a6714c1c2ba91885'

async function searchCity(city) {
    let data = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=cebcd482eda57fa9a6714c1c2ba91885&units=metric").then(resposta => resposta.json())

    putScreen(data)
}

function buttonClick() {
    let city = document.querySelector(".input-city").value

    searchCity(city)
}

function putScreen(data) {
    document.querySelector(".city").innerHTML = data.name

    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"

    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + data.weather[0].icon + ".png"
}

document.querySelector(".input-city").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        buttonClick();
    }
});

document.addEventListener("keyup", function(event) {
    if (event.key === "Escape") {
        location.reload();
    }
});
