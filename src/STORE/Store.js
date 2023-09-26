import { configureStore } from "@reduxjs/toolkit"
import StudentSlice from "../SLICE/slice"
const Store = configureStore({
    reducer: {
        Stu_Data: StudentSlice
    }
})
export default Store