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
            <h1 className='heading'>Add new Student</h1>
            <form className="Addtable">


                <fieldset className="form">
                    <legend>NAME</legend>
                    <label htmlFor="name" />
                    <input
                        type="text"
                        id="name"
                        name="Name"
                        placeholder="Enter your name"
                        onChange={handleChange}
                    />
                </fieldset>
                <br></br>
                <br></br>

                <fieldset className="form">
                    <legend>AGE</legend>
                    <label htmlFor="age" />
                    <input
                        type="number"
                        id="age"
                        name="Age"
                        placeholder="Enter your age"
                        onChange={handleChange}
                    />
                </fieldset>
                <br></br>
                <br></br>
                <fieldset className="form">
                    <legend>COURSE</legend>
                    <label htmlFor="name" />
                    <input

                        type="text"
                        id="name"
                        name="Course"
                        placeholder="Enter your course"
                        onChange={handleChange}
                    />
                </fieldset>
                <br></br>
                <br></br>

                <fieldset className="form">
                    <legend>BATCH</legend>
                    <label htmlFor="name" />
                    <input
                        type="text"
                        id="name"
                        name="Batch"
                        placeholder="Enter your batch"
                        onChange={handleChange}
                    />
                </fieldset>
                <br></br>
                <br />
                <div className="buttn">
                    <button className="btn1" onClick={() => Navi("/Student")}>
                        Cancel
                    </button>
                    <button className="btn2" onClick={handleClick}>
                        Add Student
                    </button>
                </div>
            </form>
            <NavLink to="/newStudent"></NavLink>
        </>
    );
};

export default NewStudent;