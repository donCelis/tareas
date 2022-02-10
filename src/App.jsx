import { useState } from "react";
import Header from "./components/Header"
import Tasks from "./components/Tasks"
import AddTarea from "./components/AddTarea";

function App() {

  const [showAdd, setShowAdd] = useState(false)

  const [tasks, setTasks] = useState([
    {
      id: 1,
      texto: 'Ir al cine',
      fecha: '02 de Febrero de 2022',
      terminado: true,
    },
    {
      id: 2,
      texto: 'Comprar en el supermercado',
      fecha: '10 de Febrero de 2022',
      terminado: false,
    },
    {
      id: 3,
      texto: 'Hacer app en React',
      fecha: '11 de Febrero de 2022',
      terminado: false,
    }
  ])

  //Agregar una tarea
  const addTask = (task) => {

    const id = Math.floor(Math.random() * 10000) + 1

    const newTarea = { id, ...task }
    setTasks([...tasks, newTarea])

  }

  //Eliminar una tarea
  const deleteTask = (id) => {
    //console.log('borrar', id)
    setTasks(tasks.filter((task) => task.id !== id
    ))
  }

  //Marcar como terminado
  const toggleTerminado = (id) => {
    //console.log(id)
    setTasks(tasks.map((task) => task.id === id ? { ...task, terminado: !task.terminado } : task))
  }

  return (
    <div className="container">
      <Header title='Tareas' onAdd={() => setShowAdd(!showAdd)} showAdd={showAdd} />
      {showAdd && <AddTarea onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleTerminado} /> : 'No hay tareas que mostrar'}
    </div>
  )
}

export default App
