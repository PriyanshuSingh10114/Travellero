import React from 'react'
import {Link} from 'react-router-dom'

const DestinationCtgCard = () => {
  return (
    <>
        <Link to={`/destination/${item.id}`} className="destination-item w-full"
        >
            <div className="destination-image h-full w-full relative group overflow-hidden rounded-4xl">
                <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
        </Link>
    </>
  )
}

export default DestinationCtgCard