import React from 'react'
import Busca from './Busca'
// import { createClient } from 'pexels'
import pexelsClient from '../utils/pexelsClient'
import ListaImagem from './ListaImagem'
class App extends React.Component {

  state = {
    photos: [],
    texto: ''
  }

  pexelsClient = null
  chave = '563492ad6f91700001000001e00b21ab6afb45a18c1d44a759556f14'

  componentDidMount(){
    // this.pexelsClient = createClient(this.chave)
    pexelsClient.get('/hello')
    .then((res) => this.setState({texto: res.data}))
  }
  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo,
      per_page: 10
    })
    .then((result) => {
      this.setState({
        photos: result.photos
      })
    })
  }
  render(){
    return (
      <div className='grid justify-content-center m-auto w-9 border-round border-1 border-400'>
        <div className="col-12">
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className="col-12">
          <p>{this.state.texto}</p>
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className='col-12'>
          <div className='grid'>
            <ListaImagem
              imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'}
              photos={this.state.photos}/>
          </div>
        </div>
      </div>
    )
  }
}

export default App