const img = document.querySelector('img')
img.setAttribute('src', 'lena.png')
img.setAttribute('alt', 'Image from internet')

const fun = () => {
    console.log('pig pig pig')
}

setInterval(fun, 2000);