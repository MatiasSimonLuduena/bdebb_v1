import "./header.css"

const Header = () => {
  return (
    <div className="header">
      <div className="container d-flex flex-column align-items-center justify-content-center h-100">
        <h1 className="pb-2">
          Descubre <span>B de Bebé</span>, lotes de ropa super económicos.
        </h1>
        <h2 className="pb-5">
          <span>Ahorro inteligente</span> para mamás prácticas.
        </h2>
        <button className="mt-3">Comenzar ya</button>
      </div>
    </div>
  )
}

export default Header