// components
import Header from "./components/header/Header"
import Section1 from "./components/section1/Section1"
import About from "./components/about/About"
import Section2 from "./components/section2/Section2"
import Footer from "./components/footer/Footer"

function App() {
  return (
    <>
      <Header/>
      <Section1/>
      <div className="container">
        <About/>
        <hr/><br/>
        <Section2/>
        <hr/><br/>
        <Footer/>
      </div>
    </>
  )
}

export default App
