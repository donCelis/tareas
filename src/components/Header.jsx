import { FaTasks } from 'react-icons/fa'
import PropTypes from 'prop-types'
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {

	const agregar = () => {
		console.log('agregar')
	}

	const eliminar = () => {
		console.log('eliminar')
	}

	return (
		<header className='header'>
			<h1><FaTasks /> {title}</h1>
			<Button color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Cerrar' : 'Agregar'} onClick={onAdd} />
		</header>
	);
};

// Header.defaultProps = {
// 	title: 'Titulo por defecto'
// }

Header.propTypes = {
	title: PropTypes.string.isRequired,
}

// const estilos = {
// 	color: 'red',
// 	backgroundColor: 'black',
// }

export default Header;

