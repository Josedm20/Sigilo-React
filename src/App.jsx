import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './Header'
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3'
import Footer from './Footer'
import Personajes from './Personajes'
import Button from './Button'
import Nosotros from './Nosotros'


function App() {
  return (
    <div>
      <Header />
      <Section1 />
    
      <section className="pconocenos" id="conócenos">
        <Section2 />
        <div className='row d-flex'>
          <div className='col-12 col-lg-6'>
          <Nosotros
          Imagens2= "mision"
          Titulos2= "Misión"
          Textos2= "Desarrollar un juego web el cual tendrá como temática la enseñanza de la norma exceso de ruido, y así brindar un mejor entendimiento de esta."
          />
          </div>
          <div className='col-12 col-lg-6'>
          <Nosotros
          Imagens2= "vision"
          Titulos2= "Visión"
          Textos2= "Destacar en el mercado como una marca auténtica, educativa e innovadora."
          />
          </div>
        </div>
      </section>

      <section className='container pt-4 pjuego" id="juego' id='juego'>
        <Section3 />
        <div className='row d-flex justify-content-between'>
          <div className='col-12 col-lg-4'>
            <Personajes
              Imagens3="puar"
              Titulos3="Puar"
              Descripcions3="Puar es alguien valiente, seguro, honesto, empático y protector."
              Creadors3="Julian Higuita"
            />
          </div>
          <div className='col-12 col-lg-4'>
            <Personajes
              Imagens3="gero"
              Titulos3="Gero"
              Descripcions3="Gero es un hombre serio, disciplinado, ambicioso y arriesgado."
              Creadors3="Jose Marín"
            />
          </div>
          <div className='col-12 col-lg-4'>
            <Personajes
              Imagens3="drako"
              Titulos3="Drako"
              Descripcions3="Legendario dragon nacido a partir de la muerte de un maestro de artes marciales."
              Creadors3="Carlos Bernal"
            />
          </div>
        </div>
        <Button />
      </section>

      <Footer />
    </div>
  )
}


export default App
