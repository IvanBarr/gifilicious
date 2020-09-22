import React from "react"

// Components
import Gif from "./Gif"

function GifsContainer({ category, gifs, setGifs, isFavoritesOpen }) {
  function createGifs() {
    return gifs.map((gif, index) => {
      if (!isFavoritesOpen) {
        return <Gif gifs={gifs} setGifs={setGifs} gifImageUrl={gif.images.preview_gif.url} key={index} index={index} />
      } else {
        if (gif.favorited) {
          return <Gif gifs={gifs} setGifs={setGifs} gifImageUrl={gif.images.preview_gif.url} key={index} index={index} />
        }
      }
      return null
    })
  }

  return (
    <div className="gifsSectionWrapper">
      <h1 className="category-title">{isFavoritesOpen ? "Favorites" : category}</h1>
      <div className="gifs-container">{createGifs()}</div>
    </div>
  )
}

export default GifsContainer
