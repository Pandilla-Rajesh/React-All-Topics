import React, { useEffect, useState } from 'react'
import './Buils.scss'

const BuildTraficLight=()=>{

    const [light, setLight] = useState('red')
    const [signal, setSignal] = useState('red')
    const [car, setCar]= useState({

        year:2024,
        make:'Ford',
        modal:'Mustang'
    })

    useEffect(()=>{
        
        const timerId = () =>{

            switch(signal){

                case 'red':
                    return setTimeout(()=>{setSignal('green')},4000)
                case 'yellow':
                    return setTimeout(()=>{setSignal('red')},500)
                case 'green':
                    return setTimeout(()=>{setSignal('yellow')},5000)
                default:
                    break
            }

            const value = timerId()
            return()=>{
                clearTimeout(value)
            }
        }

    }, [signal])

    useEffect(()=>{
        const lightTimer = () =>{
            switch(light){

                case 'red':
                    return setTimeout(()=>{setLight('green')},4000);
                case 'yellow':
                    return  setTimeout(()=>{setLight('red')},500);
                case 'green':
                    return setTimeout(()=>{setLight('yellow')},3000);
                default:
                    break;
            }
        }
        const val = lightTimer()
        return()=>{
            clearTimeout(val)
        }
    }, [light])


    return(
       <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <h1 className='text-center'>Build Trafic Light component</h1>
                        <div className='wrpper'>
                            <div className='main-signal'>
                            <div className={`light redlight ${light === 'red' ? 'lightStatus':''}`}></div>
                            <div className={`light yellowlight ${light === 'green' ? 'lightStatus':''}`}></div>
                            <div className={`light greencolor ${light === 'yellow' ? 'lightStatus':''}`}></div>
                            </div>
                          
                            <div>
                            <h1>Red Light</h1>
                        </div>
                        </div>
                      
                </div>
                <div className='col-md-12'>
                    <h1>React state update and create the objects</h1>
                    <div>Your faviourate car: s12w</div>
                </div>
            </div>
       </div>
    )
}

export default BuildTraficLight