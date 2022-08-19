function ToggleButton() {
  const btn = document.querySelector('.menuToggle')

  btn.addEventListener('click', function () {
    btn.classList.toggle('active')
  })
}

ToggleButton()