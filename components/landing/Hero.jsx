import React from 'react'
import Login from './Login'
import Provider from '@components/Provider'
import Image from 'next/image'

const Hero = () => {
  return (
    // <div  className='gradient-01 h-[1200px]'>
    <div className='gradient-01  md:flex md:flex-row  py-12'>
      <Provider>
        <div className="basis-7/12">
      <Login/>
      </div>
      <div className="hidden md:flex basis-5/12 place-content-center my-24 ">
       <Image width={500} height={500} src="/landing/login.svg" />
       </div>
    
      </Provider>
     
      </div>
  )
}

export default Hero