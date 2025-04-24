import React from 'react'
import herobg from "../assets/images/herobg.jpg"

const Hero = () => {
  return (
 <div
      className=" bg-fixed w-full h-[100vh] bg-cover bg-center flex flex-col justify-center items-center text-center px-4"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <h1 className="text-8xl font-bold text-orange-600">
        Chef <span className="italic text-blue-300">sy</span>
      </h1>
      <p className="mt-4 max-w-xl text-bold text-3xl">
        Make Every Meal Count with the best culinary experience from your private chef near you.
      </p>
    </div>

  )
}

export default Hero