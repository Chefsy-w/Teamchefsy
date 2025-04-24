import React from 'react'
import { Star } from 'lucide-react'

const Testimonials = () => {
  return (
    <div className='px-4 py-10'>
    <h1 className='text-center text-4xl md:text-5xl font-bold mb-10'>Testimonials</h1>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      
      <div className='border-2 rounded-2xl p-6'>
        <h1 className='font-bold text-2xl text-center'>Prof Olimpio</h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ullam veniam soluta iure mollitia eos voluptatibus doloremque, quo optio cupiditate nam tempora est esse dolore quia, hic quidem quisquam saepe!
        </p>
  
        <div className='flex flex-wrap mt-4 gap-1'>
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </div>
      </div>
  
      <div className='border-2 rounded-2xl p-6'>
        <h1 className='font-bold text-2xl text-center'>Obama Chan</h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ullam veniam soluta iure mollitia eos voluptatibus doloremque, quo optio cupiditate nam tempora est esse dolore quia, hic quidem quisquam saepe!
        </p>
  
        <div className='flex flex-wrap mt-4 gap-1'>
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </div>
      </div>
  
      <div className='col-span-1 md:col-span-2 border-2 rounded-2xl p-6'>
        <h1 className='font-bold text-2xl text-center'>Mohammed Ali</h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ullam veniam soluta iure mollitia eos voluptatibus doloremque, quo optio cupiditate nam tempora est esse dolore quia, hic quidem quisquam saepe!
        </p>
  
        <div className='flex flex-wrap mt-4 gap-1'>
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
          <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default Testimonials