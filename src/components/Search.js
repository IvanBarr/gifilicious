import React, { useState, useEffect } from "react"
import Axios from "axios"

function Search({ setGifs, fetchTrendingGifs }) {
  const [category, setCategory] = useState("")
  const [searchedCategory, setSearchedCategory] = useState("")

  async function fetchSearchedGifs() {
    const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
    try {
      const response = await Axios.get(`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=40`)
      setGifs(response.data.data)
    } catch (e) {
      console.log(e)
    }
  }

  function searchHandler(e) {
    const inputTextValue = e.target.value
    setSearchedCategory(inputTextValue)
  }

  function submitHandler() {
    {
      searchedCategory && setCategory(searchedCategory)
    }
  }

  function chooseCategoryHandler(e) {
    const target = e.target
    if (target.tagName !== "BUTTON") return
    const newCategory = target.innerText
    newCategory !== "Trending" ? setCategory(newCategory) : fetchTrendingGifs()
  }

  useEffect(() => {
    fetchSearchedGifs()
    console.log(category)
  }, [category])

  return (
    <div className="search-area">
      <form action="#">
        <input onChange={searchHandler} type="text" placeholder="Search..." />
        <button onClick={submitHandler}>
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div onClick={chooseCategoryHandler} className="select-category-btns">
        <button>Trending</button>
        <button>Boxing</button>
        <button>Soccer</button>
        <button>Cats</button>
        <button>Dogs</button>
        <button>Sports</button>
      </div>
    </div>
  )
}

export default Search
