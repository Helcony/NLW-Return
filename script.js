// nav scroll
const nav = document.getElementById("nav")

function onScroll() {
    if(scrollY > 0) {
        nav.classList.add("scroll")
    } else {
        nav.classList.remove("scroll")
    }
}

// open and close menu
function openMenu() {
    document.body.classList.add("opened-menu")
}

function closeMenu() {
    document.body.classList.remove("opened-menu")
}

// scrollreveal
ScrollReveal({
    origin: "top",
    distance: "3rem",
    duration: 700,
}).reveal(`#home,
#home img,
#home .stat,
#services,
#services header,
#services .card,
#about,
#about header,
#about .content p,
#about .content img`)