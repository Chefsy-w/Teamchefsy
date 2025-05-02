import React from 'react'
import { Link, NavLink } from 'react-router'

const Navbar = () => {
  return (
    // <nav> 
    // <p className='text-3xl text-orange-600 font-semibold italic'>chef <span className='italic text-blue-300'>sy </span></p>
  
    // <ul>
    //    <NavLink to='home'><li>Home</li></NavLink> 
    //    <NavLink to='chefs'><li>Chefs</li></NavLink> 
    //     <NavLink to='register'><li>Register</li></NavLink>
    //     <NavLink to='login'><li>Login</li></NavLink>
        
    // </ul>
    
  
    // </nav>

    <nav className="bg-gray-400 p-4">
    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
      {/* Logo and Hamburger (on the same line) */}
      <div className="flex justify-between items-center">
        <p className="text-2xl text-orange-600 font-semibold italic">
          chef <span className="text-blue-300 italic">sy</span>
        </p>
         <label htmlFor="menu-toggle" className="md:hidden text-3xl cursor-pointer">
          ☰
        </label>

      </div>
         <input type="checkbox" id="menu-toggle" className="hidden peer" />

      <ul className="flex-col gap-3 mt-4 hidden peer-checked:flex md:flex md:flex-row md:gap-6 md:mt-0 font-semibold">
        {/* <Link to='/' >
        hi
        
        </Link> */}
        <NavLink to="home"><li>Home</li></NavLink>
        <NavLink to="chefs"><li>Chefs</li></NavLink>
        <NavLink to="register"><li>Register</li></NavLink>
        <NavLink to="login"><li>Login</li></NavLink>
      </ul>
    </div>
  </nav>

  )
}

export default Navbar