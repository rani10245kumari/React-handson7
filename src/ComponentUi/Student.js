import React from "react";
import { useSelector } from 'react-redux'
import { NavLink, useNavigate } from "react-router-dom";

const Student = () => {
    const data = useSelector((state) => state.Stu_Data)
    console.log(data);
    const Navi = useNavigate()
    return (
        <>
            <h1>STUDENT PAGE</h1>
            <button onClick={() => Navi('/AddSTUDENT')}>ADD NEW STUDENT</button>
            <table border={2}>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>AGE</th>
                        <th>BATCH</th>
                        <th>Course</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>{item.batch}</td>
                                <td>{item.course}</td>
                                <td><NavLink to='/EditStudent' state={{ index }}>Edit</NavLink></td>
                            </tr>
                        )
                    })}
                    <tr></tr>
                </tbody>
            </table >
        </>
    )
}
export default Student