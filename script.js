const btn = document.querySelector('.burger')
const uList = document.querySelector('ul')
const iconBurger = document.querySelector('i')
const iconExit = document.querySelector('i:nth-child(2)')

	iconExit.classList.remove('fas')
	iconExit.classList.remove('fa-bars')
	
const show = () => {
	uList.classList.add("active")
	btn.classList.add("active")
	iconBurger.classList.remove('fas')
	iconBurger.classList.remove('fa-bars')
	iconExit.classList.add('fas')
	iconExit.classList.add('fa-times')
}

const hidden = () => {
	uList.classList.remove('active')	
	btn.classList.remove('active')	
	iconExit.classList.remove('fas')
	iconExit.classList.remove('fa-times')
	iconBurger.classList.add('fas')
	iconBurger.classList.add('fa-bars')
}

const change = () => {
	if(uList.classList.contains('active')){
		hidden()
	}else{
		show()
	}
}

btn.addEventListener('click',change)