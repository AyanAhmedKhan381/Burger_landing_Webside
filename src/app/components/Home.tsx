"use client"
import React, { useEffect } from 'react'
import Hero from './Hero/Hero'
import Feature from './Feature/Feature'
import PopularBurger from './PopularBurger/PopularBurger'
import Delevery from './Delevery/delevery'
import Team from './Team/Team'
import Reservation from './Reservation/Reservation'
import NewsLatter from './Newsletter/NewsLatter'

import AOS from 'aos';
import 'aos/dist/aos.css'; 



const Home = () => {

  useEffect(()=> {

    const initAos = async()=> {
      await import('aos')
      AOS.init({
        duration: 1000,
        easing: 'ease',
        once: true,
        anchorPlacement: 'top-center',
      })
    }

    initAos();

  },[])

  return (
    <div className='overflow-hidden bg-[]'>
      <Hero/>
      <Feature/>
      <PopularBurger/>
      <Delevery/>
      <Team/>
      <Reservation/>
      <NewsLatter/>
    
    </div>
  )
}

export default Home
