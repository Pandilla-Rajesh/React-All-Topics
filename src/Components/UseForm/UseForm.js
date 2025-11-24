import {useFormState} from 'react'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'

const UseForm = () =>{

    const [formData, setFormData] = useFormState({
        name:'',
        email:''
    })

    const handleChange=(e)=>{
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }

    return(
        <section>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h1 className=' text-center'>
                            Welcome React19 useform hook
                        </h1>
                    </Col>
                    <Col lg={12}>
                        <Form onSubmit={handleSubmit}>
                            <Form.Label>User Name</Form.Label>
                            <FormControl name='name' value={formData.name} onChange={handleChange} />
                            <Form.Label>User Name</Form.Label>
                            <FormControl name='email' value={formData.email} onChange={handleChange} />
                            <Button type='submit'>Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default UseForm