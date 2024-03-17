import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Register from '../../screens/register/Register'
import Login from "../../screens/login/Login"
import StudentDashboard from '../../screens/student/StudentDashboard'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/studentDashboard' element={<StudentDashboard/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router