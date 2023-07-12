"use client"
import { AiOutlinePlus } from 'react-icons/ai'
import Modal from '../modal/modal'
import { FormEvent, FormEventHandler, useState } from 'react'
import { addTask } from '@/redux/features/todolist-slice'
import { v1 } from 'uuid';
import { useAppDispatch } from '@/redux/store'

const CreateTask = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
    const [newTaskValue, setNewTaskValue] = useState<string>("");

    const dispatch = useAppDispatch()

    const addTaskHandler: FormEventHandler<HTMLFormElement> = (event: FormEvent) => {
        event.preventDefault()

        const newTask = { id: v1(), title: newTaskValue, isDone: false }

        dispatch(addTask(newTask))
        setIsModalOpen(false)
        setNewTaskValue('')
    }


    return <div>
        <button onClick={() => setIsModalOpen(true)} className="btn text-white btn-info w-full"> Создать новую задачу
            <AiOutlinePlus size={20} className='ml-2' />
        </button>
        <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} >
            <form onSubmit={addTaskHandler}>
                <h3 className='font-bold text-lg'>Создать новую задачу</h3>
                <div className='modal-action'>
                    <input
                        className='input input-bordered w-full'
                        value={newTaskValue}
                        onChange={(e) => setNewTaskValue(e.target.value)}
                    />
                    <button type='submit' className='btn text-white btn-info '>
                        Создать
                    </button>
                </div>
            </form>
        </Modal>
    </div >
}

export default CreateTask