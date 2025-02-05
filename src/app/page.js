/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Services from '@/components/Services'
import Spred from '@/components/Spred'
import Work from '@/components/Work'
import React, { useEffect } from 'react'
import LocomotiveScroll from 'locomotive-scroll';



export default function page() {
useEffect(() => {
  const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true,
    multiplier: 1.2
  });
}
, [])

  return (
    <main>
      <div className=''>
      <Navbar className=""  />
      <Hero />
      </div>
      <Work />
      <Services />
      <Spred  />
      <Footer />
    </main>
  )
}
