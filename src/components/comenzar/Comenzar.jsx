import "./comenzar.css"

const Comenzar = () => {
  return (
    <div className="comenzar">
        <h3>¡Gracias por interesarte!</h3>
        <h4>De momento no estamos disponibles</h4>
        <div className="comenzar-ps">
            <p>
                Por el momento, estamos enfocados en validar la idea y comprobar la demanda del mercado.
            </p>
            <p>
                Si estás interesada, por favor, déjanos tu correo electrónico y número de teléfono, y te notificaremos en cuanto estemos disponibles, lo cual ocurrirá muy pronto.
            </p>
        </div>
        <div className="comenzar-inputs">
            <div className="comenzar-inputs_i">
                <input type="text" placeholder="Tu correo electrónico"/>
                <input type="text" placeholder="Tu número de teléfono"/>
            </div>
            <div className="comenzar-inputs_b">
                <button>Enviar</button>
            </div>
        </div>
    </div>
  )
}

export default Comenzar