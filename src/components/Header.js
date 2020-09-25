import React, { useContext } from "react"
import Context from "../Context"

// Components

function Header({ setIsFavoritesOpen, children }) {
  const { isFavoritesOpen } = useContext(Context)

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
            {!isFavoritesOpen ? (
              <p>
                <i className="fas fa-star"></i> Favorites
              </p>
            ) : (
              "Home"
            )}
          </button>
        </nav>
      </div>
      {children}
    </header>
  )
}

export default Header
