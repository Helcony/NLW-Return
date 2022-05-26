window.addEventListener("scroll", onScroll)
onScroll()
// nav scroll and back to top button
function onScroll() {
    showNavOnScroll()
    showBackToTopOnScroll()
}

function showNavOnScroll() {
    if(scrollY > 0) {
        nav.classList.add("scroll")
    } else {
        nav.classList.remove("scroll")
    }
}

function showBackToTopOnScroll() {
    if(scrollY > 400) {
        backToTop.classList.add("show")
    } else {
        backToTop.classList.remove("show")
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
//ScrollReveal({
//    origin: "top",
//    distance: "3rem",
//    duration: 700,
//}).reveal(`#home,
//#home img,
//#home .stat,
//#services,
//#services header,
//#services .card,
//#about header,
//#about .content p,
//#about .content img,
//#contact header,
//#contact .content ul,
//#contact .content a`)
