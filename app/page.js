import Provider from '@components/Provider'
import Hero from '@components/landing/Hero'
import React from 'react'

const Home = () => {
  return (
    <div >
      <Provider>
      <Hero/>
      </Provider>
     
    </div>
  )
}

export default Home