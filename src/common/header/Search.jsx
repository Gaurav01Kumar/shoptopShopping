import React from "react"
import { Link } from "react-router-dom"

const Search = ({ CartItem }) => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const search = document.querySelector(".search")
    search.classList.toggle("active", window.scrollY > 100)
  })

  return (
    <>
      <section className='search'>
        <div className='container c_flex'>
          <div className='logo width '>
            <h1 className="logostyle">Shoptop<br></br><small className="taglinestyle">Be the Trend Setter!</small></h1>
          </div>

          <div className='search-box f_flex'  id='searchdiv' style={{visibility:"hidden" }}>
            <i className='fa fa-search searchicon'></i>
            <input type='text' placeholder='Search and hit enter...' />
            <span>Search</span>
          </div>

          <div className='icon f_flex width'>
            {/* <i className='fa fa-user icon-circle'></i> */}
            <Link to='/LoginComponent'><i className='fa fa-user icon-circle iconstyle'></i></Link>
            <div className='cart'>
              <Link to='/cart'>
                <i className='fa fa-shopping-bag icon-circle'></i>
                <span>{CartItem.length === 0 ? "" : CartItem.length}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Search
