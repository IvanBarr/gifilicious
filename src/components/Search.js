import React, { useState, useEffect } from "react"
import Axios from "axios"

function Search({ category, setCategory, isFavoritesOpen, setGifs, fetchTrendingGifs }) {
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
    newCategory !== "Trending" ? setCategory(newCategory) : fetchTrendingGifs()
  }

  // function animateBtnBgColor() {
  //   const buttons = document.getElementsByClassName("category-btns")
  //   const buttonsArray = [...buttons]
  //   buttonsArray.map((button) => {
  //     const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
  //     const randomBetween2 = (min, max) => min + Math.floor(Math.random() * (max - min + 1))
  //     const r = randomBetween(0, 255)
  //     const g = randomBetween(0, 255)
  //     const b = randomBetween(0, 255)
  //     const r2 = randomBetween2(0, 255)
  //     const g2 = randomBetween2(0, 255)
  //     const b2 = randomBetween2(0, 255)
  //     const rgb1 = `rgb(${r},${g},${b})`
  //     const rgb2 = `rgb(${r2},${g2},${b2})`
  //     button.style.backgroundImage = `linear-gradient(to right, ${rgb1}, ${rgb2})`
  //   })
  // }

  // useEffect(() => {
  //   animateBtnBgColor()
  // }, [])

  useEffect(() => {
    fetchSearchedGifs()
    console.log(category)
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
