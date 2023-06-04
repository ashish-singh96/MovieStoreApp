import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-wrap justify-between p-3 mt-2'>
    <div className='card font-medium shadow-lg p-1 hover:-translate-y-1 cursor-pointer'>
        <img className='h-72' src='https://marketplace.canva.com/EAFMqwkPfOY/2/0/1131w/canva-black-minimalist-horror-movie-poster-3bttgZhMDnA.jpg'></img>
        <h1><span className='text-gray-500'>Name: </span> The Dark</h1>
        <h1> <span className='text-gray-500'>Rating: </span>5</h1>
        <h1><span className='text-gray-500'>Year: </span>2009</h1>
    </div>

    </div>
  )
}

export default Card