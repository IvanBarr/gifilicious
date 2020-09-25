import React, { useContext } from "react"
import Context from "../Context"

function Gif({ gifImageUrl, id, favorited }) {
  const { gifs, setGifs } = useContext(Context)

  function favoritesHandler() {
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
