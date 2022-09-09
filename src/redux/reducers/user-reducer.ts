import { createSlice} from "@reduxjs/toolkit";

type initialStateType = {
    login:string
}

let initialState:initialStateType = {
    login: "JustLena1337"
}

const userSlice = createSlice(
    {
        name: "user",
        initialState: initialState,
        reducers: {
            testReducer(state, action) {
                alert(state.login)
            }
        }
    }

)

export const { testReducer } = userSlice.actions
export default userSlice.reducer