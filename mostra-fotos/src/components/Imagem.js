import React from 'react'

const Imagem = ({src, alt, key}) => {
  return (
    <div key={key}>
      <img src={src} alt={alt}/>
    </div>
  )
}

export default Imagem