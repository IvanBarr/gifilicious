import React, { useContext } from "react"
import Context from "../Context"

// Components
import Gif from "./Gif"

function GifsContainer({ category, favorites }) {
  const { isFavoritesOpen, gifs } = useContext(Context)

  function createGifs() {
    if (!isFavoritesOpen) {
      return gifs.map((gif) => {
        return <Gif gifImageUrl={gif.images.preview_gif.url} key={gif.id} favorited={gif.favorited} id={gif.id} />
      })
    } else {
      if (favorites.length > 0) {
        return favorites.map((gif) => {
          return <Gif gifImageUrl={gif.images.preview_gif.url} key={gif.id} favorited={gif.favorited} id={gif.id} />
        })
      } else {
        return <h1>Nothing Here, go add some gifs!</h1>
      }
    }
  }

  return (
    <div className="gifsSectionWrapper">
      <h1 className="category-title">{isFavoritesOpen ? "Favorites" : category}</h1>
      <div className="gifs-container">{createGifs()}</div>
    </div>
  )
}

export default GifsContainer
