import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

function SubChild({product}){
    const {id, title, description, category, price, rating, stock, thumbnail} = product

    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products').then((res)=>res.json())
    //     .then(data=>{
    //         console.log(data, 'product data displayed')
    //     })
    // }, [])

    return(

        <>
            <Container>
                <Row>
                    {product && (
                        <div>
                            <p className='mb-0'>Id:{id}</p>
                            <h6>Title:{title}</h6>
                            <p>Description:{description}</p>
                            <div><img src={thumbnail} className='img-fluid'/></div>
                            <div className='d-flex align-items-center justify-content-between'>
                            <h5>Category:{category}</h5>
                            <h6>Stock: {stock}</h6>
                            </div>
                            <div className='d-flex aligin-items-center justify-content-between'>
                                <span>Price:{price}</span>
                                <span>Rating:{rating}</span>
                            </div>
                        </div>
                    )}
                </Row>
            </Container>
        </>
    )
}

export default SubChild