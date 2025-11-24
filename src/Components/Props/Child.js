import React from 'react'

function Child(props){

    const {userDetails, product} = props
    const {name, age, phone, email} = userDetails || {}
    const {id, title, description, category, price, rating, stock, thumbnail} = product || {}


    return(
        <section className=''>
            {userDetails && (
                <div>
                    <h2 className='text-center'>Child Components</h2>
                    <h4>Name:{name}</h4>
                    <h3>Email:{email}</h3>
                    <div className='d-flex justify-content-between'>
                         <h5>Age:{age}</h5>
                    <h6>Phone:{phone}</h6>
                    </div>
                </div>

                
            )}

{product && (
          <div>
            <p>Id: {id}</p>
          <h2>Title: {title}</h2>
          <p>Description: {description}</p>
            <div className='d-flex align-items-center justify-content-between'>
            <h3>Category: {category}</h3>
            <h6>Stock:{stock}</h6>
            </div>
            <div className='d-flex algin-items-center justify-content-between'>
            <h4>Price:{price}</h4>
            <h5>Rating:{rating}</h5>
            </div>
          <span><img src={thumbnail} /></span>
      </div>
    )}

        </section>
        
    )
}

export default Child