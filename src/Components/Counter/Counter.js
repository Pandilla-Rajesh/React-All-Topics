import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function ReeUseCounter() {
    const { counter, incrementHandler, decrementHandler, reset } = Counter()
    return (
        <>
            <div className=''>
                <h2>Counter increment and decrement and reset</h2>
                <h1 className='text-center'>{ counter }</h1>
                <div className='d-flex gap-3'>
                    <Button onClick={ incrementHandler } variant='secondary'>Increment</Button>
                    <Button onClick={ decrementHandler } variant='danger'>Decrement</Button>
                    <Button onClick={ reset }>Reset</Button>
                </div>
            </div>
        </>
    )
}

const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementHandler = () => {
        setCounter((prevCounter) => prevCounter + 1)
    }

    const decrementHandler = () => {
        if(counter > 0) {
            setCounter((prevCounter) => prevCounter - 1)
        }
    }

    const reset = () => {
        setCounter(0)
    }
    return { counter, incrementHandler, decrementHandler, reset }
}

