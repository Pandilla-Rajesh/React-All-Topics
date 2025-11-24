import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Card, CardBody, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const StateFull = () => {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [count, setCount] = useState(0)

    const getUser = async () => {
        setLoading(true)
        try {

            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            const result = await res.json()
            setUsers(result)
            console.log(result, 'user data')
            setLoading(false)
        } catch (error) {
            console.log(error)
            setError(error.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        document.title = `You clicked ${count} times`;
      }, [count]);

    useEffect(() => {
        getUser()
    }, [])

    if (loading) return (<p>Loading...</p>)
    if (error) return (<p>Error:{error}</p>)



    return (

        <Container>
            <Row>
                {/* state-full- api */}
                <Col md={12}>
                    <h2>State full component API Call</h2>
                    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
                </Col>
                {users?.length > 0 ? (users.slice(0, 10).map((user, index) => (
                    <Col lg={4} key={index} className='mb-2'>
                        <Card>
                            <CardBody>
                                <div>
                                    <h3>
                                        <small className='me-2'>{user.id}</small>{user.username}</h3>
                                    <h4>{user.email}</h4>
                                    <div className='d-flex align-items-center justify-content-between'>
                                        <p>{user.phone}</p>
                                        <a href={`https://${user.website}`} target='_blank'>{user.website}</a>
                                    </div>
                                    <div>
                                        <h4>Company</h4>
                                        {Object.keys(user.company).map((list) => (
                                            <p key={list} className='mb-0'>
                                                {typeof user.company[list] === 'object' ?
                                                    JSON.stringify(user.company[list]) : user.company[list]}
                                            </p>
                                        ))}
                                    </div>
                                    <div>
                                        <h5>Address</h5>
                                        {/* {Object.keys(user.address).map((key)=>(
                                                <p className='mb-0'>
                                                    {typeof user.address[key] == 'object' ?
                                                    JSON.stringify(user.address[key]) : user.address[key]}
                                                </p>
                                            ))} */}

                                            {Object.keys(user.address).map((key) => (
                                                <p className='mb-0' key={key}>
                                                    {typeof user.address[key] === 'object' && key === 'geo' ?
                                                    (
                                                        <>
                                                        <strong>Latitude:</strong> {user.address.geo.lat}<br/>
                                                        <strong>Longitude:</strong> {user.address.geo.lng}
                                                        </>
                                                    ):(
                                                        <>
                                                        <p className='mb-0'>{key.charAt(0).toUpperCase() + key.slice(1)}
                                                            {user.address[key]}</p>
                                                        </>
                                                    )}
                                                </p>
                                            ))}

                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))) :
                    (
                        <><p>No Data Found</p></>
                    )
                }

                {/* end */}
            </Row>
        </Container>
    )

}
export default StateFull