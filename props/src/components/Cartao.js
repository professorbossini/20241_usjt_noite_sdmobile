import React from 'react'

const Cartao = ({ children, cabecalho }) => {
  // const { children } = props
  return (
    <div className="card">
      <div className="card-header text-muted">
        { cabecalho }
      </div>
      <div className="card-body d-flex">
        { children }
      </div>
    </div>
  )
}
<Cartao>
  <p>oi</p>
  <p>tchau</p>
</Cartao>

export default Cartao