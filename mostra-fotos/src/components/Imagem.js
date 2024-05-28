import React from 'react'

const Imagem = ({src, alt, imgStyle, key}) => {
  return (
    <div
      className={`${imgStyle} justify-content-center flex`} 
      key={key}>
      <img
        src={src} 
        alt={alt}/>
    </div>
  )
}

export default Imagem