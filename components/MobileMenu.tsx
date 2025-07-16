'use client'

import { headerData } from '@/constants/data'
import { AlignLeft, X } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useState } from 'react'
import Logo from './Logo'
import SocialMedia from './SocialMedia'
interface SidebarMenuProps {
  isOpen: boolean
  onClose: () => void
}
const SidebarMenu = ({ isOpen, onClose }: SidebarMenuProps) => {
  const pathName = usePathname()
  const handleMenuClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }
  return (
    <div
      className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} fixed inset-y-0 h-screen left-0 w-full text-white bg-black/50 shadow-lg transition-transform duration-300 ease-in-out`}
      onClick={onClose}
    >
      <div
        className='flex flex-col gap-6 p-10 h-screen bg-black max-w-96 min-w-72'
        onClick={handleMenuClick}
      >
        <div className='gap-5 flex items-center justify-between'>
          <Logo className='text-white' />
          <button onClick={onClose} className='text-white hover:text-white/90'>
            <X />
          </button>
        </div>
        <div className='flex flex-col space-y-4 font-semibold tracking-wide'>
          {headerData.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className={`text-lg font-semibold transition-colors duration-300 ease-in-out ${
                pathName === item.href ? 'text-green-600' : 'text-white'
              } hover:text-green-600`}
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
        </div>
        <SocialMedia />
      </div>
    </div>
  )
}
const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className='md:hidden'>
        <AlignLeft className='hover:text-green-800 transition-all duration-300 ease-in-out md:hidden hover:cursor-pointer' />
      </button>
      <div className='absolute top-16 left-0 h-full bg-white shadow-md'>
        <SidebarMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
      </div>
    </>
  )
}

export default MobileMenu
