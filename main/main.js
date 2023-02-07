// let nav = document.querySelector('#main-nav').addEventListener('scroll', changeNavColor)
// document.querySelector('#nav').addEventListener('scroll', changeNavColor)
let nav = document.querySelector('nav')
let bars = document.querySelector('.fa-bars')
let logo = document.querySelector('.logo')

const menu = document.querySelector(".nav-links");
const menuItems = document.querySelectorAll(".menuItem");
const closeIcon = document.querySelector('#close-icon')
const menuIcon = document.querySelector('.menu-icon')

window.onscroll = function changeNavColor() {
    if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100 ) {
        console.log(nav.scrollTop)
        nav.classList.remove('nav-dark')
        nav.classList.add('nav-white')
        bars.classList.add('fa-bars-scroll')
        logo.classList.add('dark-logo') 
        logo.src='/assets/JJ\ Builders\ Logo_transparent.png'

    } else {
        console.log(nav.scrollTop)
        console.log('light nav');
        nav.classList.add('nav-dark')
        nav.classList.remove('nav-white')
        bars.classList.add('fa-bars')
        bars.classList.remove('fa-bars-scroll')
        logo.src='/assets/AllWhiteForVideos.png'
    }
};

function toggleMenu() {
    console.log('clicked!');
    if (menu.classList.contains("showMenu")) {
        console.log('BYEBYE MENU');
        menu.classList.remove("showMenu");
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    } else {
        console.log('added Menu');
        menu.classList.add("showMenu");
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    }
  }

  bars.addEventListener("click", toggleMenu);
  closeIcon.addEventListener('click', toggleMenu);

  menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )

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