import React from 'react'

import Provider from '@components/Provider'
import Image from 'next/image'
import SignUp from '@components/signup/SignUp'
import Forget_password from '@components/Forget_password'

const Home = () => {
  return (
    // <div  className='gradient-01 h-[1200px]'>
    <div className='gradient-01  md:flex md:flex-row  py-12'>
    
        <div className="basis-7/12 place-content-center ">
        <Forget_password/>
      </div>
      <div className="hidden md:flex basis-5/12 place-content-center my-24 ">
       <Image width={500} height={500} src="/landing/login.svg" alt=""/>
       </div>
    
   
     
      </div>
  )
}

export default Home