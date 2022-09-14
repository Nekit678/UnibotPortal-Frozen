import { createSlice} from "@reduxjs/toolkit";

type initialStateType = {
    tasksCount:number | null,
    currentTask:number | null,
    taskInfo:{
        taskNumber:number | null,
        taskDescription:string | null,
        taskCode:string | null
    }
}

let initialState:initialStateType = {
    tasksCount:50,
    currentTask:null,
    taskInfo:{
        taskNumber:null,
        taskDescription:null,
        taskCode:null
    }
}

const tasksSlice = createSlice(
    {
        name: "tasks",
        initialState: initialState,
        reducers: {
            setCurrentTask(state, action) {
                alert(state)
            },
            setTasksCount(state, action) {
                alert(state)
            }
        }
    }

)

export const { setCurrentTask, setTasksCount } = tasksSlice.actions
export default tasksSlice.reducer