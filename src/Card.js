import React from 'react'

function Card({title, image,location, map, begin, end, desc}) {
  return (
    <div className='card'>
        <img src={image} alt='pic' className='pic' />
        <div className='img-desc'>
            <div className='location'>
                <img src='path.png' alt='lolo' className='path'/>
                <span>{location}</span>
                <a className='link' href='{map}'>View on google map</a>
            </div>
            <h3 className='title'>{title}</h3>
            <p className='date'>{begin}-{end}</p>
            <p className='text'>{desc}</p>
         </div>
    </div>
  )
}

export default Card