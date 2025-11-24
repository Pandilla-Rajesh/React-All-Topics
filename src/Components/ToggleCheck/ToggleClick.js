import React, { useState } from 'react'

function ToggleClick(initialValue=false) {

    const [isvisible, setIsVisible] = useState(initialValue)

    const ToggleValue=()=>{
        setIsVisible((prev) => !prev)
    }

  return[isvisible, ToggleValue]
}

export default ToggleClick
