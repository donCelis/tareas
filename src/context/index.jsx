import { createContext, useState } from 'react'

import { infoTasks } from '../data'

export const TasksContext = createContext({})

export const ContextProvider = ({ children }) => {
  // Mostrar el formulario para agregar una tarea
  const [showAdd, setShowAdd] = useState(false)

  // Tareas
  const [tasks, setTasks] = useState(infoTasks)

  // Agregar una tarea
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTarea = { id, ...task }
    setTasks([...tasks, newTarea])
  }

  // Eliminar una tarea
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id
    ))
  }

  // Marcar como terminado
  const toggleTerminado = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, terminado: !task.terminado } : task))
  }

  const initialValue = {
    /* Tareas */
    tasks,
    addTask,
    deleteTask,
    toggleTerminado,
    /* Mostrar formulario */
    showAdd,
    setShowAdd
  }
  return (
    <TasksContext.Provider value={initialValue}>
      {children}
    </TasksContext.Provider>
  )
}
