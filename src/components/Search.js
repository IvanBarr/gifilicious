import React, { useState, useEffect } from "react"
import Axios from "axios"

function Search({ category, setCategory, setGifs, fetchTrendingGifs }) {
  const [searchedCategory, setSearchedCategory] = useState("")

  async function fetchSearchedGifs() {
    const API_KEY = "8wEih3Gu7pXaPfNAWqBYhON7T8UTUFz9"
    try {
      const response = await Axios.get(`http://api.giphy.com/v1/gifs/search?q=${category}&api_key=${API_KEY}&limit=50`)
      setGifs(response.data.data)
    } catch (e) {
      console.log(e)
    }
  }

  function searchHandler(e) {
    const inputTextValue = e.target.value
    setSearchedCategory(inputTextValue)
  }

  function submitHandler(e) {
    e.preventDefault()
    {
      searchedCategory && setCategory(searchedCategory)
    }
  }

  function chooseCategoryHandler(e) {
    const target = e.target
    if (target.tagName !== "BUTTON") return
    const newCategory = target.innerText
    setCategory(newCategory)
  }

  useEffect(() => {
    category !== "Trending" ? fetchSearchedGifs() : fetchTrendingGifs()
  }, [category])

  return (
    <div className="search-area">
      <div className="wrapper">
        <form action="#" onSubmit={submitHandler}>
          <input onChange={searchHandler} type="text" placeholder="Search..." />
          <button>
            <i className="fas fa-search"></i>
          </button>
        </form>
        <div onClick={chooseCategoryHandler} className="select-category-btns">
          <button className="category-btns">Trending</button>
          <button className="category-btns">Boxing</button>
          <button className="category-btns">Soccer</button>
          <button className="category-btns">Cats</button>
          <button className="category-btns">Dogs</button>
          <button className="category-btns">Sports</button>
        </div>
      </div>
    </div>
  )
}

export default Search
