const btn = document.querySelector('.burger')
const uList = document.querySelector('nav ul')
const iconBurger = document.querySelector('.fa-bars')
const iconExit = document.querySelector('.fa-times')

const change = () => {
	uList.classList.toggle('active')
	btn.classList.toggle('active')
	iconExit.classList.toggle('hide')
	iconBurger.classList.toggle('hide')
}

btn.addEventListener('click',change)