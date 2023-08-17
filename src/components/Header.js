import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
        <div className='container'>
            <nav className='header_nav'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/content'>Content</NavLink>
                <NavLink to='/cart'>Cart</NavLink>
                <NavLink to='/contacts'>Contacts</NavLink>
            </nav>
        </div>
    </header>
  )
}

export default Header