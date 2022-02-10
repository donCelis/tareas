import { useContext } from 'react'

// components
import Header from './components/Header'
import AddTarea from './components/AddTarea'
import Tasks from './components/Tasks'

// context
import { TasksContext } from './context'

function App () {
  const { showAdd } = useContext(TasksContext)

  return (
    <section className='container'>
      <Header title='Tareas' />
      {showAdd && <AddTarea />}
      <Tasks />
    </section>
  )
}

export default App
