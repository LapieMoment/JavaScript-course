const input = document.querySelector('input')
const button = document.querySelector('button')
const cityName = document.querySelector('.city-name')
const warning = document.querySelector('.warning')
const photo = document.querySelector('.photo')
const weather = document.querySelector('.weather')
const temperature = document.querySelector('.temperature')
const humidity = document.querySelector('.humidity')
const inputCity = document.querySelector('input')
let currentCity = 'kraków'
let currentTemp
let currentWeather
let currentHum

const APIKEY = '1d11bb9bfa373e7415dd8838e057b403'

const main = () => {
	DOMElements()
	DOMEvents()
}

const DOMElements = () => {}

const DOMEvents = () => {
	button.addEventListener('click', response)
}
const response = () => {
	currentCity = inputCity.value
	console.log(currentCity)
	let URL = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${APIKEY}&units=metric&lang=pl`
	fetch(URL)
		.then(res => res.json())
		.then(data => {
			temperature.textContent = Math.round(data.main.temp) + "°C"
			humidity.textContent = Math.round(data.main.humidity) + "%"
			currentWeather = data.weather
			console.log(currentWeather)
			currentInformation = data
		})
		.catch(err => console.error(err))
	cityName.textContent = inputCity.value.charAt(0).toUpperCase() + inputCity.value.slice(1)
	inputCity.value = ''

}





document.addEventListener('DOMContentLoaded', main)
