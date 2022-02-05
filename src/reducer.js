import {createSlice} from "@reduxjs/toolkit"


export const slice =createSlice({
    name:"question",
    initialState:{
        question_category:"",
        question_amount:10,
        score:0
    },
    reducers:{
        handleCategory:(state,action)=>{
            state.question_category=action.payload;
        },
        handleAmount:(state,action)=>{
            state.question_amount=action.payload;
        },
        handleScore:(state,action)=>{
            state.score=action.payload;
        }
    }
})
export default slice.reducer;
export const {handleAmount,handleCategory,handleScore} =slice.actions;