import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'

export default function RestuarentPage() {
    const { id} =useParams();
    const [state,setState]=useState([]);
    useEffect(() => {
        fetchRestaurant()
    }, [])
    const fetchRestaurant = () => {
        fetch(`https://staging.fastor.in/v1/m/restaurant?city_id=118&`, {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM4NiIsImVtYWlsIjoiOTgxODk3OTQ1MEBmYXN0b3IuaW4iLCJwaG9uZSI6Ijk4MTg5Nzk0NTAiLCJkaWFsX2NvZGUiOiIrOTEiLCJsYXN0X3Bhc3N3b3JkX3VwZGF0ZSI6IjIwMjMtMTItMDJUMDk6MjQ6NDcuMDAwWiIsImlhdCI6MTcwNDg4MjA1NywiZXhwIjoxNzEyMTM5NjU3fQ.WUE78lWzqBxlgh6ygFERUAcv89ex2OVYyHvqDp43Ee0"
            }
        }).then(res=>res.json()).then((res)=>{
            setState(res.filter((el)=>el.restaurant_id==id))
        }).catch(err=>console.log(err))
    }
  return (
    <div>
        {
            state.length> 0 ? 
            <>
                <img src={state[0].images[0].url}/>
            </>: <>Loading</>
        }
    </div>
  )
}
