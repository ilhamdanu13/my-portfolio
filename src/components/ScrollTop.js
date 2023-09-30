import React from 'react'
import Link from 'next/link'
import {BsArrowUp} from 'react-icons/bs'

const ScrollTop = () => {
  return (
    <div className='fixed bottom-0 right-5'>
        <Link href={'#/'} scroll={false} className=''>
        <BsArrowUp className='w-14 h-40 text-[#F8E7A1] z-auto'/>
        </Link>
    </div>
  )
}

export default ScrollTop