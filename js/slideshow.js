let currentSlide = 0

const slides = document.getElementById("projectImageWithCap").getElementsByClassName("imageSegment")

function changeSlide(direction) {
    slides[currentSlide].classList.add("invisible")
    currentSlide += direction
    currentSlide %= slides.length
    if (currentSlide < 0) {
        currentSlide = slides.length - 1
    }
    slides[currentSlide].classList.remove("invisible")
}