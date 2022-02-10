import { useContext } from 'react'
import { TasksContext } from '../context'
import { FaTimes } from 'react-icons/fa'

const Task = ({ task }) => {
  const { deleteTask, toggleTerminado } = useContext(TasksContext)

  return (
    <article
      className={`task ${task.terminado ? 'terminado' : ''}`}
      onDoubleClick={() => toggleTerminado(task.id)}
    >
      <h3>
        {task.texto}
        <FaTimes className='close' onClick={() => deleteTask(task.id)} />
      </h3>
      <p>{task.fecha}</p>
    </article>
  )
}

export default Task
