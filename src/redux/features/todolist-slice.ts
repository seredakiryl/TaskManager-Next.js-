import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v1 } from 'uuid';

export type TaskType = {
    id: string,
    title: string
    isDone: boolean
}

export type TodoListStateType = {
    filter: string,
    tasks: Array<TaskType>
}

const initialState: TodoListStateType = {
    filter: 'all',
    tasks: [{ id: v1(), title: 'Купить молоко', isDone: false },
    { id: v1(), title: 'Занятие с репетитором', isDone: true },
    { id: v1(), title: 'Закрыть таску', isDone: false }]
}

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<TaskType>) {
            state.tasks.unshift(action.payload);
        },
        removeTask(state, action: PayloadAction<string>) {
            const index = state.tasks.findIndex((task) => task.id == action.payload);
            state.tasks.splice(index, 1);
        },
        changeStatus(state, action: PayloadAction<string>) {
            const index = state.tasks.findIndex((task) => task.id == action.payload);

            const newValue = !state.tasks[index].isDone
            state.tasks[index] = { ...state.tasks[index], isDone: newValue };

        },
        changeFilter(state, action: PayloadAction<string>) {
            state.filter = action.payload;
        }

    }
})

export const { addTask, changeStatus, removeTask, changeFilter } = todoListSlice.actions

export default todoListSlice.reducer