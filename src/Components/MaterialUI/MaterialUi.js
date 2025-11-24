import { Avatar, Button, Card, CardContent, CardHeader, CardMedia, IconButton, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Tooltip, Typography } from '@mui/material'
import { blue, green, purple, red } from '@mui/material/colors'
import React, { useEffect } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import {data} from './data'
import { DataThresholdingOutlined, Delete, DeleteForever, DeleteRounded, Male } from '@mui/icons-material'
import PageNation from '../PageNation/PageNation';
import UseForm from '../UseForm/UseForm'

const MaterialUi = () => {

    function userDetails(firstname, lastname, email, age, gender, designation){
        return{firstname, lastname, email, age, gender, designation}
    }

    const user = [
        userDetails('Rajesh', 'Pandilla', 'rajesh@gmail.com', 40, 'Male', 'SSE_UI_Developer'),
        userDetails('Ushasri', 'Pandilla', 'usha@gmail.com', 33,'Female', 'Home Makert'),
    ]

    const columns = [

        {field:'id', headerName:'ID', width:70},
        {field:'firstname', headerName:'First Name', width:130},
        {field:'lastname', headerName:'Last Name', width:140},
        {field:'age', headerName:'Age', type:'number', width:90, valueGetter:(value, row)=>`${row.firstname || ''} 
        ${row.lastname || ''}`},
    ]

    const rows = [
        {id:1, lastname:'Pandilla', firstname:'Sathyanarayana', age:70},
        {id:2, lastname:'Pandilla', firstname:'Anasurya', age:62},
        {id:3, lastname:'Pandilla', firstname:'Srinivas', age:52},
    ]

    const paginationModel = {page:0, pageSize:5}

    return (
        <Container>
            <Row className='gy-4'>
                <Col lg={12}>
                    <h1 className='mt-5 text-center text-white p-5'>Material UI component</h1>
                </Col>
                <Col lg={12}>
                    <h2>Material UI Table Design</h2>
                </Col>

                    <Col lg={12}>
                        <TableContainer component={Paper}>
                           <Table>
                           <TableHead>
                                <TableRow>
                                    <TableCell>First Name</TableCell>
                                    <TableCell>Last Name</TableCell>
                                    <TableCell>Email</TableCell>
                                    <TableCell>Age</TableCell>
                                    <TableCell>Gender</TableCell>
                                    <TableCell>Designation</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {user.map((list, index)=>(
                                      <TableRow key={index}>
                                      <TableCell component="th" scope='list'>{list.firstname}</TableCell>
                                      <TableCell>{list.lastname}</TableCell>
                                      <TableCell>{list.email}</TableCell>
                                      <TableCell>{list.age}</TableCell>
                                      <TableCell>{list.gender}</TableCell>
                                      <TableCell>{list.designation}</TableCell>
                                  </TableRow>
                                ))}
                            </TableBody>
                           </Table>
                        </TableContainer>
                    </Col>

                    
                    <Col lg={4}>
                    <Card>
                        <CardHeader avatar={<Avatar sx={{ bgcolor: green[500] }} aria-label='recipe'>
                            R
                        </Avatar>}
                            title="Shrimp and Chorizo Paella" subheader="September 14, 2016">
                        </CardHeader>
                        <CardMedia component='img' height='auto' image='https://mui.com/static/images/cards/paella.jpg' alt='dish image' />
                        <CardContent>
                            <Typography variant='body2' sx={{ color: 'text.primary', bgcolor: blue[100], padding:'5px' }}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                            <Tooltip title="Delete" placement='top-start'>
                                <Button>top-start<DeleteRounded/></Button>
                            </Tooltip>
                        </CardContent>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card>
                        <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                            R
                        </Avatar>}
                            title="Shrimp and Chorizo Paella" subheader="September 14, 2016">
                        </CardHeader>
                        <CardMedia component='img' height='auto' image='https://mui.com/static/images/cards/paella.jpg' alt='dish image' />
                        <CardContent>
                            <Typography variant='body2' sx={{ color: 'text.primary', bgcolor: blue[100], padding:'5px' }}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>

                <Col lg={4}>
                    <Card>
                        <CardHeader avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                            R
                        </Avatar>}
                            title="Shrimp and Chorizo Paella" subheader="September 14, 2016">
                        </CardHeader>
                        <CardMedia component='img' height='auto' image='https://mui.com/static/images/cards/paella.jpg' alt='dish image' />
                        <CardContent>
                            <Typography variant='body2' sx={{ color: 'text.primary', bgcolor: blue[100], padding:'5px' }}>
                                This impressive paella is a perfect party dish and a fun meal to cook
                                together with your guests. Add 1 cup of frozen peas along with the mussels,
                                if you like.
                            </Typography>
                        </CardContent>
                    </Card>
                </Col>

                <Col lg={12}>
                    <UseForm/>
                </Col>

            </Row>
        </Container>
    )
}

export default MaterialUi