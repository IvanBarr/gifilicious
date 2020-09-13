import React from "react"

function Nav({ isFavoritesOpen, setIsFavoritesOpen }) {
  function favoritesPageHandler() {
    setIsFavoritesOpen(!isFavoritesOpen)
    console.log(isFavoritesOpen)
  }

  return (
    <div class="nav">
      <div className="wrapper">
        <div className="logo">
          <span className="text-special">Gif</span>ilicious
        </div>
        <button onClick={favoritesPageHandler} className="favorites-btn">
          <i className="fas fa-star"></i> Favorites
        </button>
      </div>
    </div>
  )
}

export default Nav
