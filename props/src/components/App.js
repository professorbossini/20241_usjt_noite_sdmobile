import Corpo from "./Corpo"
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
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card">
            <div className="card-header text-muted">
              22/02/2023
            </div>
            <div className="card-body d-flex">
              <div className="d-flex align-items-center">
                <i class="fa-solid fa-pizza-slice"></i>
              </div>
              <div className="pt-3 border ms-2 flex-grow-1">
                <h4>Pizza de Muçarela</h4>
                <p>Tomate, queijo orégano e azeitonas</p>
              </div>
            </div>
          </div>
        </div>

        {/* segundo pedido */}
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card">
            <div className="card-header text-muted">
              22/03/2023
            </div>
          </div>
        </div>

        {/* terceiro pedido */}
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card">
            <div className="card-header text-muted">
              22/04/2023
            </div>
          </div>
        </div>

        {/* quarto pedido */}
        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card">
            <div className="card-header text-muted">
              22/04/2023
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default App