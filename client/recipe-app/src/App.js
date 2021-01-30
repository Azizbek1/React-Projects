import { useState, useEffect } from 'react'
import Recipe from './Recipe'
import './App.css'

function App() {
  const [recipies, setRecipies] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')

  const APP_ID = 'app_id'
  const APP_KEY = 'app_key'
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`

  // useEffect(async () => {
  //   getRecipies()
  // }, [query])

  // async function getRecipies() {
  //   const response = await fetch(url, { mode: 'no-cors' })
  //   const { hits } = await response.json()
  //   setRecipies(hits)
  // }

  function handleChange({ target: { value } }) {
    setSearch(value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className='App'>
      <form className='search-form' onSubmit={handleSubmit}>
        <input className='search-bar' value={search} onChange={handleChange} />
        <button type='submit' className='search-button'>
          Search
        </button>
      </form>
      {recipies.map(({ recipe }) => (
        <Recipe key={recipe.label} recipe={recipe} />
      ))}
    </div>
  )
}

export default App
