import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, CardBody, Col, Container, Form, FormControl, ListGroup, ListGroupItem, Row } from 'react-bootstrap'
import { number, object } from 'yup'

function ApiCalls(){

const [breeds, setBreeds] = useState([])
const [dogs, setDogs] = useState([])

// const inputRef = useRef()
// useEffect(()=>{
//    inputRef.current.focus()
//    console.log(inputRef, 'input ref')
// })

const getBreed=async()=>{
    try{
        const result = await fetch('https://dog.ceo/api/breeds/list/all')
        const data = await result.json()
        const breedData = Object.keys(data.message)
        setBreeds(breedData)
        console.log(data, 'data breed revied')
    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
    getBreed()
},[])

const [showMessage, setShowMessage] = useState(true)

const [items, setItems] = useState(['Item 1', 'Item 2'])
const addItem=()=>{
    const newItem = `Items ${items.length + 1}`
    setItems([...items, newItem])
}

const [users, setUsers] = useState([
    {name:'Rajesh', email:'raj@gmail.com', phone:9701976383, role:'SSE'},
    // {name:'Usha', email:'usha@gmail.com', phone:9966843353, role:'House Wife'},
    // {name:'Aadhya', email:'aadhya@gmail.com', phone:8247728356, role:'Daughter'},
    // {name:'Arjun', email:'arjun@gmail.com', phone:8008930060, role:'Son'},
    // {name:'Anasurya', email:'ana@gmail.com', phone:8919763550, role:'Mother'},
    // {name:'Sathya', email:'sathya@gmail.com', phone:7330711975, role:'Father'},
    
])

const addUsers=()=>{
    // const newUsers = `Users ${users.length + 1}`
    const newUsers = {
      name: 'Anita',
      email: 'anita@gmail.com',
      phone: 9123456789,
      role: 'Developer',
    };
    setUsers([...users, newUsers])
}
// const formRef = useRef(null)
const inistialState={
    name: '',
    email: '',
    age: number || null,
    phone: number || null,
}
const [details, setDetails] = useState({
    // name:'',
    // email:'',
    // age:'',
    // phone:''
    inistialState
})

const handleData=(e)=>{
    const {name, value} = e.target
    setDetails({...details, [name] : value})
    console.log(details, 'data details')
}

const handleSubmit=async(event)=>{
    event.preventDefault()
    
    const {name, email, age, phone} = details
    const newUser = { name, email, age: parseInt(age), phone };
    alert(JSON.stringify(details, null, 2))
    
    try{
        const response = await axios.post('https://dummyjson.com/users/add', newUser,{
            headers:{
                'Content-Type':'application / json'
            }
        })
        // formRef.current.reset()
        setDetails(inistialState)
        console.log(response, 'userdata added done')
    }catch(error){
        console.log(error)
    }
}

const [product, setProduct] = useState([])

const getProduct=async()=>{
    try{

        const result = await fetch('https://dummyjson.com/products')
        const res = await result.json()
        setProduct(res.products)
        console.log(res.products, 'product data')
    }catch(err){
        console.log(err)
    }
}

useEffect(()=>{
    getProduct()
}, [])

const [seconds, setSeconds] = useState(0)

useEffect(()=>{
    const interval = setInterval(()=>{
        setSeconds(prev => prev + 1)
    }, 500)
}, [])


    return(
        <Container>
            <Row>
                <Col lg={4} className='mt-5 pt-5'>
                    <Button onClick={()=>setShowMessage(!showMessage)} className='btn btn-success'>
                        {showMessage ? <p>Hello Welcome to React</p> : <p>Good Bye</p>}
                    </Button>
                </Col>
                <Col lg={4} className='mt-5 pt-5'>
                    <div>Seconds: {seconds}</div>
                </Col>
                <Col lg={4} className='mt-5 pt-5'>
                    <ul className='list-group'>
                        {users.map((user, index)=>(
                            <li key={index} className='list-group-item'>
                                <span>{user.name}</span>
                                <span>{user.email}</span>
                                <span>{user.phone}</span>
                                <span>{user.role}</span>
                            </li>
                        ))}
                    </ul>
                    <Button onClick={addUsers}>AddUsers</Button>
                </Col>
                <Col lg={4} className='mt-5 pt-5'>
                    <h2>Reconcellation items</h2>
                    <ul className='list-group'>
                        {items.map((el, index)=>(
                            <li key={index} className='list-group-item'>{el}</li>
                        ))}
                        <div><Button onClick={addItem}>Add Item</Button></div>
                    </ul>
                </Col>

                {/* add-new-user */}

                    <Col lg={12}>
                        <h2>Add New User Data</h2>
                        <Form onSubmit={handleSubmit}  className='row'>
                            <Form.Group className='mb-3 col-lg-4'>
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' name='name' value={details.name} onChange={handleData} />
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-4' >
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' name='email' value={details.email} onChange={handleData} />
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-4'>
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' name='age' value={details.age} onChange={handleData} />
                            </Form.Group>
                            <Form.Group className='mb-3 col-lg-4'>
                                <Form.Label>Name</Form.Label>
                                <FormControl type='text' name='phone' value={details.phone} onChange={handleData} />
                            </Form.Group>
                            <Button type='submit' className='btn btn-dark'>Add User</Button>
                        </Form>
                    </Col>
                    

                {/* end */}

                {/* <Col lg={12} className='my-5'>
                    <h1 className=' text-bg-success text-center p-3 rounded-3'>API Calls</h1>
                    <input className=' form-control' type='text' ref={inputRef} placeholder='ref input' />
                </Col> */}
                {/* {breeds.map((breed, index)=>(
                <Col lg={4} className='mb-3'>
                    <Card>
                        <CardBody>
                            <ListGroup>
                                <ListGroupItem className=' border-0' key={index}>{breed}</ListGroupItem>
                            </ListGroup>
                        </CardBody>
                    </Card>
                </Col>  
                ))} */}
               
            </Row>
        </Container>
    )
}

export default ApiCalls