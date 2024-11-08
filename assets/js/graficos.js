
const slides = document.querySelectorAll('.graphsCard')
const leftButton = document.getElementById('leftButton')
const rightButton = document.getElementById('rightButton')

let counter = 0

slides.forEach((element, index) => {
    element.style.left = `${index * 101}%`
})

const slideImage = () => {
    slides.forEach((element) => element.style.transform = `translateX(-${counter * 101}%)`)
}


leftButton.addEventListener('click', () => {
    if(counter > 0) {
        counter--
        slideImage()
    }
  
})

rightButton.addEventListener('click', () => {
    if(counter < slides.length - 1) {
        counter++
        slideImage()
    }
})