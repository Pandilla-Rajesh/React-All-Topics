import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

const TodoList = () => {
    const [list, setList] = useState([])
    const [product, setProduct] = useState([])
    const [isactive, setIsActive]= useState(false)
    const [name, setName] = useState(true)

    const divClass = ('myDiv', {
        active:isactive
    })

    const handleName = () =>{
        setName('Ushasri')
    }

    const getList = async () => {
        try {
            const result = await fetch('https://jsonplaceholder.typicode.com/todos')
            const res = await result.json()
            setList(res)
            console.log(res, 'data recevied')
        } catch (error) {
            console.log(error)
        }
    }

const getProduct = async()=>{
    try{

        const datares = await axios.get('https://jsonplaceholder.typicode.com/todos')
        // const dataresult = await datares.json()
        setProduct(datares.data)
        console.log(datares, 'line36')

    }catch(error){
        console.log(error)
    }
}

useEffect(()=>{
    getProduct()
})
    useEffect(()=>{
        fetch('https://dummyjson.com/products').then((res => res.json()))
        .then(data=>{
            console.log(data.products, 'data displayed')
        })
    }, [])

    useEffect(() => {
        fetch('https://dummyjson.com/products').then((res => res.json()))
            .then(data => {
                setProduct(data.products)
                console.log(data.products, 'product data received')
            })
    }, [])

    useEffect(() => {
        getList()
    }, [])

    const card = {
        display:'flex',
        color:'#fff',
        flexDirection:'row',
        flexWrap:'flex-wrap',
        alignItems:'center',
        justifyContent:'center',
        border:'solid 1px #fff',
        padding:'20px',
    }

    return (
        <>
            <h1 style={{ textTransform: 'uppercase', textAlign: 'center' }}>welcome todo list application</h1>
            <div>
                {/* <span>Name: {name}</span> */}
                <Button className='btn btn-success' onClick={()=>setName(!name)}>
                    {name ? 'show' : 'hide'}
                </Button>
            </div>
            <div style={{ background: 'lightblue', padding: '20px' }}>
                {list && list.length > 0 && list.slice(0, 10)?.map((el, index) => {
                    return (
                        <ul style={{ listStyle: 'none', border: 'solid 1px green', display: 'flex', padding: '0px 0px', margin: '0px' }}>
                            <li key={index} style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-start' }}>
                                <span style={{ border: 'solid 1px green', padding: '10px' }}>{el.id}</span>
                                <span style={{ border: 'solid 1px green', padding: '10px 10px' }}>{el.userId}</span>
                                <span style={{ padding: '0 10px' }}>{el.title}</span>
                            </li>

                        </ul>
                    )
                })}
            </div>

            <h1 style={{ textAlign: 'center', textTransform: 'uppercase' }}>Custom Product List</h1>
            <div style={{ background: 'green', padding: '25px', display:'flex', 
                flexDirection:'row', flexWrap:'wrap', gap:'16px', alignItems:'center', justifyContent:'center' }}>
                {product.map((item, index) => {
                    return (
                        <div key={index}>
                            <div style={card}>
                                <div className='card-body'>
                                    <div className='image'>
                                        <img src={item.thumbnail}/>
                                    </div>
                                    <div className={divClass} onClick={()=>setIsActive(!isactive)}>
                                    <p>This div changes its class when clicked!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>

        </>
    )
}
export default TodoList