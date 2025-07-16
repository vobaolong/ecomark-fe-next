import { SignInButton } from '@clerk/nextjs'
import React from 'react'

const Signin = () => {
  return (
    <SignInButton mode='modal'>
      <button className='text-sm font-semibold px-4 py-2 rounded hover:text-green-800 text-green-600 hover:cursor-pointer transition-all duration-300 ease-in-out'>
        Login
      </button>
    </SignInButton>
  )
}

export default Signin
