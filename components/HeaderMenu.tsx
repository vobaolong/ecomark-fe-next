'use client'

import { headerData } from '@/constants/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const HeaderMenu = () => {
  const pathName = usePathname()

  return (
    <div className='hidden md:inline-flex w-1/3 items-center gap-7 text-md capitalize font-semibold text-slate-800'>
      {headerData.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className={`hover:text-green-600 transition-all duration-300 ease-in-out relative group text-nowrap ${
            pathName === item.href ? 'text-green-600' : ''
          }`}
        >
          {item.title}
          <span
            className={`absolute -bottom-0.5 left-1/2 w-0 h-0.5 bg-green-600 group-hover:w-1/2 group-hover:left-0 transition-all duration-300 ease-in-out ${
              pathName === item.href ? 'w-1/2' : ''
            } `}
          />
          <span
            className={`absolute -bottom-0.5 right-1/2 w-0 h-0.5 bg-green-600 group-hover:w-1/2 group-hover:right-0 transition-all duration-300 ease-in-out ${
              pathName === item.href ? 'w-1/2' : ''
            }`}
          />
        </Link>
      ))}
    </div>
  )
}

export default HeaderMenu
