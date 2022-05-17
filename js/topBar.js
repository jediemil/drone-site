document.getElementById("topBar").style.transform = "translateY(-100%)"
document.getElementById("topBarMobile").style.transform = "translateY(-100%)"
//Gömmer topBar i början så att om JS inte används finns topbaren hela tiden

window.onscroll = function() { //Visar topbaren om man har scrollat förbi 50% av första bilden
    if (window.innerHeight/2 < window.scrollY) {
        document.getElementById("topBar").style.transform = "translateY(0%)"
        document.getElementById("topBarMobile").style.transform = "translateY(0%)"
    } else {
        document.getElementById("topBar").style.transform = "translateY(-100%)"
        document.getElementById("topBarMobile").style.transform = "translateY(-100%)"
    }
}


//Funktioner för att öppna alla olika menyer och dropdowns
function dropDownProject() {
    document.getElementById("myProjectsDropdown").classList.remove("hidden")
}
function toggleDownProject() {
    document.getElementById("myProjectsDropdown").classList.toggle("hidden")
}
function hideProject() {
    document.getElementById("myProjectsDropdown").classList.add("hidden")
}

function toggleMenuMobile() {
    document.getElementById("menuMobile").classList.toggle("hidden")
}
function toggleDownProjectMobile() {
    document.getElementById("dropdownMobile").classList.toggle("hidden")
    document.getElementById("menuMobile").classList.toggle("hidden")
}
