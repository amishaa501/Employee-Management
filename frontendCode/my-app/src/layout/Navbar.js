import React from 'react'

function Navbar() {
  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <a className="navbar-brand" href="#"> Employee Manager Portal </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <button type="button" className="btn btn-light"> Add User</button>
  </nav>
    </div>
  )
}

export default Navbar