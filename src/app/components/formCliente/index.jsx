'use client';
import React, { useState } from 'react';
import style from './formClient.module.css';
import { postCliente } from '../../services/itemService';

export default function FormClient({ props, items }) {
	const [formData, setFormData] = useState({
		nombre: '',
		apellido: '',
		direccion: '',
		correo: '',
		telefono: '',
	});

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formattedData = {
			nombre: formData.nombre,
			apellido: formData.apellido,
			direccion: formData.direccion,
			correo: formData.correo,
			telefono: formData.telefono,
		};
		postCliente(formattedData)
			.then(() => {
				console.log('cliente creado');
			})
			.catch((error) => {
				console.error('Error al actualizar el producto:', error);
				// Manejar el error de actualización del producto
			});
	};

	console.log(items);
	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.card}>
					<div className={style.card_title}> Ingresa tus datos </div>
					<div className={style.form_group}>
						<input
							type="text"
							id="nombre"
							name="nombre"
							className={style.form_field}
							value={formData.nombre}
							onChange={handleChange}
							required
						/>
						<label className={style.form_label} htmlFor="name">
							Nombre
						</label>
					</div>

					<div className={style.form_group}>
						<input
							type="text"
							id="apellido"
							name="apellido"
							className={style.form_field}
							onChange={handleChange}
							value={formData.apellido}
							required
						/>
						<label className={style.form_label} htmlFor="Apellidos">
							Apellidos
						</label>
					</div>

					<div className={style.form_group}>
						<input
							type="tel"
							id="telefono"
							name="telefono"
							className={style.form_field}
							value={formData.telefono}
							onChange={handleChange}
							required
						/>
						<label className={style.form_label} htmlFor="telefono">
							Telefono
						</label>
					</div>

					<div className={style.form_group}>
						<input
							type="text"
							id="direccion"
							name="direccion"
							className={style.form_field}
							value={formData.direccion}
							onChange={handleChange}
							required
						/>
						<label className={style.form_label} htmlFor="direccion">
							Direccion
						</label>
					</div>

					<div className={style.form_group}>
						<input
							type="email"
							id="correo"
							name="correo"
							className={style.form_field}
							onChange={handleChange}
							value={formData.correo}
							required
						/>
						<label className={style.form_label} htmlFor="correo">
							Correo
						</label>
					</div>

					<div className={style.card_action}>
						<button className={style.btn}>Continuar</button>
					</div>
				</div>
			</form>
		</div>
	);
}
