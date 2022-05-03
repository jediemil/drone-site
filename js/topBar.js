/*const topBar = document.getElementById("topBar")

window.onscroll = function(e) {
    if (this.oldScroll < this.scrollY) {
        topBar.removeEventListener("animationend", show)
        topBar.style.animation = "hide 0.2s linear"
        topBar.addEventListener("animationend", hide)
    } else if(this.oldScroll > this.scrollY) {
        topBar.removeEventListener("animationend", hide)
        topBar.classList.remove("hidden")
        topBar.style.animation = "show 0.2s linear"
        topBar.addEventListener("animationend", show)
    }
    this.oldScroll = this.scrollY;
}

function show() {
    topBar.style.animation = ""
}

function hide() {
    topBar.classList.add("hidden")
    topBar.style.animation = ""
}*/
document.getElementById("topBar").style.transform = "translateY(-100%)"

window.onscroll = function() {
    if (window.innerHeight/2 < window.scrollY) {
        document.getElementById("topBar").style.transform = "translateY(0%)"
    } else {
        document.getElementById("topBar").style.transform = "translateY(-100%)"
    }
}