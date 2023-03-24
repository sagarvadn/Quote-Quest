import React from 'react'
import { Link } from 'react-router-dom'
import logo from './Quote-Quest.png'

export default function NavBar() {
  return (
    <>
          <header className="mb-auto">
{/*               <div>
                  <h3 className="float-md-start mb-0">QQ</h3>
                  <nav className="nav nav-masthead justify-content-center float-md-end">
                      <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="/">Home</a>
                      <Link className="nav-link fw-bold py-1 px-0" to="/tech-savvy-phrases">Features</Link>
                      <Link className="nav-link fw-bold py-1 px-0" to="/corporate-buzz-words">Contact</Link>
                      <Link className="nav-link fw-bold py-1 px-0" to="/random-useless-facts">Contact</Link>
                  </nav>
              </div> */}
         


    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img src={logo} alt="Quote Quest Logo" width={'150px'} height={'80px'}/></Link>
    <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/tech-savvy-phrases">Tech Savvy Phrases</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/corporate-buzz-words">Corporate Buzz Words</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/random-useless-facts">Random Useless Facts</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
 </header>
</>
  )
}
