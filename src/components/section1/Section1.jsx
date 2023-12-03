import "./section1.css"

const Section1 = () => {
  return (
    <div className="section1">
      <div className="container">
        <div className="block">
          <div>
            <h3>¿Que ofrecemos?</h3>
            <p>
              En B de Bebé, nos dedicamos a facilitar el ahorro a las mamás proporcionando lotes o sets de ropa de segunda mano para sus bebés, ofreciendo una opción asequible y sostenible para que tu pequeño se vea adorable sin que tengas que comprometer tu presupuesto.
            </p>
            <p>
              Nuestra premisa es simple: al ofrecer ropa usada, podemos brindarte los mejores precios del mercado. Imagina tener el ropero de tu bebé lleno y listo para cada etapa de su crecimiento. Con nuestros lotes, te ahorrarás no solo grandes cantidades de dinero, sino también tiempo valioso que de otra manera se gastaría buscando constantemente nuevas prendas.
            </p>
            <p>
              En B de Bebé, comprendemos que cada mamá busca lo mejor para su bebé, y creemos que la ropa de segunda mano puede ser igual de encantadora y cómoda. Cada prenda en nuestros lotes ha sido seleccionada con cuidado, garantizando no solo calidad y cuidado sino también una perfecta higiene y desinfección.
            </p>
            <p>
              No solo te ofrecemos ropa, sino una solución completa para el guardarropa de tu bebé. 
            </p>
          </div>
          <img src="test3.jpg" alt="image" />
        </div>
        <div className="b-2">
          <h3>Obtendrás</h3>
          <div className="contain-cards">
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro" />
              <p>20 prendas adorables para tu bebé por tan solo $9500 pesos.</p>
            </div>
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro" />
              <p>Puedes seleccionar las prendas que más te gusten o necesites.</p>
            </div>
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro" />
              <p>Variedad en tallas y estilos. Desde recién nacidos hasta más grandecitos.</p>
            </div>
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro" />
              <p> Garantía de devolución en caso de cualquier inconveniente o disgusto.</p>
            </div>
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro" />
              <p>Seguridad de pago. Tu eliges el método.</p>
            </div>
            <div className="card-box">
              <img src="icons/ahorros.png" alt="ahorro" />
              <p>¡Tu compra llegará directamente a tu puerta, sin costo adicional!</p>
            </div>
          </div>
          <p className="p-msg">
            En B de Bebé, nos esforzamos por ofrecer una experiencia de compra sin preocupaciones. Desde la selección hasta la entrega, estamos aquí para hacer que la vida de las mamás sea más fácil y más asequible.
          </p>
        </div>

        <button className="m-3">Comenzar ahora</button>
      </div>
    </div>
  )
}

export default Section1