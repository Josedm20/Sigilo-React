import React from 'react'
import './Pagina.css'

function Section1() {
    return (
        <div>
            <section className="row container-fluid msection" id="sigilo">
                <div className="col-12 col-lg-6 d-flex justify-content-center">
                    <img className="img-fluid img-transform-s1" src="./IMG/imagencita.png" alt="logo" />
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center">
                    <div className="pt-5 px-5">
                        <h1 className="text-center text-lg-center fw-bold text-black">¿Qué es Sigilo?</h1>
                        <p className="texto text-black"> Sigilo es una marca la cual fue creada por tres jóvenes con el
                            fin de atacar una problemática que afecta a muchas personas en su día a día. (Esta problemática
                            es el exceso de ruido, teniendo como meta la concientización de las personas).
                        </p>
                        <h1 className="text-center text-lg-center pt-4 text-black fw-bold">Problemática</h1>
                        <p className="texto text-black">Desde hace un tiempo hemos percibido que una problemática muy
                            común que tiene la sociedad es la alteración de la tranquilidad por exceso de ruido, esto
                            ocasionando conflictos entre la comunidad. Queremos aportar un método de aprendizaje para
                            enseñar de manera más fácil y eficaz a cumplir esta norma.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Section1