import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Login() {

    const [login, setLogin] = useState({
        userName: '',
        password: ''
    })

    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setLogin({ ...login, [name]: value })
        console.log(login)
    }

    const [error, setError] = useState({})

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(JSON.stringify(login, null, 2))
        const errors = {}

        if(!login.userName.trim()) {
            errors.userName = 'Please enter name'
        } else if(!/^[a-zA-Z0-9_@]+$/.test(login.userName)) {
            errors.userName = 'username contain number letter and space and underscore'
        }

        if(!login.password.trim()) {
            errors.password = 'Please enter a password.';
        } else if(login.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long.';
        } else if(!/[a-zA-Z]/.test(login.password)) {
            errors.password = 'Password must contain at least one uppercase letter.';
        } else if(!/[0-9]/.test(login.password)) {
            errors.password = 'Password must contain at least one number.';
        } else if(!/[!@#$%^&*(),.?":{}|<>]/.test(login.password)) {
            errors.password = 'Password must contain at least one special character.';
        }

        // if (!login.password.trim()) {
        //     errors.password = 'Please enter password'
        // } else if (!/^\d+$/.test(login.password)) {
        //     errors.password = 'please enter the password'
        // }

        if(Object.keys(errors).length === 0) {
            navigate('/home')
            console.log(login, 'login details')
        } else {
            setError(errors)
        }

    }

    return (
        <>
            <section className="info-login">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        {/* Left column with image */ }
                        <div className="col-md-6 p-0">
                            {/* <img src="https://demos.themeselection.com/sneat-mui-nextjs-admin-template/demo-1/images/illustrations/characters-with-objects/7.png"
                                className="img-fluid w-25" loading="lazy" /> */}
                            <img src={ require('../../images/new-login-screen.png') } className="img-fluid h-100" loading="lazy" alt="" />
                        </div>

                        {/* Right column with form */ }
                        <div className="col-md-6 info-login-wrap">
                            <div className="row align-items-center justify-content-center h-100">
                                <div className="col-md-7 info-log-titles">
                                    <div className="d-flex gap-1 flex-wrap align-items-center justify-content-center text-center">
                                        <h4 className="mb-2 fs-4 fw-bold text-truncate">Welcome to the React Flow Topics</h4>
                                        <p className=" w-75 mb-5">Please sign in to access your dashboard and continue your learning journey.</p>
                                    </div>
                                    <div className="">

                                        <form onSubmit={ handleSubmit } className="d-flex flex-column flex-wrap gap-3" autoComplete="off">
                                            {/* user-details */ }
                                            <div className="mb-0">
                                                <label className="form-label" for="userName">User Name</label>
                                                <input type="text" name="userName" value={ login.userName } className="form-control"
                                                    placeholder="Enter User Name" onChange={ handleChange } autoComplete="off" />
                                                { error.userName && <small className='text-danger'>{ error.userName }</small> }
                                            </div>

                                            <div className="mb-0">
                                                <label className="form-label" for="password">Password</label>
                                                <input type="password" name="password" className="form-control" autoComplete="off"
                                                    value={ login.password } onChange={ handleChange } placeholder="Enter password" />
                                                { error.password && <small className="text-danger">{ error.password }</small> }
                                            </div>

                                            <div className="d-flex align-items-center justify-content-between">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" id="check" />
                                                    <label className="form-check-label" for="check">Remember</label>
                                                </div>
                                                <div>
                                                    <a href="#" className="text-primary">Forgot Password</a>
                                                </div>
                                            </div>

                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="btn btn-primary w-100">Login</button>
                                            </div>

                                            <div className="gap-3 info-cre-btn">
                                                <p className="mb-0">New on our platform?</p>
                                                <Link to='/create' classNam="fw-bolder">Create account</Link>

                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Login
