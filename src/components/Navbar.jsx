import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-fixedtop navbar-expand-lg navbar-dark" style={{background:"#e0ccff"}}>
    <Link className="navbar-brand text-dark" to="/home">NewsHub</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
      <li className="nav-item active">
          <Link className="nav-link text-dark" to="/home">Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-dark" to="/general">General<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link text-dark" to="/business">Business</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled text-dark" to="/entertainment">Entertainment</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled text-dark" to="/health">Health</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled text-dark" to="/science">Science</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled text-dark" to="/sports">Sports</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled text-dark" to="/technology">Technology</Link>
        </li>
      </ul>
    
    </div>
  </nav>
  )
}

export default Navbar