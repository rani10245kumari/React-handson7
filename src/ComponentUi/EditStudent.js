import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom"
import { editStudent } from '../SLICE/slice'


const EditStudent = () => {

    const index = useLocation().state.index;
    const dispatch = useDispatch();
    const data = useSelector((state) => state.Stu_Data);
    const Navi = useNavigate();
    const [info, setInfo] = useState({
        name: "",
        age: '',
        course: '',
        batch: ''

    })
    const handelChange = (e) => {
        setInfo({ ...info, [e.target.name]: e.target.value })
    }
    const handelClick = () => {
        dispatch(editStudent({ info }))
        console.log(info);
    }

    return (
        <>
            <h1>THIS IS EDIT STUDENT COMPONENT</h1>
            <label>NAME</label>
            <input placeholder="ENter Nmae" name="name" onChange={handelChange}></input><br></br>
            <label>AGE</label>
            <input placeholder="ENter AGE" name="age" onChange={handelChange}></input><br></br>
            <label>COURSE</label>
            <input placeholder="ENter Course" name="course" onChange={handelChange}></input><br></br>
            <label>BATCH</label>
            <input placeholder="ENter Batch" name="batch" onChange={handelChange}></input><br></br>

        </>
    )

}
export default EditStudent