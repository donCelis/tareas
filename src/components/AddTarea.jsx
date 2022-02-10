import { useState } from "react";

const AddTarea = ({ onAdd }) => {

	const [texto, setTexto] = useState('')
	const [fecha, setFecha] = useState('')
	const [terminado, setTerminado] = useState(false)

	const onSubmit = (e) => {

		e.preventDefault()

		if (!texto) {
			alert('Por favor agrega la descripcion de la Tarea')
			return
		}

		onAdd({ texto, fecha, terminado })

		setTexto('')
		setFecha('')
		setTerminado(false)

	}

	return (
		<form className='add-form' onSubmit={onSubmit}>
			<div className='form-control'>
				<label>Tarea</label>
				<input type='text' value={texto} onChange={(e) => setTexto(e.target.value)} placeholder='Agregar Tarea' />
			</div>
			<div className='form-control'>
				<label>Fecha</label>
				<input type='text' value={fecha} onChange={(e) => setFecha(e.target.value)} placeholder='Fecha' />
			</div>
			<div className='form-control form-control-check'>
				<label>Terminado</label>
				<input type='checkbox' checked={terminado} value={terminado} onChange={(e) => setTerminado(e.currentTarget.checked)} />
			</div>
			<input type='submit' value='Guardar Tarea' className="btn btn-block" />
		</form>
	);
};

export default AddTarea;

