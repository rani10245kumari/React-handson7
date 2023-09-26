import React from 'react';
import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
import Student from './Student';
import Contact from './Contact';
import Home from './Home';
import EditStudent from './EditStudent'


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
                    <Route path='/EditStuent' element={<EditStudent />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteCompo