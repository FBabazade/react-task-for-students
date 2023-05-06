import React from 'react'

function Card({url,handleImg}) {
  return (
    <div className='card'>
        <img onClick={handleImg} src={url} alt="fotos" />
    </div>
  )
}

export default Card