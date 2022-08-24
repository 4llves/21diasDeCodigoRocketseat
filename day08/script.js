let bg = document.querySelector('.toggleTheme')
let sun = document.querySelector('.sun')
let moon = document.querySelector('.moon')
let stars = document.querySelector('.stars')
let water = document.querySelector('.water')


function toggle(card) {
  card.classList.toggle('active')
}

moon.addEventListener('click', function () {
  toggle(moon)
  toggle(sun)
  toggle(stars)
  toggle(water)
  toggle(bg)
})

sun.addEventListener('click', function () {
  toggle(moon)
  toggle(sun)
  toggle(stars)
  toggle(water)
  toggle(bg)
})