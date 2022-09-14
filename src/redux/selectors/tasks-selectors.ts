import { RootState } from "../redux-store";
import { createSelector } from '@reduxjs/toolkit';

export const getTasksCount = (state:RootState)=>(state.tasksInfo.tasksCount)

export const getTasksListId = createSelector([getTasksCount], (tasksCount) => {
    let list:number[] = []
    let count = tasksCount?tasksCount:0
    for (let i=1;i<=count;i++){
        list.push(i)
    }
    return list
})
