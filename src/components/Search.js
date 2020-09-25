import React, { useState } from "react"

function Search({ setCategory }) {
  const [searchedCategory, setSearchedCategory] = useState("")

  function searchHandler(e) {
    const inputTextValue = e.target.value
    setSearchedCategory(inputTextValue)
  }

  function submitHandler(e) {
    e.preventDefault()

    searchedCategory && setCategory(searchedCategory)
    e.target.reset()
  }

  function chooseCategoryHandler(e) {
    const target = e.target
    if (target.tagName !== "BUTTON") return
    const newCategory = target.innerText
    setCategory(newCategory)
  }

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
