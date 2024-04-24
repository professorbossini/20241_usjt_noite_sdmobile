import React from 'react'


const Pedido = (props) => {
  // const data = props.data
  // const iconeNome = props.iconeNome
  // const iconeEstilo = props.iconeEstilo
  // const titulo = props.titulo
  // const descricao = props.descricao
  //operador de desestrutrução do js
  const {
    data,
    iconeNome,
    iconeEstilo,
    titulo,
    descricao
  } = props
  return (
    <div className="card">
      <div className="card-header text-muted">
        {data}
      </div>
      <div className="card-body d-flex">
        <div className="d-flex align-items-center">
          <i class={`${iconeNome} ${iconeEstilo}`}></i>
        </div>
        <div className="pt-3 border ms-2 flex-grow-1">
          <h4>{titulo}</h4>
          <p>{descricao}</p>
        </div>
      </div>
    </div>
  )
}

export default Pedido