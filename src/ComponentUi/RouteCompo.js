import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Student from './Student';
import Contact from './Contact';
import Home from './Home';
import EditStudent from './EditStudent'
import NewStudent from "./AddStudent"

const RouteCompo = () => {
    return (
        <>

            <BrowserRouter>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/Student'>Student</NavLink>
                <NavLink to='/Contact'>Contact</NavLink>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Student' element={<Student />}></Route>
                    <Route path='/Contact' element={<Contact />}></Route>
                    <Route path='/EditStudent' element={<EditStudent />}></Route>
                    <Route path="/AddStudent" element={<NewStudent />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteCompo