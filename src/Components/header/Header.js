import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <>
        <div className="header_container">
        <div className="header">
            <Link to='/'><img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' className='idmb_icon' alt="Not found" /></Link>
            <div className="menu">
            <i className="fa-solid fa-bars"></i>
            <span>Menu</span>
            </div>
            <div className="inputs">
              <select name="drop" id="drop">
                <option value="All"><i className="fa-solid fa-magnifying-glass"></i>All</option>
                <option value="Titles"><i className="fa-solid fa-film"></i>Titles</option>
                <option value="TV Episodes"><i className="fa-solid fa-tv"></i>TV Episodes</option>
                <option value="Celebs"><i className="fa-solid fa-user-group"></i>Celebs</option>
                <option value="Companies"><i className="fa-regular fa-building"></i>Companies</option>
                <option value="Keywords"><i className="fa-solid fa-square-caret-right"></i>Keywords</option>
              </select>
              <input type="text" placeholder='Search IMDb' className='search_input' />
              <button className='search_btn'><i className="fa-solid fa-magnifying-glass" style={{color: '#74C0FC'}}></i></button>
            </div>
            <Link className='imdb_pro'><img src="https://www.pngkey.com/png/detail/343-3433325_imdb-pro-logo-imdbpro-logo.png" alt="" className='imdb_pro' /></Link>
            <span className='divider'>|</span>
            <div className="watchlist">
            <i className="fa-solid fa-bookmark"></i>
            <span>Watchlist</span>
            </div>
            <Link className='signin'>Sign In</Link>
            
        </div>
        </div>
        <div className="category">
          <Link to="/movies/popular">Popular</Link>
          <Link to='/movies/top_rated'>Top rated</Link>
          <Link to='/movies/upcoming'>Upcoming</Link>
        </div>
    </>
  )
}

export default Header