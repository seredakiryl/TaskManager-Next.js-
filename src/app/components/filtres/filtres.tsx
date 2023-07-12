"use client"
import { changeFilter } from "@/redux/features/todolist-slice"
import { useAppDispatch, useAppSelector } from "@/redux/store"

const Filtres = () => {

    const filter = useAppSelector(state => state.todoList.filter)
    const dispatch = useAppDispatch()

    const changeFilterHandler = (filter: string) => {
        dispatch(changeFilter(filter))
    }

    return (
        <div className="flex items-center gap-x-5 h-24 ">
            <div className="flex items-center">
                <input 
                type="radio"
                    className="radio mr-4 radio-info"
                    checked={filter == 'all' }
                    onChange={() => changeFilterHandler('all')} />
                <span>Все</span>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"

                    className="radio mr-4 radio-info"
                    checked={filter == 'finished'}
                    onChange={() => changeFilterHandler("finished")} />
                <span>Выполненные</span>
            </div>
            <div className="flex items-center">
                <input
                    type="radio"

                    className="radio mr-4 radio-info"
                    checked={filter == 'unFinished'}
                    onChange={() => changeFilterHandler('unFinished')} />
                <span>Невыполненные</span>
            </div>

        </div>
    )
}

export default Filtres