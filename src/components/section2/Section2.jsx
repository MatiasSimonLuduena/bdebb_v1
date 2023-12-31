import "./section2.css"

import { Link } from "react-router-dom"

// firebase
import { firestore } from "../../firebase"
import { doc, updateDoc } from "firebase/firestore";

const Section2 = () => {
  function click() {
    const documentoRef = doc(firestore, 'bdebebe', localStorage.getItem('session'));
    
    updateDoc(documentoRef, {
      clic2: "section 2"
    }).then(() => console.log('Documento actualizado')).catch(err => console.log(err));
  }

  return (
    <div className="section2">
      <div className="container c-s1">
        <h3>Comenzar</h3>
        <div className="c-s1_p">
          <p>
            En nombre de B de Bebé, estamos emocionados de presentarte una propuesta de valor que transformará tu experiencia. Si buscas calidad, conveniencia y ahorro, estás en el lugar adecuado.
          </p>
          <p>
            ¿Te gustaría poder ahorrar gran parte de tu ingreso, más que nada en esta epoca de crisis?
          </p>
          <p>
            Si la respuesta es sí, te animamos a que des el siguiente paso. Haz click en el botón &quot;Comenzar Ahora&quot; y descubre una forma completamente nueva de abastecerte de ropa para tu pequeño. No solo estás haciendo una compra; estás invirtiendo en comodidad y ahorro.
          </p>
        </div>
        <Link to="/comenzar">
          <button onClick={click}>Comenzar ahora</button>
        </Link>
      </div>
    </div>
  )
}

export default Section2