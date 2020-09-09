import React from "react"

function Header({ isFavoritesOpen, setIsFavoritesOpen }) {
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
    </header>
  )
}

export default Header
