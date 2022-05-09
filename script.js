const colorBtn = document.querySelector('.color')
const p = document.querySelector('p')
const sizeUp = document.querySelector('.sizeUp')
const sizeDown = document.querySelector('.sizeDown')

let fontSize = 36

const increase = () => {
	if(fontSize <=40){
		fontSize = fontSize + 2;
		p.style.fontSize = `${fontSize}px`
	}
}
const insizedown = () => {
	if(fontSize >= 20){
		fontSize = fontSize - 2;
		p.style.fontSize = `${fontSize}px`
	}
}
const changeColor = () => {
	let z = (Math.round(Math.random()*999999))
	p.style.color = `#${z}`
}


colorBtn.addEventListener('click',changeColor)
sizeUp.addEventListener('click',increase)
sizeDown.addEventListener('click',insizedown)

