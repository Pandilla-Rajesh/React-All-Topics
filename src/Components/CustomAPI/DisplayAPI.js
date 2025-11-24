import React, { useEffect, useState } from 'react'
import UseCustomAPI from './UseCustomAPI'
import { Col, Container, Row, Table } from 'react-bootstrap'
import data from '../CustomOptions/data'
import axios from 'axios'
import TimeStartStop from '../TimeStartStop/TimeStartStop'

const DisplayAPI = () => {

    const url = 'https://jsonplaceholder.typicode.com/posts'
    const {user, loading} = UseCustomAPI(url)
    const headers = user && user.length > 0 ? Object.keys(user[0]) : []

    const [seconds, setSeconds] = useState(0)
    const [currentDateTime, setCurrentDateTime] = useState(new Date())
    const [userd, setUserd] = useState([])


    useEffect(()=>{
        const interval = setInterval(() => {
            setSeconds(prev => prev+1)
            setCurrentDateTime(new Date())
        }, 500)
        return () => clearInterval(interval)
    },[])

    // function fetchAndDisplayUserData(userID){
    //     fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)
    //     .then((res)=>{
    //         if(!res.ok){
    //             throw new Error('Network response is not ok')
    //         }
    //         return res.json()
    //     })
    //     .then((userData)=>{
    //         console.log(userData, 'user data')
    //     }).catch((error)=>{
    //         console.log(error)
    //     })
    // }

    const getUser= async()=>{
        try{
            let data = await fetch('https://jsonplaceholder.typicode.com/users')
            let res = await data.json()
            console.log(res, 'data user')
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        getUser()
    },[])

    const userGet = async() =>{
        try{
            const result = await axios.get('https://jsonplaceholder.typicode.com/users')
            setUserd(result.data, 'data')
            console.log(result.data, 'user data main frame data')
        }catch(err){
            console.log(err)
        }
    }

    useEffect(()=>{
        userGet()
    }, [])

useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json())
    .then(data=>{
        console.log(data)
    }).catch((error)=>{
        console.log(error)
    })
}, [])

    return (

        <Container>
            <Row>

                <Col lg={12} className='mt-5 p-5'>
                    <h1 className='text-center'>use custom API Integartion <br />with table data display</h1>
                </Col>

                <Col>
                    <TimeStartStop/>
                </Col>

               {loading ? 
                (
                    <p>Loading</p>
                ) : (
                    <Table responsive bordered>
                    <thead>
                        <tr>
                            {headers.map((list)=>(
                                <th>{list}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {user.length > 0 ? user.slice(0,10)?.map((item, index)=>(
                           
                            <tr key={index}>
                                <td>{item.userId}</td>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body} 
                                    {/* <h2>{seconds}</h2> */}
                                    <p className='fw-bolder'>Current Date and Time:<br/>
                                        <span>{currentDateTime.toLocaleString()}</span>
                                    </p>
                                </td>
                            </tr>

                        )):(
                            
                            <Col lg={12}>
                                <p>No Data Found</p>
                            </Col>
                        )}
                    </tbody>
                </Table>
                )  
            }
            </Row>
        </Container>

    )

}

export default DisplayAPI