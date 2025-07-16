import { Heart } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FavoriteButton = ({ count }: { count: number }) => {
  return (
    <Link href='/cart' className='relative group'>
      <Heart className='w-5 h-5 hover:text-green-600 transition-all duration-300 ease-in-out cursor-pointer' />
      {count > 0 && (
        <span className='absolute -top-2 -right-2 bg-green-800 text-white text-xs rounded-full px-1 py-0.25 min-w-[18px] text-center select-none'>
          {count}
        </span>
      )}
    </Link>
  )
}

export default FavoriteButton
