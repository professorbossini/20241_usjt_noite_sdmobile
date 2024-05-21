import React from 'react'
import Imagem from './Imagem'

const ListaImagem = ({photos}) => {
  return (
    photos.map((photo, key) => (
      <Imagem 
        src={photo.src.small}
        alt={photo.alt}
        key={key}
      />
    ))
  )
}

export default ListaImagem