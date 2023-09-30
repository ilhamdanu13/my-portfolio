import React from 'react'
import Link from 'next/link'
import {BsArrowUp} from 'react-icons/bs'

const ScrollTop = () => {
  return (
    <div className='fixed bottom-0 right-5 z-50'>
        <Link href={'#/'} scroll={false} className=''>
        <BsArrowUp className='w-10 h-20 text-[#F8E7A1] '/>
        </Link>
    </div>
  )
}

export default ScrollTop