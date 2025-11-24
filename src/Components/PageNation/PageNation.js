import React, { useState } from 'react'
import { Button } from 'react-bootstrap';
import ToggleCheck from '../ToggleCheck/ToggleCheck';

export const data = Array.from({length:100}, (_, index) => ({
    id:index+1,
    name:`Data ${index+1}`,
    email:`Data ${index + 1} @gmail.com`,
    age: Math.floor(Math.random() * 20) + 10
}))

const ITEMS_PER_PAGE = 10;

function PageNation(){

    const [currentPage, setCurrentPage] = useState(1)
    const totalPages = Math.ceil(data.length/ITEMS_PER_PAGE)

    const handlePageChange=(pageNumber)=>{
        setCurrentPage(pageNumber)
    }

    const daisplayedData = data.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    )

    const handlePrevious=()=>{
        if(currentPage > 1){
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext=()=>{
        if(currentPage < totalPages){
            setCurrentPage(currentPage + 1)
        }
    }

    return(
        <section className='my-5 p-5'>
                 <div className='container'>
            <div className='row align-items-center justify-content-center'>
                <h1>Custom Pagenation added done</h1>
                <ul className='list-group'>
                    {daisplayedData.map((item)=>(
                        <li key={item.id} className='list-group-item'>
                            <h1>{item.name}</h1>
                            <p>{item.email}</p>
                            <span>{item.age}</span>
                        </li>
                    ))}
                </ul>
                <div>
        {/* {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            disabled={currentPage === index + 1}
          >
            {index + 1}
          </button>
        ))} */}
        <div className='d-flex align-items-center justify-content-end gap-2 my-3'>
            <Button onClick={handlePrevious} disabled={currentPage === 1} className='btn btn-secondary m-1'>Prev</Button>
            <Button onClick={handleNext} disabled={currentPage === totalPages}>Next</Button>
        </div>
      </div>
            </div>
       </div>
        </section>
    )
}

export default PageNation