import React from 'react'
import { Input } from './ui/input'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div>
      <Search className='w-5 h-5 hover:text-green-600 transition-all duration-300 ease-in-out cursor-pointer' />
      {/* <Input
        type='text'
        placeholder='Search...'
        className='border p-2 rounded'
      /> */}
    </div>
  )
}

export default SearchBar
