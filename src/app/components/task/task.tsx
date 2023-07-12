"use client"
import { TaskType } from "@/redux/features/todolist-slice"
import { RiDeleteBin5Line } from 'react-icons/ri'

type PropsType = {
    removeTask: (taskId: string) => void
    changeStatus: (taskId: string) => void
    task: TaskType
}

const Task: React.FC<PropsType> = (props) => {

    const { task, changeStatus, removeTask } = props

    const { id, title, isDone } = task

    return (
        <tr >
            <td>{title}</td>
            <td className="flex ">
                <input
                    checked={isDone}
                    className="checkbox checkbox-success"
                    type='checkbox'
                    onChange={() => changeStatus(id)}
                />
            </td>
            <td>
                <RiDeleteBin5Line size={20} color="red" onClick={() => removeTask(id)} />
            </td>
        </tr>
    )
}

export default Task