import { FaTasks } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Button from './Button'
import { useContext } from 'react'
import { TasksContext } from '../context'

const Header = ({ title }) => {
  const { showAdd, setShowAdd } = useContext(TasksContext)
  return (
    <header className='header'>
      <h1><FaTasks /> {title}</h1>
      <Button color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Cerrar' : 'Agregar'} onClick={() => setShowAdd(!showAdd)} />
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
