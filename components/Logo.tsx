import { cn } from '@/lib/utils'
import Link from 'next/link'
import React from 'react'

const Logo = ({ className }: { className?: string }) => {
  return (
    <Link href='/' className={cn('group', className)}>
      <h2
        className={cn(
          'text-2xl font-black tracking-wider uppercase transition-all duration-300 ease-in-out text-green-800 	group-hover:text-green-600',
          className
        )}
      >
        Eco
        <span className='transition-all duration-300 ease-in-out text-green-600 group-hover:text-green-800'>
          mark
        </span>
      </h2>
    </Link>
  )
}

export default Logo
