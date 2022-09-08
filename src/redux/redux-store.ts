import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/user-reducer';

let store = configureStore({
    reducer:{
        userInfo: userReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;