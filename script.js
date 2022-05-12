const btn = document.querySelector('button')
const img = document.querySelector('img')

const URL = 'https://dog.ceo/api/breeds/image/random'

// fetch(URL).then().catch()

//fetch - służy do pobrania danych
//then - mówi co zrobimy z nimi kiedy wszystko pobierzemy
//catch - wyłapuje błędy
btn.addEventListener('click', () => {
	fetch(URL)
		.then(response => response.json())
		.then(data => img.setAttribute('src', data.message))
})
