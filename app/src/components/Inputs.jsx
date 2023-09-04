import React from 'react'
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'
const Inputs = () => {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className='flex flex-row w-3/4 items-center justify-center space-x-4'>
            <input 
            placeholder='search for city...'
            className='text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase '>
            </input>
            <UilSearch className='text-white transition ease-out hover:scale-125' size={25}/>
            <UilLocationPoint className='text-white transition ease-out hover:scale-125' size={25}/>
        </div>
        <div className='flex flex-row w-1/4 items-center justify-center'>
          <button className='text-xl text-white font-light'>°C</button>
          <p className='text-xl text-white mx-1'>|</p>
          <button className='text-xl text-white font-light'>°F</button>
        </div>
    </div>
  )
}

export default Inputs