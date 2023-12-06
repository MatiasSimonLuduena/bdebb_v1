import "./section1.css"

import { Link } from "react-router-dom"

import { analytics } from "../../firebase"
import { logEvent } from "firebase/analytics"

const Section1 = () => {
  function click() {
    logEvent(analytics, 'click-comenzar');
  }

  return (
    <div className="section1" id="section1">
      <div className="container">
        <h3>¿Que ofrecemos?</h3>
        <div className="block">
          <div>
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
          <img src="test2.jpg" alt="image" />
        </div>
        <div className="b-2">
          <h3>Obtendrás</h3>
          <div className="contain-cards">
            <div>
              <img src="icons/tilde.png" alt="tilde" />
              <p>20 prendas impecables por tan solo $9500.</p>
            </div>
            <div>
              <img src="icons/tilde.png" alt="tilde" />
              <p>Interfáz para seleccionar las prendas.</p>
            </div>
            <div>
              <img src="icons/tilde.png" alt="tilde" />
              <p>Variedades en talles y estilos.</p>
            </div>
            <div>
              <img src="icons/tilde.png" alt="tilde" />
              <p>Garantía de devolución en caso de disguste.</p>
            </div>
            <div>
              <img src="icons/tilde.png" alt="tilde" />
              <p>Envio a domicilio sin costo adicional.</p>
            </div>
            <div>
              <img src="icons/tilde.png" alt="tilde" />
              <p>Multiples métodos de pagos.</p>
            </div> 
          </div>
          <p className="p-msg">
            En B de Bebé, nos esforzamos por ofrecer una experiencia de compra sin preocupaciones. Desde la selección hasta la entrega, estamos aquí para hacer que la vida de las mamás sea más fácil y más asequible.
          </p>
        </div>
        <div className="c-button">
          <Link to="/comenzar">
            <button className="m-3" onClick={click}>Comenzar ahora</button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Section1