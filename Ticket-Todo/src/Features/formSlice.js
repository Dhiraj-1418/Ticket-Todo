import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userData : JSON.parse(localStorage.getItem("userDataStored")) || []
}
 


const formDataSlice = createSlice({
    name : "userData",
    initialState,
    reducers : {
        addUserData : (state,action)=>{
            const newUserData = {
                firstName : action.payload.firstName,
                lastName : action.payload.lastName,
                from : action.payload.from,
                to : action.payload.to,
                boardingSt: action.payload.boardingSt,
                coach:action.payload.coach,
                boardDate:action.payload.boardDate
            }            
            state.userData.push(newUserData);
            localStorage.setItem("userDataStored" , JSON.stringify(state.userData))
        },  
        remove : (state , action)=>{
            state.userData.splice(action , 1)
            localStorage.setItem("userDataStored" , JSON.stringify(state.userData))
        } ,
        edit : (state , action)=> {
            const {index , firstName , lastName , From , To,boardingSt,coach,boardDate} = action.payload
            state.userData[index] = {firstName : firstName , lastName : lastName , From : From , To : To,boardingSt:boardingSt,coach:coach,boardDate:boardDate}
            localStorage.setItem("userDataStored" , JSON.stringify(state.userData))

        }
    }
    
})

export default  formDataSlice.reducer;
export const {addUserData ,  remove , edit} = formDataSlice.actions;