import "./footer.css"

const Footer = () => {
  return (
    <div className="footer">
      <div className="container c-footer">
        <div className="footer_b-1">
          <div>
            <img src="Logo_B.jpg" alt="logo" />
            <span>B de Bebé</span>
          </div>
          <p>Soluciones inteligentes y accesibles para las mamás que buscan lo mejor para sus pequeños sin comprometer su presupuesto.</p>
        </div>
        <div className="footer_b-2">
          <p>Redes sociales</p>
          <div>
            <img src="icons/instagram.png" alt="Instagram" />
            <img src="icons/whatsapp.png" alt="Whatsapp" />
            <img src="icons/facebook.png" alt="Facebook" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer