import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Card, CardBody, CardHeader, CardTitle, CardImg } from 'react-bootstrap'

const Product=()=>{

    const [products, getProducts] = useState([])
    const [loading, setLoading]= useState(true)

   useEffect(()=>{
    fetch('https://fakestoreapi.com/products').then((res=>res.json()))
    .then(result=>{
        getProducts(result)
        console.log(result, 'product data')
        setLoading(false)
    })
   }, [])

   const proGet = async()=>{
    setLoading(true)
    try{

        const res = await fetch('https://fakestoreapi.com/products')
        const result = await res.json()
        console.log(result, 'new -product data')

    }catch(err){
        console.log(err)
    }finally{
        setLoading(false)
    }
   }

   useEffect(()=>{
    proGet()
   }, [])

    return(

        <Container>
            <Row>
                <Col lg={12}>
                    <h2 className='text-center mt-5 p-5'>Product data list displayed</h2>
                    {/* {JSON.stringify(products)} */}
                </Col>
                {products?.length > 0 ? (products.slice(0, 6).map((el, index)=>(
                    <Col lg={4} md={6} sm={12} key={index}>
                        <Card className='mb-4'>
                            <CardBody>
                                    <div>
                                        <img src={el.image} alt={el.image || 'product-image'} className='img-fluid' />
                                    </div>
                                <CardHeader>
                                    <CardTitle>
                                        {el.title}
                                    </CardTitle>
                                </CardHeader>
                                <p>{el.description}</p>
                                <div className='d-flex align-items-center justify-content-between bg-success-subtle p-3'>
                                    <div>
                                        <h5 className='fw-500 text-warning'>{el.price}</h5>
                                    </div>
                                    <div>
                                        <h5 className='fw-500 text-info'>{el.category}</h5>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))):(
                    <p>Loading</p>
                )}
            </Row>

           
        </Container>
    )
}

export default Product