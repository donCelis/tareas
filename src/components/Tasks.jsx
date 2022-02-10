import { useContext } from 'react'
import { TasksContext } from '../context'
import Task from './Task'

const Tasks = () => {
  const { tasks } = useContext(TasksContext)
  return (
    <section>
      {tasks.length > 0
        ? tasks.map((task) => (
          <Task key={task.id} task={task} />
          ))
        : 'No hay tareas para mostrar'}
    </section>
  )
}

export default Tasks
