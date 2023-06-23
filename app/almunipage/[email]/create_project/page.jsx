import Sidenav from '@components/Almuni/Sidenav'
import Cover from '@components/Create_Project/Cover'
import Createproject from '@components/Create_Project/Createproject'
import { useSearchParams } from 'next/navigation'
import React, { use } from 'react'

const page = () => {
  
   
   return (
    <div className='bg-blue-500'>
      
      <Sidenav/>
      <Createproject/>
    </div>
  )
}

export default page