import React from 'react'
import chf5 from '../assets/images/chf5.jpg'
import { Link } from 'react-router'

const Welcome = () => {
  return (
    
     <div className="flex flex-col items-center text-center bg-gray-200 px-6 py-16 md:px-12 lg:px-20">
        <h2 className="italic text-base md:text-lg">
            Welcome to Chef <span className="text-blue-300 italic">Sy</span>
        </h2>
        <h1 className=" text-2xl md:text-4xl lg:text-5xl mt-6">
            Looking for a Chef or a culinary Tutor? Are you a Chef looking for a platform to market and showcase your skills? Browse our ads.
        </h1>
        <p className="mt-6 text-sm md:text-base lg:text-lg">
            Discover Amazing Opportunities for Chefs and Clients
        </p>
        <Link to="/register">
  <button className="mt-6 font-bold border-4 rounded-full px-6 py-3 animate-bounce">
    Get Started
  </button>
  </Link>


  <div className=" bg-white px-4 py-8 md:px-10 lg:px-20">
  <div className="flex flex-col md:flex-row items-center gap-6">
    {/* Image Section */}
    <div className="w-full md:w-1/2">
      <img src={chf5} alt="chf5.jpg" className="rounded-2xl w-full object-cover" />
    </div>

    {/* Text Section */}
    <div className="w-full md:w-1/2 text-center md:text-left">
      <h1 className="font-bold text-2xl mb-4">About Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque,
        nisi. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
        nobis magni eaque velit eum, id rem eveniet dolor possimus voluptas.
      </p>
      
    </div>
  </div>
</div>

  
</div>


   
  )
}

export default Welcome