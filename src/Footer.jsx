import React from 'react'
import './Pagina.css'

function Footer() {
    return (
        <div>
            <footer>
                <div className="row">
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center py-4">
                        <div className="d-flex flex-column">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link mb-4 text-white"
                                        href="https://www.iubenda.com/es/help/37616-que-son-los-terminos-y-condiciones-y-para-que-sirven#:~:text=
                                Los%20T%C3%A9rminos%20y%20Condiciones%20representan,contenido%20de%20forma%20legalmente%20vinculante."
                                        target="_blank">Términos y Condiciones</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-white" href="https://www.google.com/intl/es-419/gmail/about/"
                                        target="_blank">Sigilo3244@gmail.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center py-4 mb-4">
                        <img className="img-fluid mt-4 " src="./IMG/logoq.png" alt="" width="50px" height="79px" />
                    </div>
                    <div className="col-12 col-lg-4 d-flex justify-content-center align-items-center py-4">
                        <a href="https://www.instagram.com/" target="_blank"><img className="me-5 img-transform-f"
                            src="./IMG/instagram.png" alt="" /></a>
                        <a href="https://www.facebook.com/" target="_blank"><img className="me-5 img-transform-f"
                            src="./IMG/facebook.png" alt="" /></a>
                        <a href="https://web.whatsapp.com/" target="_blank"><img className="img-transform-f"
                            src="./IMG/whatsapp.png" alt="" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer