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
  const [category, setCategory] = useState("Trending")
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    async function fetchGifs() {
      const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
      try {
        const response = await Axios.get(`https://api.giphy.com/v1/gifs/${category === "Trending" ? "trending?" : "search?q=" + category}&api_key=${API_KEY}&limit=50`)
        const gifsCollection = response.data.data
        setGifs(
          gifsCollection.map((item) => {
            return {
              ...item,
              favorited: false,
            }
          })
        )
      } catch (e) {
        console.log(e)
      }
    }
    fetchGifs()
  }, [category])

  useEffect(() => {
    setFavorites(
      gifs.filter((item) => {
        if (item.favorited) {
          return item
        }
      })
    )
  }, [gifs])

  return (
    <div className="App">
      <Context.Provider value={{ isFavoritesOpen, gifs, setGifs }}>
        <Header setIsFavoritesOpen={setIsFavoritesOpen}>
          <Search setCategory={setCategory} />
        </Header>
        {gifs && <GifsContainer category={category} favorites={favorites} />}
      </Context.Provider>
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
