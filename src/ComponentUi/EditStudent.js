import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editStudent } from "../SLICE/slice";

const EditStudent = () => {
    const index = useLocation().state.index;
    const data = useSelector((state) => state.Stu_Data);
    console.log(index);
    const Navi = useNavigate();
    const dispatch = useDispatch();
    const [info, setInfo] = useState({
        name: data[index].name,
        age: data[index].age,
        course: data[index].course,
        batch: data[index].batch,
    });

    const handleChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value });
    };

    const handleClick = () => {
        dispatch(editStudent({ info, index }));
        Navi("/Student");
        console.log(info);
        console.log(index);
    };

    return (
        <>
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
                <br />

                <div className="buttn">
                    <button className="btn1" onClick={() => Navi("/student")}>
                        Cancel
                    </button>
                    <button className="btn2" onClick={handleClick}>
                        Update
                    </button>
                </div>
            </form>
        </>
    );
};

export default EditStudent;