import { createSlice } from "@reduxjs/toolkit";

export const UserConfigSlice = createSlice ( {
    name : 'userinfo',
    initialState : {
    Information: JSON.parse(localStorage.getItem('Information')) || [],
    }, 
  
    reducers : {
        onSignUp : (state,action)=>{
              state.Information.push(action.payload);
              console.log(action.payload)
              localStorage.setItem('Information', JSON.stringify(state.Information));
              
        },
        
    }
})


export const {onSignUp} = UserConfigSlice.actions;
export default UserConfigSlice.reducer;