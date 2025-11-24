import React, { useState, useEffect } from 'react';
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap';
import Child from './Child';
import SubChild from './SubChild';

function Parent() {
    const [product, setProduct] = useState([]);

    const getProduct = async () => {
        try {
            const result = await fetch('https://dummyjson.com/products');
            const res = await result.json();
            setProduct(res.products);
            console.log(res, 'subchild product data');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProduct();
    }, []);

    const userDetails = [
        { name: 'Rajesh', email: 'rajesh@gmail.com', age: 40, phone: 9966843353 },
        { name: 'Ushasri', email: 'usha@gmail.com', age: 32, phone: 9701976383 },
        { name: 'Anasurya', email: 'amma@gmail.com', age: 65, phone: 8008930060 },
        { name: 'Sathyanarayana', email: 'sathya@gmail.com', age: 75, phone: 8247728356 },
        { name: 'Aadhya', email: 'adhya@gmail.com', age: 75, phone: 9985336325 },
        { name: 'Arjun', email: 'arjun@gmail.com', age: 75, phone: 9849662236 },
    ];

    return (
        <Container className='mt-5'>
            <Row>
                <Col lg={12} className='p-5'>
                    <h1>Child Component</h1>
                </Col>
                {userDetails.map((user, index) => (
                    <Col lg={4} key={index} className='mb-3'>
                        <Card>
                            <CardBody className='p-3'>
                                <Child userDetails={user} />
                            </CardBody>
                        </Card>
                    </Col>
                ))}

                 {product?.length > 0 ? (
                    product.slice(0, 10).map((el, index) => (
                        <Col lg={4} key={index} className='mb-4'>
                            <Card>
                                <CardBody>
                                    <Child product={el} />
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div>
                        <p>No Data Found</p>
                    </div>
                )}

            </Row>

            <Row>
                <Col lg={12} className='p-5'>
                    <h1 className='text-center'>Sub Child Component</h1>
                </Col>
                
                {product?.length > 0 ? (
                    product.slice(0, 10).map((el, index) => (
                        <Col lg={4} key={index} className='mb-4'>
                            <Card>
                                <CardBody>
                                    <SubChild product={el} />
                                </CardBody>
                            </Card>
                        </Col>
                    ))
                ) : (
                    <div>
                        <p>No Data Found</p>
                    </div>
                )}
            </Row>
        </Container>
    );
}

export default Parent;
