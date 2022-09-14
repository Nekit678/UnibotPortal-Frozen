import { configureStore } from '@reduxjs/toolkit'
import appReducer from './reducers/app-reducer';
import tasksReducer from './reducers/tasks-reducer';
import userReducer from './reducers/user-reducer';

let store = configureStore({
    reducer:{
        userInfo: userReducer,
        tasksInfo: tasksReducer,
        appInfo: appReducer

    }
})

export type RootState = ReturnType<typeof store.getState>

export default store;