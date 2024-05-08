import React from 'react'
import Busca from './Busca'
class App extends React.Component {
  onBuscaRealizada = (termo) => {
    console.log(termo)
  }
  chave = '563492ad6f91700001000001e00b21ab6afb45a18c1d44a759556f14'
  render(){
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-8">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
      </div>
    )
  }
}

export default App