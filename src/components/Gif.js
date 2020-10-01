import React, { useContext } from "react"
import Context from "../Context"

function Gif({ gifImageUrl, id, favorited }) {
  const { gifs, setGifs, setClickCount, favorites, setFavorites } = useContext(Context)

  function favoritesHandler() {
    if (favorited) {
      setFavorites(favorites.filter((item) => item.id !== id))
      setGifs(
        gifs.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              favorited: !item.favorited,
            }
          }
          return item
        })
      )
    } else {
      setGifs(
        gifs.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              favorited: !item.favorited,
            }
          }
          return item
        })
      )
    }
    setClickCount((prevValue) => prevValue + 1)
  }

  return (
    <div className="gif-wrapper">
      <img src={gifImageUrl} alt="" />
      <div className="hover-overlay">
        {/* <button className="share-btn">
          <i className="fas fa-share-alt-square"></i>
        </button> */}
        <button onClick={favoritesHandler} className="save-btn">
          <i className={`${favorited ? "fas" : "far"} fa-star`}></i>
        </button>
      </div>
    </div>
  )
}

export default Gif
