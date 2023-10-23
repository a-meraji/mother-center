import Link from 'next/link'
import React from 'react'
import HandleSVG from './handleSVG'

function Intro() {
  return (
    <div className='grid grid-cols-2 relative gap-x-[10vw] min-h-[80vh] justify-center items-center'>
    <div className='absolute z-[-1]  bottom-0 left-0 right-1/2 top-16 bg-gradient-to-br from-[#43958925] to-[#fc9e1b38]  rounded-tr-[85%] rounded-br-xl rounded-l-xl'></div>
    <div
    className='w-full mt-20'>
    <h1 className="text-xl whitespace-nowrap font-black lg:text-3xl">مای‌سنتر | دستیار مدیریت و حسابداری گیم‌سنتر</h1>
    <h2 className="font-mono text-md font-bold mt-4 lg:text-xl">Game Center Software Management</h2>
    <div className="mx-auto mt-8 mb-6 h-1 w-1/2 bg-gradient-to-r from-[#5bdbcc] to-[#ffac3e] lg:mx-0 lg:mt-12"></div>
    <p className="text-sm mb-20 lg:text-base font-Black text-gray-600">همه‌ی آنچه که برای مدیریت گیم‌سنترتان لازم دارید، در یک نرم‌افزار!
     <br/>
      <strong>
        آسان - سریع - به‌صرفه
        </strong>
      </p>
      <Link href="/" className="whitespace-nowrap font-Black rounded-md bg-accent1 px-6 py-2 text-contPrimary">دانلود رایگان نرم‌افزار</Link>
    </div>
    <HandleSVG />
  </div>
  )
}

export default Intro