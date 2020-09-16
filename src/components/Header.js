import React from "react"
import Search from "./Search"

function Header({ category, setCategory, isFavoritesOpen, setIsFavoritesOpen, setGifs, fetchTrendingGifs }) {
  function favoritesPageHandler() {
    setIsFavoritesOpen(!isFavoritesOpen)
    console.log(isFavoritesOpen)
  }

  return (
    <header>
      <div className="wrapper">
        <nav>
          <div className="logo">
            <span className="text-special">Gif</span>ilicious
          </div>
          <button onClick={favoritesPageHandler} className="favorites-btn">
            <i className="fas fa-star"></i> Favorites
          </button>
        </nav>
      </div>
      <Search setGifs={setGifs} category={category} setCategory={setCategory} fetchTrendingGifs={fetchTrendingGifs} />
    </header>
  )
}

export default Header
