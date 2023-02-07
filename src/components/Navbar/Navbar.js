import React from 'react'
import { Link } from 'react-router-dom'
import CardWidget from '../CardWidget/CardWidget'
import "./Style.css"

const Navbar = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h1 className="Logo p-2 bd-highlight" href="#">Harry Potter</h1>
          <button  className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span  className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul  className="navbar-nav">
              <li className='nav-item'>
                <Link className="nav-link" aria-current="page" to="inicio">Inicio</Link>
              </li>
              <li  className="nav-item">
                <Link className="nav-link" aria-current="page" to="tienda">Tienda</Link>
              </li>
            </ul>
            <div className="nav-link active ms-auto p-2 bd-highlight"><CardWidget/></div>
          </div>
        </div>
      </nav>
    </header>
    ) 
}

export default Navbar
