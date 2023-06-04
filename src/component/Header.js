import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material';
const Header = () => {
  return (
    <div className='text-3xl flex justify-between items-center text-red-500  font-bold p-3 border-b-2 border-gray-500'>
      <span>Movie<span className='text-white'>Store</span></span>
       <h1 className='text-lg  flex items-center cursor-pointer'> <Button><AddIcon className='mr-1' color='secondry'/> <span className='text-white'>Add New</span></Button></h1>
    </div>
  )
}

export default Header