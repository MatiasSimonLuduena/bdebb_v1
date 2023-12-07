import "./comenzar.css"
import { useState } from "react"

// firebase
import { doc, updateDoc } from "firebase/firestore";
import { firestore } from "../../firebase"

const Comenzar = () => {
    const [handle, setHandle] = useState({ email: "", numero: "" });
    const [errors, setErrors] = useState({ email: false, numero: false });
    
    function submit() {
        if (!handle.email.length) {
            setErrors({...errors, email: true});
            return;
        }

        if (!handle.numero.length) {
            setErrors({email: false, numero: true});
            return;
        }

        const documentoRef = doc(firestore, 'bdebebe', localStorage.getItem('session'));

        updateDoc(documentoRef, {
            email: handle.email, numero: handle.numero
        }).then(() => console.log('Documento actualizado')).catch(err => console.log(err));

        alert("Formulario recibido ¡Muchas gracias!");
        setErrors({...errors, numero: false});
    }

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
                    <div>
                        <input type="email" placeholder="Tu correo electrónico"
                            value={handle.email}
                            onChange={e => setHandle({...handle, email: e.target.value})}
                        />
                        {errors.email && <p>Campo de email vacio</p>}
                    </div> 
                    <div>
                        <input type="number" placeholder="Tu número de teléfono"
                            value={handle.numero}
                            onChange={e => setHandle({...handle, numero: e.target.value})}
                        />
                        {errors.numero && <p>Campo de número vacio</p>}
                    </div>
                </div>
                <div className="comenzar-inputs_b">
                    <button onClick={submit}>Enviar</button>
                </div>
            </div>
        </div>
    )
}

export default Comenzar