import { Key } from '@mui/icons-material'
import axios from 'axios'
import Recat, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

function ToggleContent() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)
    const [toggle, setToggle] = useState(false)

    const [value, setValue] = useState(false)
    const handleChange = () => {
        setValue((prevValue) => !prevValue)
    }

    const getUser = async () => {

        setLoading(true)

        try {

            const res = await axios.get('https://fakestoreapi.com/users')
            setUsers(res.data)
            console.log(res.data, 'users data')
        } catch(err) {
            console.log(err)
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        getUser()
    }, [])

    return (

        <>
            <div>
                <Button onClick={ handleChange } variant="primary">
                    { value ? 'Hide' : 'Show' } Content
                </Button>
                <div>
                    { value && <p>This is some toggled content!</p> }
                </div>
            </div>

            {/* users-data-showed */ }

            <section className=' bg-white rounded p-2'>
                <div className='container ms-auto'>
                    <div className='row align-items-center justify-content-center'>

                        <div className='col-md-12'>
                            <h2 className=' fs-4 text-center'>Welcome to the Get the User Details</h2>
                        </div>

                        <div className=' table-responsive'>
                            <table className=' table border table-bordered'>
                                <thead>
                                    <tr key="">
                                        <th>Id</th>
                                        <th>Name</th>
                                        <th>UserName</th>
                                        <th>Email</th>
                                        <th>Password</th>
                                        <th>Address</th>
                                        <th>Phone</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    { loading ? (
                                        <tr key="">
                                            <td colSpan="5">
                                                <p>...Loaidng</p>
                                            </td>
                                        </tr>
                                    ) : (
                                        users?.length > 0 ? (
                                            users.slice(0, 10)?.map((user, index) => (
                                                <tr key={ index }>
                                                    <td>{ user.id }</td>
                                                    <td>

                                                        <ul className='d-flex justify-content-between align-items-center mb-0 p-'>
                                                            {/* { Object.keys(user.name)?.map((list) => (
                                                                <li key={ list }>
                                                                    { typeof user.name[list] == 'object' ? 
                                                                    JSON.stringify(user.name[list]) : user.name[list] }
                                                                </li>
                                                            )) } */}

                                                            { Object.entries(user.name)?.map(([key, value]) => {
                                                                const capKey = key.charAt().toUpperCase() + key.slice()
                                                                return (
                                                                    <li key={ capKey }>
                                                                        { `${capKey} ${typeof value === 'object' ? JSON.stringify(value) : value}` }
                                                                    </li>
                                                                )
                                                            }) }

                                                        </ul>
                                                    </td>
                                                    <td>{ user.username }</td>
                                                    <td>{ user.email }</td>
                                                    <td>{ user.password }</td>
                                                    <td>
                                                        <ul>
                                                            { Object.entries(user.address)?.map(([key, value]) =>
                                                                <li key={ key }>
                                                                    { `${key} ${typeof value === 'object' ? JSON.stringify(value) : value}` }
                                                                </li>
                                                            ) }
                                                        </ul>
                                                    </td>
                                                    <td>{ user.phone }</td>
                                                </tr>

                                            ))
                                        ) : (
                                            <tr key="">
                                                <td colSpan="5">
                                                    <p>No Data Found</p>
                                                </td>
                                            </tr>
                                        )
                                    ) }
                                </tbody>
                            </table>
                        </div>


                    </div>
                </div>
            </section>

            {/* end */ }

        </>

    );

}

export default ToggleContent