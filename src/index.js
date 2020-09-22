import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from "axios"
import "./styles/index.scss"

// Components
import Header from "./components/Header"
import GifsContainer from "./components/GifsContainer"

function App() {
  const [gifs, setGifs] = useState([])
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)
  const [category, setCategory] = useState("Trending")

  // useEffect(() => {
  //   fetchTrendingGifs()
  // }, [])
  useEffect(() => {
    async function fetchTrendingGifs() {
      const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
      try {
        const response = await Axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=50`)
        setGifs(response.data.data)
      } catch (e) {
        console.log(e)
      }
    }

    async function fetchSearchedGifs() {
      const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
      try {
        const response = await Axios.get(`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=50`)
        setGifs(response.data.data)
      } catch (e) {
        console.log(e)
      }
    }
    category !== "Trending" ? fetchSearchedGifs() : fetchTrendingGifs()
  }, [category])

  return (
    <div className="App">
      <Header setCategory={setCategory} isFavoritesOpen={isFavoritesOpen} setIsFavoritesOpen={setIsFavoritesOpen} />
      {gifs && <GifsContainer category={category} gifs={gifs} setGifs={setGifs} isFavoritesOpen={isFavoritesOpen} />}
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
