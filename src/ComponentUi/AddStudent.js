import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../SLICE/slice";
import { NavLink } from "react-router-dom";

const NewStudent = () => {
    const Navi = useNavigate();
    const dispatch = useDispatch();

    const [info, setInfo] = useState({
        name: "",
        age: "",
        course: "",
        batch: "",
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        dispatch(addStudent({ info }));
        Navi("/Student");
        console.log(info);
    };

    return (
        <>
            <h1>Add new Student</h1>
            <form>
                <table className="table1">
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="name">Name:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Name"
                                    name="name"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="age">Age:</label>
                            </td>
                            <td>
                                <input
                                    type="number"
                                    placeholder="Enter Age"
                                    name="age"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="course">Course:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter Course"
                                    name="course"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <label htmlFor="batch">Batch:</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    placeholder="Enter batch"
                                    name="batch"
                                    onChange={handleChange}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />
                <button className="btn" onClick={() => Navi("/Student")}>
                    Cancel
                </button>
                <button className="btn2" onClick={handleClick}>
                    Add Student
                </button>
            </form>
            <NavLink to="/newStudent"></NavLink>
        </>
    );
};

export default NewStudent;