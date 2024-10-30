import Footer from '@/components/footer'
import Header from '@/components/header'
import Hero from '@/components/hero'
import React from 'react'

const page = () => {
  return (
    <div style={{
      backgroundColor: '#490b3d',
    }}>
      <Header/>
  <Hero/>
      <h1>
        Contact Us
      </h1>
      
      <Footer/>
      
    </div>
  )
}

export default page
