'use client'

import React from 'react'
import { type IconType } from 'react-icons'
function Calling({Icon}:{Icon:IconType}) {
  return (
    <div className='p-2 bg-pink-50 rounded-md w-fit'>
      <Icon size={26} className='text-blue-500'/>
    </div>
  )
}

export default Calling