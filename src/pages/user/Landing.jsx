import React from 'react'
import Hero from '../../components/Hero'
import Welcome from '../../components/Welcome'
import Testimonials from '../../components/Testimonials'
import Landchef from '../../components/Landchef'

const Landing = () => {
  return (
    <div>
        <Hero/>
        <Welcome/>
        <Landchef/>
        <Testimonials/>
    </div>
  )
}

export default Landing