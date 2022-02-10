import { useContext, useState } from 'react'
import { TasksContext } from '../context'

const AddTarea = () => {
  const { addTask } = useContext(TasksContext)

  const [texto, setTexto] = useState('')
  const [fecha, setFecha] = useState('')
  const [terminado, setTerminado] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    addTask({ texto, fecha, terminado })

    setTexto('')
    setFecha('')
    setTerminado(false)
  }

  return (
    <form className='add-form' onSubmit={onSubmit}>
      <div className='form-control'>
        <label>Tarea</label>
        <input type='text' value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Agregar Tarea' required />
      </div>
      <div className='form-control'>
        <label>Fecha</label>
        <input type='text' value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder='Fecha' required />
      </div>
      <div className='form-control form-control-check'>
        <label>Terminado</label>
        <input type='checkbox' checked={terminado} value={terminado} onChange={(e) => setTerminado(e.currentTarget.checked)} />
      </div>
      <input type='submit' value='Guardar Tarea' className='btn btn-block' />
    </form>
  )
}

export default AddTarea
