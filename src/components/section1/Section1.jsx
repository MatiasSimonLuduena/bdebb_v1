import "./section1.css"

const Section1 = () => {
  return (
    <div className="section1">
      <div className="container">
        <div className="block">
          <div>
            <h3>¿Que ofrecemos?</h3>
            <p>
              En B de Bebé, nos dedicamos a facilitar el ahorro a las mamás proporcionando lotes de ropa de segunda mano para sus bebés, ofreciendo una opción asequible y sostenible para que tu pequeño se vea adorable sin que tengas que comprometer tu presupuesto.
            </p>
            <h5>Nuestra premisa:</h5>
            <p>
              Al ofrecer ropa usada, podemos brindarte los mejores precios del mercado. Imagina tener el ropero de tu bebé lleno y listo para cada etapa de su crecimiento. Con nuestros lotes, te ahorrarás no solo grandes cantidades de dinero, sino también tiempo valioso que de otra manera se gastaría buscando constantemente nuevas prendas.
            </p>
            <p>
              Cada prenda en nuestros lotes ha sido seleccionada con cuidado, garantizando no solo calidad y cuidado sino también una perfecta higiene y desinfección. No solo te ofrecemos ropa, sino una solución completa para el guardarropa de tu bebé. 
            </p>
          </div>
          <img src="test3.jpg" alt="image" />
        </div>
        <div className="b-2">
          <h3>Ofrecemos</h3>
          <div className="contain-cards">
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro"/>
              <p>20 prendas por tan solo $9500</p>
            </div>
            <div className="card-box">
              <img src="icons/seleccione.png" alt="seleccionar"/>
              <p>Puedes seleccionar las prendas.</p>
            </div>
            <div className="card-box">
              <img src="icons/bebe.png" alt="variedad" />
              <p>Variedad en tallas y estilos.</p>
            </div>
            <div className="card-box">
              <img src="icons/devolucion.png" alt="devolución" />
              <p>Garantía de devolución.</p>
            </div>
            <div className="card-box">
              <img src="icons/enviado.png" alt="envio" />
              <p>Envio sin costo adicional</p>
            </div>
          </div>
          <p className="p-msg">
            En B de Bebé, nos esforzamos por ofrecer una experiencia de compra sin preocupaciones. Desde la selección hasta la entrega, estamos aquí para hacer que la vida de las mamás sea más fácil y más asequible.
          </p>
        </div>

        <div className="ms-5 pb-4 c-button">
          <button className="m-3">Comenzar ahora</button>
        </div>
      </div>
    </div>
  )
}

export default Section1