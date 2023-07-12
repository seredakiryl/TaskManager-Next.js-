"use client"
import { removeTask, changeStatus } from "@/redux/features/todolist-slice"
import Task from "../task/task"
import { useAppDispatch, useAppSelector } from "@/redux/store"

const Todolist: React.FC<{}> = () => {

    const tasks = useAppSelector(state => state.todoList.tasks)
    const filter = useAppSelector(state => state.todoList.filter)

    const dispatch = useAppDispatch()

    const removeTaskHandler = (taskId: string) => {
        dispatch(removeTask(taskId))
    }
    const changeStatusHandler = (taskId: string) => {
        dispatch(changeStatus(taskId))
    }

    let tasksForTodolist = tasks

    if (filter == 'finished') {
        tasksForTodolist = tasks.filter(task => task.isDone)

    }
    if (filter == 'unFinished') {
        tasksForTodolist = tasks.filter(task => !task.isDone)

    }

    return (
        <div className="overflow-x-auto  mt-4">
            <table className="table w-full">
                <thead>
                    <tr>
                        <th>Задача</th>
                        <th>Статус</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {tasksForTodolist.map((task, index) => <Task
                        key={task.id}
                        task={task}
                        changeStatus={changeStatusHandler}
                        removeTask={removeTaskHandler}
                    />)}
                </tbody>
            </table>
        </div>
    )
}

export default Todolist