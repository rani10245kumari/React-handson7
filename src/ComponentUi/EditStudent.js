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
            <form>
                <table className="table1">
                    <tr>
                        <td>
                            <label For="name">Name:</label>
                        </td>
                        <td>
                            <input
                                placeholder="Enter Name"
                                name="name"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label For="age">Age:</label>
                        </td>
                        <td>
                            <input
                                placeholder="Enter age"
                                name="age"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label For="course">Course:</label>
                        </td>
                        <td>
                            <input
                                placeholder="Enter Course"
                                name="course"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label For="batch">Batch:</label>
                        </td>
                        <td>
                            <input
                                placeholder="Enter batch"
                                name="batch"
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </table>
                <br />
                <button className="btn" onClick={() => Navi("/student")}>
                    Cancel
                </button>
                <button className="btn2" onClick={handleClick}>
                    Update
                </button>
            </form>
        </>
    );
};

export default EditStudent;