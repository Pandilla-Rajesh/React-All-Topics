import React from 'react'
import { Button } from 'react-bootstrap'
import StateFull from './StateFull'

const ReactMemo=()=>{
    
  const ButtonNew = React.memo(({onClick, children})=>{
    console.log('button rendred')
    return(
        <button onClick={onClick}>{children}</button>
    )
})

function Click(){

    const handleClick = () => alert('Clicked')

    return(
        <div className='mt-1 p-1'>
            <Button onClick={handleClick}>Click me</Button>
        </div>
    )
}

    return(
        <div className='my-3 p-5'>
        <h2>Memorized the value</h2>
        <ButtonNew onClick={()=> alert('Butoon clicked rendred')} 
        children='Click me (memo value)' />
        <Click/>
        <StateFull/>
        </div>
    )

}
export default ReactMemo