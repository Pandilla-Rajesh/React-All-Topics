import { values } from '@fluentui/react'
import axios from 'axios'
import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, FormControl } from 'react-bootstrap'
import * as Yup from 'yup'
import BuildTraficLight from '../BuildTraficLight/BuildTraficLight'
import Ree from '../Counter/Counter'
import ReeUseCounter from '../Counter/Counter'

const Formik = () => {

    const [isExpanded, setIsExpanded] = useState(false)

    const [user, setUser] = useState({

        username: '',
        password: ''
    })

    // formik-with-initialvalues //
    const formik = useFormik({

        initialValues: {
            fname: '',
            lname: '',
            email: '',
            phone: '',
            subject: '',
            country: '',
            message: '',
            username: '',
            password: ''
        },

        validationSchema: Yup.object({

            fname: Yup.string()
                .matches(/^[a-zA-Z0-9!@#$%^&*(),.?:{}|<>_\-\s]*$/, 'First name containe letters, numbers, space, symbol')
                .min(6, 'First name should be 6 characters')
                .max(10, 'first name should be 10 chracters')
                .required('Please enter first name'),

            lname: Yup.string()
                .matches(/^[a-zA-Z0-9!@#$%^&*(),.?:{}|<>_-\s]*$/, 'last name cantaine number symbol space')
                .min(6, 'last name should be 6characters')
                .max(10, 'last name shold be 10 cjaracters')
                .required('please enter the last name'),

            email: Yup.string()
                .email('invalid email address').required('email is requierd'),

            phone: Yup.string()
                .matches(/^\d{10}$/, 'please enter 10 digit number')
                .min(10, 'please enter 10 numbers')
                .required('please enter phone number'),

        }),

        // onSubmit:(values, {resetForm}) =>{
        //     console.log(values, 'formik values display')
        //     resetForm()
        // }

        // form-data-with-API-Integration //

        onSubmit: async (values) => {
            try {

                const result = await axios.post('https://dummyjson.com/user/login', values)
                const res = await result.json()
                console.log(res, 'form data user')

            } catch(error) {
                console.log(error)
            }
        }
        // end //
    })

    const handleInput = (e) => {

        const value = e.target.value.replace(/\D0-9/g, "")
        if(value.length <= 10) {
            e.target.value = value
        }
    }
    // end //

    const userGet = async () => {
        try {

            const res = await axios.get('https://dummyjson.com/user/login', user)
            console.log(res, 'user data line no-92')
        } catch(error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const data = await axios.post('https://dummyjson.com/user/login', user)
            setUser(user)
            console.log(data)
        } catch(err) {
            console.log(err)
        }
    }

    useEffect(() => {
        userGet()
    }, [])

    const content = `

    Line 1. Lorem ipsum dolor sit amet.
    Line 2. Consectetur adipiscing elit.
    Line 3. Integer molestie lorem at massa.
    Line 4. Facilisis in pretium nisl aliquet.
    Line 5. Nulla volutpat aliquam velit.
    Line 6. Faucibus porta lacus fringilla vel.
    Line 7. Aenean sit amet erat nunc.
    Line 8. Eget porttitor lorem.
    Line 9. Aenean auctor wisi et urna.
    Line 10. Aliquam erat volutpat.
    Line 11. Duis ac turpis. Integer rutrum ante eu lacus.
    Line 12. Vestibulum libero nisl, porta vel, scelerisque eget, malesuada at, neque.
    Line 13. Vivamus eget nibh.
    Line 14. Etiam cursus leo vel metus.
    Line 15. Nulla facilisi. Aenean nec eros.

`;

    const toggleExpanded = () => {

        setIsExpanded(!isExpanded)
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-12 mt-5'>
                    <h1 className='text-center mt-5'>
                        Formik component
                    </h1>
                </div>

                {/* Formik-values-code-only */ }

                <Form className='row' onSubmit={ handleSubmit }>

                    <Col lg={ 4 }>
                        <Form.Group>
                            <Form.Label>First Name</Form.Label>
                            <FormControl name='username' value={ formik.values.username }
                                onChange={ formik.handleChange }
                                onBlur={ formik.handleBlur } />
                            { formik.touched.fname && formik.errors.fname ? (
                                <small className='text-danger'>{ formik.errors.fname }</small>
                            ) : null }
                        </Form.Group>
                    </Col>

                    <Col lg={ 4 }>
                        <Form.Group>
                            <Form.Label>Last Nmae</Form.Label>
                            <FormControl name='lname' value={ formik.values.lname }
                                onChange={ formik.handleChange } onBlur={ formik.handleBlur } />
                            { formik.touched.lname && formik.errors.lname ? (
                                <small className='text-danger'>{ formik.errors.lname }</small>
                            ) : null }
                        </Form.Group>
                    </Col>

                    <Col lg={ 4 }>
                        <Form.Group>
                            <Form.Label>Email</Form.Label>
                            <FormControl name='email' value={ formik.values.email }
                                onChange={ formik.handleChange } onBlur={ formik.handleBlur } />
                            { formik.touched.email && formik.errors.email ? (
                                <small className='text-danger'>{ formik.errors.email }</small>
                            ) : null }
                        </Form.Group>
                    </Col>

                    <Col md={ 4 }>
                        <Form.Group>
                            <Form.Label>Phone Number</Form.Label>
                            <FormControl type='number' name='phone' value={ formik.values.phone }
                                onChange={ formik.handleChange } onBlur={ formik.handleBlur } onInput={ handleInput } />
                            { formik.touched.phone && formik.errors.phone ? (
                                <small className='text-danger'>{ formik.errors.phone }</small>
                            ) : null }
                        </Form.Group>
                    </Col>

                    <div className='d-flex justify-content-end'>
                        <Button type='submit' variant='success'>Submit</Button>
                    </div>

                </Form>

                {/* end */ }
                <div className='col-md-12'>
                    <ReeUseCounter />
                </div>
                <div className='col-md-12'>
                    <BuildTraficLight />
                </div>

                <Col lg={ 12 }>
                    <h1>Show the Content Show more Show less</h1>
                    <div className='mx-auto p-4'>
                        <div className='overflow-hidden transition-all duration-500'
                            style={ { maxHeight: isExpanded ? '500px' : '100px', whiteSpace: 'pre-line' } }>
                            <p>{ content }</p>
                        </div>
                        <Button onClick={ toggleExpanded } variant='primary' className='btn btn-lg'>
                            { isExpanded ? 'show less' : 'show more' }
                        </Button>
                    </div>
                </Col>

            </div>
        </div>

    )
}
export default Formik