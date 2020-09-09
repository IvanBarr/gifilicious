import React from "react"

function Gif({ gifs, setGifs, gifImageUrl, index }) {
  function favoritesHandler() {
    setGifs(
      gifs.map((item) => {
        if (gifs.indexOf(item) === index) {
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
        <button className="share-btn">
          <i className="fas fa-share-alt-square"></i>
        </button>
        <button onClick={favoritesHandler} className="save-btn">
          <i className={`${gifs[index].favorited ? "fas" : "far"} fa-star`}></i>
        </button>
      </div>
    </div>
  )
}

export default Gif
