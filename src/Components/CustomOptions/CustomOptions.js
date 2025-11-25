import React, { useState, useEffect } from 'react';
import { Button, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import axios from 'axios';
import { items } from './data';
import Directives from '../Directives/Directives';
import ToggleCheck from '../ToggleCheck/ToggleCheck';

const CustomOptions = () => {
    const [inputElement, setInputElement] = useState('');
    const [options, setOptions] = useState([]);
    const [selectItem, setSelectItem] = useState('');

    // Fetch data when component loads or input changes
    useEffect(() => {
        if(inputElement) {
            fetchOptions(inputElement);
        }
    }, [inputElement]);

    // API call to fetch options
    const fetchOptions = async (query) => {
        try {
            const response = await axios.get(`https://demo.dataverse.org/api/search?q=trees?query=${query}`);
            setOptions(response); // Assuming response.data.options is an array of strings
            setOptions(Array.isArray(fetchOptions) ? fetchOptions : []);
            console.log(response.data, 'data response')
        } catch(error) {
            console.error('Error fetching options:', error);
        }
    };

    const handleChange = (event) => {
        const value = event.target.value;
        setInputElement(value);
    };

    const handleBlur = () => {
        if(inputElement && !options.includes(inputElement)) {
            setOptions((prevOptions) => [...prevOptions, inputElement]);
        }
        setInputElement('');
    };

    const handleOptions = (e) => {
        setSelectItem(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://demo.dataverse.org/api/search?q=trees/', { selectedOption: selectItem });
            alert('Option submitted successfully');
            fetchOptions()
        } catch(error) {
            console.error('Error submitting option:', error);
        }
    };

    const ITEMS_PER_PAGE = 5;
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / ITEMS_PER_PAGE);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const displayedItems = items.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    return (
        <section className='mt-5'>
            <Container className='container-lg'>
                <Row>
                    <Col lg={ 12 }>
                        <h1>Welcome to Custom Options</h1>
                    </Col>

                    <Col lg={ 12 }>
                        <Directives />
                    </Col>

                    <Col lg={ 12 }>
                        <ToggleCheck />
                    </Col>

                    {/* <Col lg={ 6 }>
                        <div>
                            <h1>Pagination Example</h1>
                            <ol>

                                { displayedItems.map((item, index) => (
                                    <li key={ index }>
                                        <p className='mb-0'>{ item.name }</p>
                                        <span>{ item.email }</span>
                                        <p className='mb-0'>{ item.age }</p>
                                    </li>
                                )) }
                            </ol>
                            <div>
                                { Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={ index + 0 }
                                        onClick={ () => handlePageChange(index + 1) }
                                        disabled={ currentPage === index + 1 }
                                    >
                                        { index + 1 }
                                    </button>
                                )) }
                            </div>
                        </div>
                    </Col>

                    <Col lg={ 6 }>
                        <h2>Select Option with item selected</h2>
                        <Form onSubmit={ handleSubmit }>
                            <Form.Label>Enter Search Name</Form.Label>
                            <div className='d-flex align-items-center justify-content-center'>
                                <FormControl
                                    value={ inputElement }
                                    onChange={ handleChange }
                                    onBlur={ handleBlur }
                                    placeholder='Enter Search Name'
                                />
                                <Form.Select value={ selectItem } onChange={ handleOptions }>
                                    <option>Please Select</option>
                                    { options.length > 0 && options?.map((item, index) => (
                                        <option key={ index } value={ item }>
                                            { item }
                                        </option>
                                    )) }
                                </Form.Select>
                                <Button type='submit' className='btn btn-primary'>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </Col> */}
                </Row>
            </Container>
        </section>
    );
};

export default CustomOptions;
