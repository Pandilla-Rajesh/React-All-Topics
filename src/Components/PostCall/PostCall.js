import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { Button, Col, Container, Form, FormControl, FormGroup, Row, Table } from 'react-bootstrap'

function PostCall(){

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [newpost, setNewPost] = useState({
        userId:'',
        title:'',
        body:''
    })

    const formref = useRef(null)
    const [editIndex, setEditIndex] = useState(null)

    const handlePost=(e)=>{

      const{name, value} = e.target
      setNewPost({...newpost, [name] : value})
      console.log(newpost,'post data received')

      if(name === 'userId'){
        if(value && /^\d+$/.test(value) && value.length === 3){
          setError((prevErrors) => ({...prevErrors, userId:''}))
        }
      }

      if(name === 'title'){
        if(value && /^[A-Z]/.test(value) && value.length >= 5 && value.length <= 50){
          setError((prevErrors) => ({...prevErrors, title:''}))
        }
      }
      

      if(name === 'body'){
        if(value && value.length >=10 && value.length <= 50){
          setError((prevErrors) => ({...prevErrors, body:''}))
        }
      }

    }

    const [error, setError] = useState({})

    const handleSubmit= async (event)=>{
      event.preventDefault()
      const errors = {}
      
      if(!newpost.userId){
        errors.userId = 'Please enter user id'
      }else if(!/^\d+$/.test(newpost.userId)){
        errors.userId = 'User ID should be numeric'
      }else if(newpost.userId.length !== 6){
        errors.userId = 'User ID must be exactly 3 digits'
      }

      if(!newpost.title){
        errors.title = 'Please enter title'
      }else if (!/^[a-zA-Z]/.test(newpost.title)){
        errors.title = 'Title must start with a capital letter'
      }else if(newpost.title.length < 5 || newpost.title.length >50 ){
        errors.title = 'Title must be between 5 and 50 characters'
      }

      if(!newpost.body){
        errors.body = 'please eneter body text'
      }else if(newpost.body.length < 10 || newpost.body.length > 50){
        errors.body ='Body must be between 10 and 200 characters'
      }

      const isDuplicateId = data.some((post) => post.userId === newpost.userId && editIndex === null)
      const isDuplicateTitle = data.some((post) => post.title === newpost.title && editIndex === null)

      if(isDuplicateId){
        errors.userId = 'User ID already exists. Please use a unique ID.'
      }else if(isDuplicateId){
        setError('')
      }

      if(isDuplicateTitle){
        errors.title = 'Title already exists. Please use a unique title.'
      }else if(isDuplicateId){
        setError('')
      }

      if(Object.keys(errors).length === 0){

        if(editIndex !== null){
          const updatedData = [...data]
          updatedData[editIndex] = {...newpost}
          setData(updatedData)
          setEditIndex(null)
        }else{
          await postData()
        }
        formref.current.reset()
        setNewPost('')
        setError({})
        console.log(newpost,'details')
      }else{
        setError(errors)
      }

    }

    const handleEdit = (index) => {
      setNewPost(data[index])
      setEditIndex(index)
    }
  
    const handleDelete = (id) => {
      const updatedData = data.filter((_, i) => i !== id)
      setData(updatedData)
    }
  
    const fetchPosts = async() =>{
      setLoading(true)
      try{
          const res = await axios.get('https://dummyjson.com/posts')
          setData(res.data.posts)
          console.log(res, 'fetch data')

      }catch(error){
        console.log(error)
      }finally{
        setLoading(false)
      }
    }

 useEffect(()=>{
  fetchPosts()
 },[])

    const postData=async()=>{
        setLoading(true)
        try{

            const res = await axios.post('https://dummyjson.com/posts/add', newpost)
            setData((prevData) => ([...prevData, res.data]))
            console.log(res.data, 'post data ')

        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    const postHandle=()=>{
      postData()
    }

    useEffect(()=>{
        postData()
    }, [])

    return(

        <Container fluid>
            <Row>
                <Col lg={12} className='mt-5 p-5'>
                    <h1>Welcome to Post Call With User Id's</h1>
                </Col>
                <Form onSubmit={handleSubmit} ref={formref}
                className='d-flex align-items-center justify-content-end gap-3 my-3 edit-form'>

<div>
            <FormGroup>
              <Form.Label>User ID</Form.Label>
              <FormControl name='userId' type='text' value={newpost.userId} onChange={handlePost} />
              {error.userId && <small className='text-danger'>{error.userId}</small>}
            </FormGroup>
          </div>

        <div>
          <FormGroup>
            <Form.Label>User Title</Form.Label>
            <FormControl type='text' name='title' value={newpost.title} onChange={handlePost} />
            {error.title && <small className='text-danger'>{error.title}</small>}
          </FormGroup>
        </div>

        <div>
          <Form.Group>
            <Form.Label>User Body</Form.Label>
            <FormControl type="text" name='body' value={newpost.body} onChange={handlePost} />
            {error.body && <small className='text-danger'>{error.body}</small>}
          </Form.Group>
        </div>
        <div className='d-flex'>
        <Button type='submit' className='btn btn-primary mt-4'>
          {editIndex !== null ? 'Updated post' : 'Add post'}
        </Button>
        </div>
        </Form>
                <div>
      {/* Displaying Posts in a Table */}

      {loading ? (
        <p>Loading</p>
      ) : (
        <Table responsive bordered>
           
           <thead>
              <tr>
                <th>User Id</th>
                <th>User Title</th>
                <th>User Body</th>
                <th>Posts</th>
                <th>Likes</th>
                <th>Views</th>
                <th>Action</th>
              </tr>
           </thead>

          <tbody>
              {data?.length >0 && data.slice(0,5)?.map((post, id)=>(
                <tr key={post.id}>
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                  <td>
                    <ul>
                      {Object.keys(post.reactions).map((like)=>(
                        <li key={like}>
                          {/* {typeof post.reactions[like] == 'object' ? 'likes'
                          : typeof post.reactions[like] == 'string' ? 'dislikes' : post.reactions[like]} */}
                          {typeof post.reactions[like] === 'object'
  ? `${post.reactions[like].count || 0} dislikes`
  : `${post.reactions[like]} likes`}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td>
                    <ul className=''>

                    {Object.keys(post.tags).map((el)=>(
                      <li key={el}>
                        {typeof post.tags[el] == 'object' ? JSON.stringify(post.tags[el]) : post.tags[el]}
                      </li>
                    ))}
                    </ul>
                  </td>
                  <td>{post.views}</td>
                  <td>
                    <div className='d-flex align-items-center justify-content-center gap-3'>
                      <Button onClick={() => handleEdit(id)} className='btn btn-dark'>Edit</Button>
                        <Button onClick={() => handleDelete(id)} className='btn btn-danger'>Delete</Button>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>

        </Table>
      )}
      <div>
        <Button onClick={()=>postHandle()}>Post call</Button>
      </div>
    </div>
            </Row>
        </Container>
    ) 
}

export default PostCall