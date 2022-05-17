let currentSlide = 0

const slides = document.getElementById("projectImageWithCap").getElementsByClassName("imageSegment")

function changeSlide(direction) { //Flyttar mellan bilderna.
    // Direction är ett tal som säger hur många bilder framåt eller bakåt det ska flytta.
    slides[currentSlide].classList.add("invisible")
    currentSlide += direction
    currentSlide %= slides.length
    if (currentSlide < 0) { //Modulus fungerar inte i JS (för varför skulle det?), så behöver en extra säkerhetscheck. -1 mod 5 ska vara 4, inte -1.
        currentSlide = slides.length - 1
    }
    slides[currentSlide].classList.remove("invisible")
}