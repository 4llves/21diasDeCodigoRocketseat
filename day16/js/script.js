const pokemonName = document.querySelector('.pokemon__name')
const pokemonNumber = document.querySelector('.pokemon__number')
const pokemonImage = document.querySelector('.pokemon__image')

const form = document.querySelector('.form')
const input = document.querySelector('.input__search')

const buttonPrev = document.querySelector('.btn-prev')
const buttonNext = document.querySelector('.btn-next')

let searchPokemon = 1

const fetchPokemon = async (pokemon) => {
  const APIres = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.toLowerCase()}`)

  if (APIres.status === 200) {
    const data = await APIres.json()
    return data
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...'

  const data = await fetchPokemon(pokemon)

  if (data) {
    pokemonName.innerHTML = data.name
    pokemonNumber.innerHTML = data.id
    pokemonImage.src = data['sprites']['versions']
    ['generation-v']['black-white']['animated']
    ['front_default']
    input.value = ''
    searchPokemon = data.id
  } else {
    pokemonName.innerHTML = "Not Found X("
    pokemonNumber.innerHTML = ''
    pokemonImage.src = ''
  }

}

form.addEventListener('submit', (event) => {
  event.preventDefault()

  renderPokemon(input.value)
})

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1
    renderPokemon(String(searchPokemon))
  }
})

buttonNext.addEventListener('click', () => {
  searchPokemon += 1
  renderPokemon(String(searchPokemon))
})

renderPokemon(String(searchPokemon))