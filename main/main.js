// let nav = document.querySelector('#main-nav').addEventListener('scroll', changeNavColor)
// document.querySelector('#nav').addEventListener('scroll', changeNavColor)
let nav = document.querySelector('nav')
let bars = document.querySelector('.fa-bars')

window.onscroll = function changeNavColor() {
    if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
        console.log(nav.scrollTop)
        nav.classList.remove('nav-dark')
        nav.classList.add('nav-white')
        bars.classList.add('fa-bars-scroll')       

    } else {
        console.log(nav.scrollTop)
        console.log('light nav');
        nav.classList.add('nav-dark')
        nav.classList.remove('nav-white')
        bars.classList.add('fa-bars')
        bars.classList.remove('fa-bars-scroll')
    }
};

// function changeNavColor() {
//     if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200 ) {
//         console.log(scroller.scrollTop)
//         nav.classList.add('nav-dark')
//         nav.classList.remove('nav-white')
//     } else {
//         console.log(scroller.scrollTop)
//         console.log('light nav');
//         nav.classList.remove('nav-dark')
//         nav.classList.add('nav-color')
//     }
// }