"use client"
import CreateTask from "./components/createTask/createTask"
import Todolist from "./components/todoList/todolist"
import Filtres from "./components/filtres/filtres"


export default function Home() {



  return (
    <main className="max-w-4xl mx-auto mt-4 ">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Список задач</h1>
      </div>
      <CreateTask />
      <Filtres />
      <Todolist />
    </main>

  )
}
