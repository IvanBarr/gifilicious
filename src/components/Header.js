import React from "react"
import Search from "./Search"

function Header({ setCategory, isFavoritesOpen, setIsFavoritesOpen }) {
  function favoritesPageHandler() {
    setIsFavoritesOpen(!isFavoritesOpen)
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
      <Search setCategory={setCategory} />
    </header>
  )
}

export default Header
