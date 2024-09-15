/*=============== Mostrar/Ocultar Menú ===============*/
const navMenu = document.getElementById('nav-menu'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validar si existe el boton */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validar si existe el botón */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu')
  })
}

/*=============== Mostrar/Ocultar la barra de búsqueda ===============*/
const search = document.getElementById('search'),
  searchBtn = document.getElementById('search-btn'),
  searchClose = document.getElementById('search-close')

/* Mostrar barra de búsqueda */
searchBtn.addEventListener('click', () => {
  search.classList.add('show-search')
})

/* Ocultar barra de búsqueda */
searchClose.addEventListener('click', () => {
  search.classList.remove('show-search')
})

/*=============== Mostrar/Ocultar formulario de login ===============*/
const login = document.getElementById('login'),
  loginBtn = document.getElementById('login-btn'),
  loginClose = document.getElementById('login-close'),
  signupLink = document.getElementById('signup-link'),
  signup = document.getElementById('signup'),
  signupClose = document.getElementById('signup-close'),
  loginLink = document.getElementById('login-link')

/* Mostrar login */
loginBtn.addEventListener('click', () => {
  login.classList.add('show-login')
})

/* Ocultar login */
loginClose.addEventListener('click', () => {
  login.classList.remove('show-login')
})

/* Mostrar signup desde login */
signupLink.addEventListener('click', (e) => {
  e.preventDefault()
  login.classList.remove('show-login')
  signup.classList.add('show-signup')
})

/* Ocultar signup */
signupClose.addEventListener('click', () => {
  signup.classList.remove('show-signup')
})

/* Mostrar login desde signup */
loginLink.addEventListener('click', (e) => {
  e.preventDefault()
  signup.classList.remove('show-signup')
  login.classList.add('show-login')
})

/* Carousel */

let next = document.getElementById('next'),
prev = document.querySelector('.prev'),
slider = document.getElementById('slider');

next.addEventListener('click', () => {
  let slides = document.querySelectorAll('.slides'); // Selecciona todos los slides
  slider.appendChild(slides[0])
})

prev.addEventListener('click', () => {
  let slides = document.querySelectorAll('.slides'); // Selecciona todos los slides
  slider.insertBefore(slides[slides.length - 1], slides[0]); // Mueve el último slide al inicio
});