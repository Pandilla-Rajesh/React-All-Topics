import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import { ref } from 'yup';
import Register from '../Register/Register';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function Home() {


  // event deligation //

  const [text, setText] = useState()
  const [name, setName] = useState()

  const handleName = (e) => {
    if(e.target.classList = 'list-group-item') {
      setName(e.target.textContent)
      console.log(e.target.value, 'events name')
    }
  }

  const handleText = (e) => {
    if(e.target.classList = "list-group-item") {
      setText(e.target.textContent)
      console.log(e.target.value, 'text event')
    }
  }

  // end //

  // select-country //

  const [countries, setCountries] = useState([])
  const [selectedCountry, setSelectedCountry] = useState(null)

  const getCountries = async () => {
    try {
      const res = await axios.get('https://restcountries.com/v3.1/all')
      // const result = await res.json()
      setCountries(res.data)
      console.log(res.data, 'countries data')
    } catch(error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCountries()
  }, [])

  const handleCountryChange = (e) => {
    setSelectedCountry(e.target.value)
  }

  // end //

  // hover effect //

  const [isHovered, setIsHovered] = useState(false)
  const hoverref = useRef(null)

  const handleMouseHover = () => setIsHovered(true)
  const handleMouseOut = () => setIsHovered(false)

  useEffect(() => {

    const node = hoverref.current

    if(node) {

      node.addEventListener('mouseover', handleMouseHover)
      node.addEventListener('mouseout', handleMouseOut)

      return () => {

        node.removeEventListener('mouseover', handleMouseHover)
        node.removeEventListener('mouseout', handleMouseOut)

      }

    }

  }, [hoverref])

  // end //

  // select-box-append-delete //

  const productaAll = ['Computer', 'Laptop', 'Mobile', 'Phone', 'Cell', 'Macbook', 'Desktop', 'Mini Computer', 'Mini Laptop']
  const [products, setProducts] = useState([])
  const [selected, setSelected] = useState('')

  const handleAddProduct = () => {

    if(selected && !products.includes(selected)) {
      setProducts([...products, selected])
      setSelected('')
    }

  }

  const handleDelete = (product) => {
    setProducts(products.filter((item) => item !== product))
  }

  // end //

  return (
    <>
      <section className='info-home-screen'>
        <Container fluid>
          <Row className=' align-content-center justify-content-center mt-5' style={ { height: '100vh' } }>
            {/* <Col lg={ 12 }>
              <Row className=' justify-content-center align-content-center'>
                <Col lg={ 5 }>
                  <Typography variant='h1' component="h1" className='text-white fw-bolder'>
                    THINK
                  </Typography>
                </Col>
              </Row>
              <Row className=' justify-content-end align-content-end'>
                <Col lg={ 5 }>
                  <Typography variant='h1' component="h1" className='text-white fw-bolder'>
                    BEFORE</Typography>
                </Col>
              </Row>
              <Row className=' justify-content-center align-content-center'>
                <Col lg={ 5 }>
                  <Typography variant='h1' component="h1" className='text-white fw-bolder'>
                    YOU</Typography>

                </Col>
              </Row>
              <Row className=' justify-content-end align-content-end'>
                <Col lg={ 5 }>
                  <Typography variant='h1' component="h1" className='text-white fw-bolder'>
                    CLICK.
                  </Typography>

                </Col>
              </Row>
            </Col> */}

            <Col lg={ 7 }>
              {/* <div className=' position-absolute top-0 z-1 mx-auto'>
                <img src={ require('../../images/glitch-img-use.png') } loading='lazy' className='img-fluid'
                  alt="glitch image" />
              </div> */}
              <Typography variant='h1' component="h1"
                className='text-white z-3 position-relative text-center border border-1 
                border-dark-subtle p-2 mb-4'>
                welcome to the React Topics Flow
              </Typography>
            </Col>
            <Col lg={ 12 }>
              <Typography variant='h4' component="h4" className='text-light text-center fw-light'>
                <marquee behavior="alternate" onmouseover="this.stop()" onmouseout="this.start()">
                  Explore the essential concepts of React in a clear and structured way.
                  This guide helps you quickly navigate core topics, learn best practices,
                  and deepen your understanding as you build modern, interactive web applications.
                </marquee>
              </Typography>
            </Col>
            {/* <Col lg={ 12 }>
              <Typography variant='h2' component="h2" className='text-white marquee'
                onMouseEnter="this.stop()" onMouseLeave="this.start()">
                This is a modern CSS marquee scrolling text.
              </Typography>
            </Col> */}
          </Row>
        </Container>
      </section>
      <section className="py-5 bg-success-subtle">
        <Container fluid>
          <Row>
            <Col lg={ 4 }>
              <h5>Event Deligation Names</h5>
              <h4>{ name }</h4>
              <div onClick={ handleName }>
                <ListGroup>
                  <ListGroup.Item>Rajesh</ListGroup.Item>
                  <ListGroup.Item>Ushasri</ListGroup.Item>
                  <ListGroup.Item>Aadhya</ListGroup.Item>
                  <ListGroup.Item>Arjun</ListGroup.Item>
                  <ListGroup.Item>Anasurya</ListGroup.Item>
                  <ListGroup.Item>Sathyanarayana</ListGroup.Item>
                </ListGroup>
              </div>
            </Col>
            <Col lg={ 4 } className="border-1 border-secondary">
              <h4>Event Deligation task</h4>
              <h3 className='text-body'>{ text }</h3>
              <div onClick={ handleText }>
                <ListGroup>
                  <ListGroup.Item>Event 1</ListGroup.Item>
                  <ListGroup.Item>Event 2</ListGroup.Item>
                  <ListGroup.Item>Event 3</ListGroup.Item>
                  <ListGroup.Item>Event 4</ListGroup.Item>
                </ListGroup>
              </div>

            </Col>

            {/* props */ }

            <Col lg={ 4 }>
              <div>
                <h1>Select a Country</h1>
                <Form.Select onChange={ handleCountryChange } value={ selectedCountry }>
                  <option value="" disabled>Select Country</option>
                  { countries.length > 0 && countries.map((country) => (
                    <option key={ country.cca3 } value={ country.name.common }>
                      { country.name.common }
                    </option>
                  )) }
                </Form.Select>
                { selectedCountry && (
                  <div className='my-2'>
                    <h2>Your Selected Country: { selectedCountry }</h2>
                  </div>
                ) }

              </div>
            </Col>

            {/* end */ }

            <section className=' bg-light p-3'>

            </section>
            <Col lg={ 6 }>
              <div className='my-5'>
                <h2>Custome mouse hover with useRef using</h2>
                <div ref={ hoverref }
                  style={ { background: isHovered ? 'orange' : 'green', padding: '20px', cursor: 'pointer' } }>
                  Hover over me!
                  <div className='p-3'>
                    { isHovered && <p>You're hovering over the box!</p> }
                    <Link className='nav-link' to="/nnn">Click me</Link>
                  </div>
                </div>

              </div>
            </Col>

            {/* custom-select-box */ }
            <Col lg={ 6 }>
              <h2>Custom select list box and append and Delete</h2>
              <Form.Select value={ selected } onChange={ (e) => setSelected(e.target.value) } className='mb-3'>
                <option value="" disabled>Select Product</option>
                { productaAll.map((item, index) => (
                  <option value={ item } key={ index }>{ item }</option>
                )) }
              </Form.Select>
              <Button onClick={ handleAddProduct }>Add Product</Button>
              <div className=' table-responsive'>

                { products.length > 0 && (
                  <table border="1" cellPadding="5" style={ { marginTop: '20px', borderCollapse: 'collapse' } }
                    className='table w-100 border table-bordered'>
                    <thead>
                      <tr>
                        <th>Product Name</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      { products?.map((product, index) => (
                        <tr key={ index }>
                          <td>{ product }</td>
                          <td>
                            <button className=" bg-danger border-0 py-2 px-4 rounded text-white"
                              onClick={ () => handleDelete(product) }>Delete</button>
                          </td>
                        </tr>
                      )) }
                    </tbody>
                  </table>
                ) }
              </div>
            </Col>

            {/* end */ }

          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home