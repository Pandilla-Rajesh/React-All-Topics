import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import { TextField, MaskedTextField } from '@fluentui/react/lib/TextField';
import {
    DatePicker,
    DayOfWeek,
    Dropdown,
    IDropdownOption,
    mergeStyles,
    defaultDatePickerStrings,
  } from '@fluentui/react'



const TimeStartStop = () =>{

 const [time, setTime] = useState(0)
 const [isRuning, setIsRuning] = useState(false)
 const [currentDateTime, setCurrentDateTime] = useState(new Date())

 
useEffect(()=>{
   
    if(isRuning){

        const interval = setInterval(() =>{
            setTime((prev) => prev + 1)
            setCurrentDateTime(new Date())
        },100)

        return () => clearInterval(interval)

    }else{
        setTime(0)
    }

}, [isRuning])

    return (

        <>
            <div>
                <h1>Timer: {time}: seconds</h1>
                <h2>Date:{currentDateTime.toLocaleString()}</h2>
                <Button onClick={() => setIsRuning(!isRuning)} className='btn btn-success'>
                    {isRuning ? 'Stop' :'Start'}
                </Button>
                <TextField label="Standard" />
                <DatePicker
        showWeekNumbers={true}
        firstWeekOfYear={1}
        showMonthPickerAsOverlay={true}
        placeholder="Select a date..."
        ariaLabel="Select a date"
        // DatePicker uses English strings by default. For localized apps, you must override this prop.
        strings={defaultDatePickerStrings}
      />
            </div>
        </>
    )
}

export default TimeStartStop