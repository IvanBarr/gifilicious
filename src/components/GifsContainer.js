import React, { useEffect } from "react"

// Components
import Gif from "./Gif"

function GifsContainer({ gifs, setGifs, isFavoritesOpen }) {
  function createGifs() {
    return gifs.map((gif, index) => {
      if (!isFavoritesOpen) {
        return <Gif gifs={gifs} setGifs={setGifs} gifImageUrl={gif.images.downsized.url} key={index} index={index} />
      } else {
        if (gif.favorited) {
          return <Gif gifs={gifs} setGifs={setGifs} gifImageUrl={gif.images.downsized.url} key={index} index={index} />
        }
      }
    })
  }

  return (
    <div className="gifs-container">
      <div className="wrapper">{createGifs()}</div>
    </div>
  )
}

export default GifsContainer
