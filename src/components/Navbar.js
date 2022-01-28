import React from 'react';

export default function Navbar() {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <div className="container-fluid">
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button class="btn btn-primary me-md-2" type="button">Login</button>
        <button class="btn btn-primary" type="button">Signup</button>
       </div>
      
    </div>
  </nav>
  )
}
