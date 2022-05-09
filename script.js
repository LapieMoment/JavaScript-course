const img = document.querySelector('.item1')
const btnArrow = document.querySelector('.arrow')
const icon = document.querySelector('.fas')

const showImg = () => {
	img.classList.toggle('hide')
	if(img.classList.contains('hide')){
		icon.style.transform = 'rotate(180deg)'
	}
	else{
		icon.style.transform = 'rotate(0deg)'
	}
}

btnArrow.addEventListener('click', showImg)