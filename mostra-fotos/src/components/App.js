import React from 'react'
import Busca from './Busca'
import { createClient } from 'pexels'
class App extends React.Component {

  state = {
    photos: []
  }

  pexelsClient = null
  chave = '563492ad6f91700001000001e00b21ab6afb45a18c1d44a759556f14'

  componentDidMount(){
    this.pexelsClient = createClient(this.chave)
  }
  onBuscaRealizada = (termo) => {
    this.pexelsClient.photos.search({
      query: termo,
      per_page: 1
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
        <div className="col-8">
          <Busca 
            onBuscaRealizada={this.onBuscaRealizada}/>
        </div>
        <div className='col-8'>
          {
            this.state.photos.map((photo, key) => (
              <div key={key}>
                <img src={photo.src.small} alt={photo.alt}/>
              </div>
            ))
          }
        </div>
      </div>
    )
  }
}

export default App