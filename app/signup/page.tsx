import React from 'react'
import loginBannerImage from '@/public/img/another-banner.jpg'
import { SignUpForm } from '@/components/auth/singUpForm'
import Image from 'next/image'
import authImage from '@/public/img/auth-image.jpg'

const page = () => {
  return (
    <div className=' flex flex-row  items-center max-w-7xl mx-auto justify-center h-[90vh] w-full'>
      <div className="  w-8/12 ">
        <Image src={authImage} className='h-[400px] object-contain' alt='' />
      </div>
        <div className=" flex w-4/12 items-center rounded-md  justify-center px-10 py-10">
             <SignUpForm />
        </div>

    </div>
  )
}

export default page