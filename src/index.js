import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import Axios from "axios"
import "./styles/index.scss"

// Components
import Nav from "./components/Nav"
import GifsContainer from "./components/GifsContainer"
import Search from "./components/Search"

function App() {
  const [gifs, setGifs] = useState([])
  const [isFavoritesOpen, setIsFavoritesOpen] = useState(false)

  async function fetchTrendingGifs() {
    const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
    try {
      const response = await Axios.get(`http://api.giphy.com/v1/gifs/trending?&api_key=${API_KEY}&limit=40`)
      setGifs(response.data.data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    fetchTrendingGifs()
    console.log(gifs)
  }, [])

  return (
    <div className="App">
      <header>
        <Nav isFavoritesOpen={isFavoritesOpen} setIsFavoritesOpen={setIsFavoritesOpen} />
        <Search isFavoritesOpen={isFavoritesOpen} setGifs={setGifs} fetchTrendingGifs={fetchTrendingGifs} />
      </header>
      {gifs && <GifsContainer gifs={gifs} setGifs={setGifs} isFavoritesOpen={isFavoritesOpen} />}
    </div>
  )
}

ReactDOM.render(<App />, document.querySelector("#root"))
