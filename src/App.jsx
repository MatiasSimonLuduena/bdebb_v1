// components
import Navbar from "./components/navbar/Navbar"
import Header from "./components/header/Header"
import Section1 from "./components/section1/Section1"
import About from "./components/about/About"
import Section2 from "./components/section2/Section2"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <div className="container">
      <Navbar/>
      <hr/><br/>
      <Header/>
      <hr/><br/>
      <Section1/>
      <hr/><br/>
      <About/>
      <hr/><br/>
      <Section2/>
      <hr/><br/>
      <Footer/>
    </div>
  )
}

export default App
