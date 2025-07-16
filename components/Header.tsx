import React from 'react'
import Container from './Container'
import Logo from './Logo'
import HeaderMenu from './HeaderMenu'
import SearchBar from './SearchBar'
import CartIcon from './CartIcon'
import FavoriteButton from './FavoriteButton'
import Signin from './Signin'
import MobileMenu from './MobileMenu'
import { ClerkLoaded, SignedIn, UserButton } from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'

const Header = async () => {
  const user = await currentUser()

  return (
    <header className='bg-white py-5'>
      <Container className='flex items-center justify-between'>
        <div className='flex items-center gap-2.5 md:w-1/3 justify-start w-auto text-green-600 md:gap-0'>
          <MobileMenu />
          <Logo />
        </div>
        <HeaderMenu />
        <div className='flex items-center gap-5 w-auto md:w-1/3 justify-end'>
          <SearchBar />
          <CartIcon count={5} />
          <FavoriteButton count={3} />
          <ClerkLoaded>
            <SignedIn>
              <UserButton />
            </SignedIn>
            {!user && <Signin />}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  )
}

export default Header
