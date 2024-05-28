import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({photos, imgStyle}) => {
  return (
    photos.map((photo, key) => (
      <Imagem 
        src={photo.src.small}
        alt={photo.alt}
        key={key}
        imgStyle={imgStyle}
      />
    ))
  )
}

export default ListaImagem