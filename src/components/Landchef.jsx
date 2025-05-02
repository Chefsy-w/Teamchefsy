import React from 'react'
import chf2 from '../assets/images/chf2.jpg'
import somelier1 from '../assets/images/somelier1.jpg'
import pastry2 from '../assets/images/pastry2.jpg'
import chf4 from '../assets/images/chf4.jpg'
import { Star } from 'lucide-react'
import { Link } from 'react-router'

const Landchef = () => {
  return (
    <div className='bg-gray-200'>
      <h1 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold'>OUR CHEFS</h1>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4 sm:p-6 lg:p-10'>
        
            <div className='border-4 rounded-3xl p-4'>
            <img src={chf2} alt="chf2.png" className='w-full h-auto object-cover rounded-xl mb-2' />
            <div className='flex flex-row gap-1'>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <h2 className='mt-2 font-semibold'>Meet chef Simon Simons</h2>
            <p>specializes local and continental dishes</p>
            </div>

            <div className='border-4 rounded-3xl p-4'>
            <img src={somelier1} alt="somelier1.jpg" className='w-full h-auto object-cover rounded-xl mb-2' />
            <div className='flex flex-row gap-1'>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <h2 className='mt-2 font-semibold'>Meet chef Ewurabena Smith- Authur</h2>
            <p>somelier and continental dishes</p>
            </div>

            <div className='border-4 rounded-3xl p-4'>
            <img src={chf4} alt="chf4.png" className='w-full h-auto object-cover rounded-xl mb-2' />
            <div className='flex flex-row gap-1'>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <h2 className='mt-2 font-semibold'>Meet chef & Tutor Araba Forson</h2>
            <p>specializes local and continental dishes</p>
            </div>

            <div className='border-4 rounded-3xl p-4'>
            <img src={pastry2} alt="pastry2.jpg" className='w-full h-auto object-cover rounded-xl mb-2' />
            <div className='flex flex-row gap-1'>
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
            </div>
            <h2 className='mt-2 font-semibold'>Meet chef Fel Gifty Opare</h2>
            <p>A pastry Chef</p>
            </div>



      </div>

    
      <Link to="/chefs" className='flex justify-center'>
                    <button className="animate-bounce border-5 mt-8 hover:bg-gray-400 font-bold py-3 px-6 rounded-full text-sm sm:text-base md:text-lg">
                    View More
                    </button>
                </Link>

    </div>

  )
}

export default Landchef