import axios from 'axios'
import { useFormik, validateYupSchema } from 'formik'
import React, { useEffect, useState } from 'react'
import * as Yup from 'yup'
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { values } from '@fluentui/react'

const ApiFormData = () => {

    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const navigate = useNavigate()

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(6, 'username must be at least 6 characters')
            .required('please enter username'),

        password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Please enter password"),
    }


    );

    const formik = useFormik({

        initialValues: {
            username: '',
            password: '',
        },

        validationSchema,

        onSubmit: async (values, { resetForm }) => {
            alert(JSON.stringify(values, null), 'login sucessfully')
            try {

                const resdata = await axios.post('https://dummyjson.com/user/login', values)
                setUser(resdata)
                console.log(resdata, 'data-retrived')
                resetForm()

            } catch(error) {

                console.log(error)
            }
        }
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
        console.log(user, 'user get the details')
    }

    const userGet = async () => {
        try {

            const result = await axios.get('https://dummyjson.com/user/login', user)
            setUser(result.data)
            // const res = result.json()
            console.log(result)

        } catch(error) {
            console.log(error)
        }
    }

    useEffect(() => {
        userGet()
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault()
        alert(JSON.stringify(user, null, 2))
        try {
            const data = await axios.post('https://dummyjson.com/user/login', user)
            console.log(data.data)
            userGet()
        } catch(error) {
            console.log(error)
        }

        navigate('/home')
    }


    return (

        <Container>
            <Row>
                <Col lg={ 12 } className='mt-5'>
                    <h1 className='text-center mt-5'>API Data Form Data</h1>
                </Col>

                {/* user-details */ }

                <section className='vh-100'>
                    <div className='d-flex align-items-center justify-content-center h-100 row'>
                        <div className='col-lg-6'>
                            <Form className='d-flex flex-wrap flex-column gap-2' onSubmit={ formik.handleSubmit }>
                                <Form.Group>
                                    <Form.Label className='fw-medium'>UserName</Form.Label>
                                    <FormControl type='text' name='username' onChange={ formik.handleChange }
                                        onBlur={ formik.handleBlur } value={ formik.values.username } />
                                    { formik.touched.username && formik.errors.username ? (
                                        <small className='text-danger'>{ formik.errors.username }</small>
                                    ) : null }
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label className='fw-medium'>Password</Form.Label>
                                    <FormControl type='password' name='password' onChange={ formik.handleChange }
                                        onBlur={ formik.handleBlur } value={ formik.values.password } />
                                    { formik.touched.password && formik.errors.password ? (
                                        <small className='text-danger'>{ formik.errors.password }</small>
                                    ) : null }
                                </Form.Group>
                                <div className='d-flex justify-content-end'>
                                    <Button type='submit'>Submit</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </section>

                {/* end */ }

            </Row>
        </Container>
    )
}

export default ApiFormData