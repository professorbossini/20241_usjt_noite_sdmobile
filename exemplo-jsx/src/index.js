import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'
const App = () => {
  const estilosBotao = { marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', border: 'none', color: 'white', borderRadius: 8, width: '100%' }
  const textoRotulo = 'Nome:'
  const textoBotao = () => 'Enviar'
  return(
    <div
      style={{margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}}>
        <label
          className='rotulo' 
          htmlFor="nome"
          style={{display: 'block', marginBottom: 4}}>
            {textoRotulo}
        </label>
        <input 
          type="text"
          id="nome"
          style={{paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', outline: 'none', borderRadius: 8, width: '100%'}}/>
        <button
          style={estilosBotao}
          onClick={}>
          {textoBotao()}
        </button>
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.querySelector('#root')
)

