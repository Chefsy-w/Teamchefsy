import React from 'react'


const Testimonials = () => {
  return (
    <div className='px-4 py-10'>
    <h1 className='text-center text-4xl md:text-5xl font-bold mb-10'>Testimonials</h1>
  
    <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
      
      <div className='border border-gray-200 shadow-2xl rounded-2xl p-6'>
        <h1 className='font-bold text-2xl text-center'>Prof Olimpio</h1>
       
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ullam veniam soluta iure mollitia eos voluptatibus doloremque, quo optio cupiditate nam tempora est esse dolore quia, hic quidem quisquam saepe!
        </p>
        <p>⭐⭐⭐⭐⭐⭐⭐ </p>
  
        
      </div>
  
      <div className='border border-gray-200 shadow-2xl rounded-2xl p-6'>
        <h1 className='font-bold text-2xl text-center'>Obama Chan</h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ullam veniam soluta iure mollitia eos voluptatibus doloremque, quo optio cupiditate nam tempora est esse dolore quia, hic quidem quisquam saepe!
        </p>
        <p className='w-6 h-6'>⭐⭐⭐⭐⭐⭐⭐ </p>
  
      </div>
  
      <div className='col-span-1 md:col-span-2 border border-gray-300 shadow-2xl rounded-2xl p-6'>
        <h1 className='font-bold text-2xl text-center'>Mohammed Ali</h1>
        <p className='mt-2'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Suscipit, ullam veniam soluta iure mollitia eos voluptatibus doloremque, quo optio cupiditate nam tempora est esse dolore quia, hic quidem quisquam saepe!
        </p>
        <p>⭐⭐⭐⭐⭐⭐⭐ </p>
  
        
      </div>
    </div>
  </div>
  
  )
}

export default Testimonials