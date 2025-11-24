import axios from 'axios'
import React, { useEffect, useState } from 'react'

function UseCustomAPI(url){

    const [user, setUser] = useState([])
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        
        axios.get(url).then((res)=>{
            setUser(res.data)
            console.log(res.data.slice(0))
            setLoading(false)
        }).catch((err)=>{
            console.log(err)
        })
    }, [])

    // const fetchData = async () => {
    //     try {
    //       const response = await axios.get(url);
    //       setUser(response.data);
    //     } catch (error) {
    //       console.error("Error fetching data:", error);
    //     } finally {
    //       setLoading(false);
    //     }
    //   };
  
    //   fetchData();

    return {user}

}

export default UseCustomAPI