import { createSlice } from "@reduxjs/toolkit";
const initialState = [
    { name: 'Ranu', age: 20, course: "MERN", batch: "EA24" },
    { name: 'Rahul', age: 20, course: "MERN", batch: "EA24" },
    { name: 'Pihu', age: 20, course: "MERN", batch: "EA24" },
    { name: 'Sumit', age: 20, course: "MERN", batch: "EA24" },
    { name: 'Puja', age: 20, course: "MERN", batch: "EA24" },
]
const StudentSlice = createSlice({
    name: "Stu_Data",
    initialState,
    reducers: {
        editStudent: (state, action) => {
            state[action.payload.index] = action.payload.info;
        },
        addStudent: (state, action) => {
            state.push(action.payload.info);
        },
    },
})
export const { editStudent, addStudent } = StudentSlice.actions;
export default StudentSlice.reducer