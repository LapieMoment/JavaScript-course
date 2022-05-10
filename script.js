const btnConv = document.querySelector('.conv')
const btnReset = document.querySelector('.reset')
const btnChange = document.querySelector('.change')
const valueS = document.querySelector('#converter')
const result = document.querySelector('.result')
const one = document.querySelector('.one')
const two = document.querySelector('.two')

const convert = () => {
	if (valueS.value !== '' && one.textContent === '°C') {
		let wynik = (valueS.value * 1.8 + 32).toFixed(2)
		result.textContent = valueS.value + `°C to ${wynik} °F`
		valueS.value = ''
	} else if(valueS.value !== '' && one.textContent === '°F'){
		let wynik = ((valueS.value - 32) / 1.8).toFixed(2)
		result.textContent = valueS.value + `°F to ${wynik} °C`
		valueS.value = ''
	}
}

const reset = () => {
	result.textContent = ''
	valueS.value = ''
}

const change = () => {
	if (one.textContent === '°C') {
		one.textContent = '°F'
		two.textContent = '°C'
	} else {
		one.textContent = '°C'
		two.textContent = '°F'
	}
}

btnConv.addEventListener('click', convert)
btnReset.addEventListener('click', reset)
btnChange.addEventListener('click', change)

//°F = (°C × 1.8) + 32
//°C = (°F − 32) /1.8
