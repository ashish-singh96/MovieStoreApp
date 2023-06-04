import React, { useState } from 'react'
import ReactStars from 'react-stars'
const Card = () => {
    const [data, setData] = useState([
        {
            name: "The Dark",
            Year: "2008",
            Rating: "5",
            img: "https://marketplace.canva.com/EAFMqwkPfOY/2/0/1131w/canva-black-minimalist-horror-movie-poster-3bttgZhMDnA.jpg"
        }
    ])
    return (
        <div className='flex flex-wrap justify-between p-3 mt-2'>{
            data.map((element, index) => {
                return (
                    <div key={index} className='card font-medium shadow-lg p-1 hover:-translate-y-3 cursor-pointer mt-6 transition-all duration-500'>
                        <img className='h-72' src={element.img}></img>
                        <h1><span className='text-gray-500'>Name: </span> {element.name}</h1>
                        <h1 className='flex items-center'> <span className='text-gray-500 mr-1' >Rating: </span>
                        <ReactStars
                            size={20}
                            half={true}
                            edit={false}
                            value={element.Rating}
                        
                
                        />
                        </h1>
                        <h1><span className='text-gray-500'>Year: </span>{element.Year}</h1>
                    </div>
                )
            })
        }
        </div>
    )
}

export default Card