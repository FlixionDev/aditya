import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import HomePage from '../HomePage/HomePage'
import RestuarentPage from '../RestuarentPage/RestuarentPage'

export default function Routor() {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/home' element={<HomePage/>}/>
            <Route path='/home/:id' element={<RestuarentPage/>}/>
        </Routes>
    </div>
  )
}
