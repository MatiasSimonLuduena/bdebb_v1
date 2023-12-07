// components
import Header from "./components/header/Header"
import Section1 from "./components/section1/Section1"
import About from "./components/about/About"
import Section2 from "./components/section2/Section2"
import Footer from "./components/footer/Footer"
import Comenzar from "./components/comenzar/Comenzar"

// react
import { useEffect, useState } from "react"

// router dom
import { Route, Routes, Navigate } from "react-router-dom"

// firebase
import { firestore } from "./firebase"
import { collection, addDoc } from "firebase/firestore"

const storage = localStorage.getItem('session') ? localStorage.getItem('session') : false

function App() {
  const [session, setSession] = useState(storage);

  useEffect(() => {
    // Encuentra todos los enlaces que apuntan a secciones
    const link = document.querySelector('a[href^="#"]');

    // Maneja el clic en cada enlace
    const handleClick = (e) => {
      e.preventDefault(); // Evita el comportamiento predeterminado del enlace
      
      // Obtiene el destino desde el atributo href
      const targetId = e.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);

      // Desplázate hacia la sección
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth' // Desplazamiento suave
        });
      }
    };

    // Agrega el evento de clic a cada enlace
    link && link.addEventListener('click', handleClick);
    
    // Limpia los eventos al desmontar el componente

    // localstorage
    async function storage() {
      try {
        if (!session) {
          const res = await addDoc(collection(firestore, 'bdebebe'), {
            session: true
          });
          localStorage.setItem('session', res.id);
        }
      } catch (error) {
        console.log(error);
      }
    }
    storage()
    return () => {
      link.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <Routes>
      <Route path="/comenzar" element={<Comenzar/>}/>
      <Route path="/" element={
        <>
          <Header/>
          <Section1/>
          <About/>
          <Section2/>
          <Footer/>
        </>
      }/>
      <Route path="/*" element={<Navigate to="/"/>}/>
    </Routes>
  )
}

export default App
