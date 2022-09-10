import { createSlice} from "@reduxjs/toolkit";

type initialStateType = {
    userLogin:string | null,
    userLvl:number | null,
    clan:string | null,
    clanId:number | null,
    online:boolean | null,
    registerData:string | null,
    lastOnlineData: string | null,
    followingCount: number | null,
    followersCount: number | null,
    followingUsers:any[], //!change type!
    followersUsers:any[],  //!change type!
    comments:any[]  //!change type 
}

let initialState:initialStateType = {
    userLogin: "JustLena1337",
    userLvl:100,
    clan: "Нет",
    clanId: 1,
    comments: [],
    followersCount:10,
    followersUsers: [],
    followingCount:10,
    followingUsers:[],
    lastOnlineData:"10.10.2022",
    online: true,
    registerData: "10.10.2021"
}

const userSlice = createSlice(
    {
        name: "user",
        initialState: initialState,
        reducers: {
            testReducer(state, action) {
                alert(state.userLogin)
            }
        }
    }

)

export const { testReducer } = userSlice.actions
export default userSlice.reducer