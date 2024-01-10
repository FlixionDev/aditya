import React, { useEffect, useState } from 'react'
import '../HomePage/HomePage.css'
import { Link } from 'react-router-dom';
export default function HomePage() {
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
            setState(res)
            console.log(res)
        }).catch(err=>console.log(err))
    }
    return (
        <div>
            <h3>Popular Ones</h3>
            {
                state.length > 0 ? 
                state.map((el,ind)=>{
                    return <Link to={`${el.restaurant_id}`}><div className='restuarentDiv' key={ind+1}>
                        <img src={el.images[0].url}/>
                        <p>{el.restaurant_name}</p>
                        <p><b>{`Rs ${el.avg_cost_for_two}`}</b> Cost for two</p>
                    </div></Link>
                }) :<></>
            }
        </div>
    )
}
