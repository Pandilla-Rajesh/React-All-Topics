import  React from 'react'

async function requestUserName(formData){
    'use server'
    const userName = formData.get('userName')
    console.log(userName)
}

export default function Directives(){

    return (
       <>
        <form action={requestUserName}>
            <input type='text' name='userName' />
            <button type='submit'>Request</button>
        </form>



       </>
    )

}

function styleComponent({isActive}){
    return (

        <div className={isActive ? 'active' : 'inactive'}>Styled Component</div>
    )
}

