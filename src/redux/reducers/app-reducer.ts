import { createSlice} from "@reduxjs/toolkit";

type initialStateType = {
    theme:string
}

let initialState:initialStateType = {
    theme: "dark"
}

const appSlice = createSlice(
    {
        name: "app",
        initialState: initialState,
        reducers: {
            setTheme(state) {
                if (state.theme==="dark"){state.theme = "light"}
                else{state.theme="dark"}
                    
            }
        }
    }

)

export const { setTheme } = appSlice.actions
export default appSlice.reducer