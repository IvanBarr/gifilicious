import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from "axios"
import "./styles/index.scss"
import Context from "./Context"

// Components
import Header from "./components/Header"
import Search from "./components/Search"
import GifsContainer from "./components/GifsContainer"

function App() {
  const [gifs, setGifs] = useState([])
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)
  const [category, setCategory] = useState()
  const [favorites, setFavorites] = useState([])
  const [clickCount, setClickCount] = useState(0)

  function getLocalStorageGifs() {
    setFavorites(JSON.parse(localStorage.getItem("favorites")))
    setCategory("Trending")
  }

  useEffect(() => {
    getLocalStorageGifs()
  }, [])

  useEffect(() => {
    // We need to run this function after we have favorites set to localStorage, and we need to run it everytime on category change
    async function fetchGifs() {
      const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
      try {
        const response = await Axios.get(`https://api.giphy.com/v1/gifs/${category === "Trending" ? "trending?" : "search?q=" + category}&api_key=${API_KEY}&limit=50`)
        const gifsCollection = response.data.data

        setGifs(
          gifsCollection.map((item) => {
            if (favorites) {
              let found = favorites.find(({ id }) => id === item.id)
              if (found) item.favorited = found.favorited
            } else {
              return {
                ...item,
                favorited: false,
              }
            }

            return item
          })
        )
      } catch (e) {
        console.log(e)
      }
    }
    fetchGifs()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category])

  useEffect(() => {
    if (clickCount > 0) {
      let newFavorites = gifs.filter((item) => {
        if (item.favorited) {
          return {
            ...item,
            item,
          }
        }
        return null
      })

      if (favorites) {
        let ids = new Set(favorites.map((item) => item.id))

        let currentFavoritesSorted = favorites.filter((favItem) => {
          const itemFromGifs = gifs.find(function (gifsItem) {
            return gifsItem.id === favItem.id
          })
          // If gifsItem is found and 'favorited' matches or if gifsItem is not found, accept it
          if (!itemFromGifs || (itemFromGifs && itemFromGifs.favorited === favItem.favorited)) return true
          return false
        })

        // Create a new array with current favorites state sorted (remove all items that have been unfavorited)

        let merged = [...currentFavoritesSorted, ...newFavorites.filter((newItem) => !ids.has(newItem.id))]
        setFavorites(merged)
      } else {
        setFavorites(newFavorites)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickCount, gifs])
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  return (
    <div className="App">
      <Context.Provider value={{ isFavoritesOpen, gifs, setGifs, setClickCount, favorites, setFavorites }}>
        <Header setIsFavoritesOpen={setIsFavoritesOpen}>
          <Search setCategory={setCategory} />
        </Header>
        {gifs && <GifsContainer category={category} favorites={favorites} />}
      </Context.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
