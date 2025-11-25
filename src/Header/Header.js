import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (

    <nav className='navbar navbar-expand-lg navbar-dark fixed-top bg-white shadow-lg px-sm-2 px-lg-2'>
      <Container fluid>
        <a href='#' className='navbar-brand fw-bolder fs-5'>
          <img src={ require('../images/react_logo.png') } loading="lazy" className=' img-fluid' style={ { width: '25px' } }
            srcSet={ require('../images/react_logo.png') } alt="" />
          <span className=' text-dark'>React Flow</span>
        </a>
        <button type='button' className='navbar-toggler' data-bs-target="#navMenu" data-bs-toggle="collapse"
          aria-expanded="false" aria-controls='navbarNav'>
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-end' id='navMenu'>
          <ul className='navbar-nav ms-auto'>

            <li className='nav-item'>
              <Link to="/home" className='nav-link '>Home</Link>
            </li>
            {/* <li className='nav-item'>
              <Link to="/register" className='nav-link '>Register</Link>
            </li> */}
            <li className='nav-item'>
              <Link className='nav-link' to='/apiformdata'>APIFormData</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/formik'>Formik</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link ' to="/todolist">TodoList</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/apicalls">API Calls</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/props">Props</Link>
            </li>
            <li className='nav-item'>
              <Link to="custums" className='nav-link'>Custum Options</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to="/pagenation">PageNation</Link>
            </li>
            <li className='nav-item'>
              <Link to="/postcall" className='nav-link'>PostCall</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/common'>Common Comp</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/customapi'>useCustomAPI</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/materialui'>MaterialUI</Link>
            </li>
            <li className='nav-item'>
              <Link className='nav-link' to='/reduxtool'>Redux toolkit</Link>
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}
export default Header