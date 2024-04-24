import Corpo from "./Corpo"
import Pedido from "./Pedido"
import Titulo from "./Titulo"

const App = () => {
  return (
    <div className="container border my-2 text-center">
      <div className="row">
        <div className="col-12 display-5">
          <Titulo />
        </div>
      </div>
      <div className="row">
        
        {/* primeiro pedido */}
        <div className="col-sm-12 col-md-6 col-xl-4">
          <Pedido 
            data="22/04/2023"
            titulo="Pizza de Muçarela"
            descricao="Pizza de muçarela e tomate"
            iconeEstilo="fa-solid"
            iconeNome="fa-pizza-slice"/>
        </div>

        {/* segundo pedido */}
        <div className="col-sm-12 col-md-6 col-xl-4">
          <Pedido 
            data="22/05/2023"
            titulo="Pizza de Calabresa"
            descricao="Calabresa e tomate"
            iconeEstilo="fa-solid"
            iconeNome="fa-pizza-slice" />
        </div>

        {/* terceiro pedido */}
        <div className="col-sm-12 col-md-6 col-xl-4">
          <Pedido 
            data="22/04/2023"
            titulo="Pizza portuguesa"
            descricao="Presunto, tomate e queijo"
            iconeEstilo="fa-solid"
            iconeNome="fa-pizza-slice" />
        </div>

        {/* quarto pedido */}
        <div className="col-sm-12 col-md-6 col-xl-4">
          <Pedido 
            data="22/04/2023"
            titulo="Pizza de Pepperoni"
            descricao="Pepperoni e queijo"
            iconeEstilo="fa-solid"
            iconeNome="fa-pizza-slice" />
        </div>

      </div>
    </div>
  )
}
export default App