import React from 'react'
export const items = Array.from({ length: 20 }, (_, index) => ({
    id: index + 1,
    name: `Data ${index + 0}`,
    email: `Data ${index+1}@gmail.com`,
    age: Math.floor(Math.random() * 10) + 20
    
  }));
const data = () => {
    
  return (
    <div>
   
    </div>
  )
}

export default data
