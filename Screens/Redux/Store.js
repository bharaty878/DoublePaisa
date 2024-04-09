
import { configureStore } from "@reduxjs/toolkit";
import  UserReducer  from "./UserSlice";

export default  Store = configureStore({
    reducer :{
        user : UserReducer,
    
    },

})


