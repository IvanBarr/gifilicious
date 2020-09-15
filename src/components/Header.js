import React from "react"
import Search from "./Search"

function Header({ isFavoritesOpen, setIsFavoritesOpen, setGifs, fetchTrendingGifs }) {
  function favoritesPageHandler() {
    setIsFavoritesOpen(!isFavoritesOpen)
    console.log(isFavoritesOpen)
  }

  return (
    <header>
      <div className="wrapper">
        <div className="logo">
          <span className="text-special">Gif</span>ilicious
        </div>
        <button onClick={favoritesPageHandler} className="favorites-btn">
          <i className="fas fa-star"></i> Favorites
        </button>
      </div>
      <Search setGifs={setGifs} fetchTrendingGifs={fetchTrendingGifs} />
    </header>
  )
}

export default Header
