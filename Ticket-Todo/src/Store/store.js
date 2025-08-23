import { configureStore } from "@reduxjs/toolkit";  
import formDataSlice from '../Features/formSlice'
import reducer from "../Features/formSlice";

const store = configureStore({
    reducer:{
        userData : formDataSlice
    }
})

export default store;