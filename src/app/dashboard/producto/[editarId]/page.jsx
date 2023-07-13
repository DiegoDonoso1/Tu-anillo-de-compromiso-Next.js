'use client';
import { getCategory, putProducts } from '@/app/services/itemService';
import React, { useEffect, useState } from 'react';
import style from './editarId.module.css';
import { Image } from 'react-bootstrap';

const MyForm = (params) => {
	const id = params.params.editarId;
	const [formData, setFormData] = useState({
		nombre: '',
		precio: '',
		descripcion: '',
		categoriaAnillo: {
			id: '',
		},
	});

	const [category, setCategory] = useState();

	useEffect(() => {
		const fetchCategory = async () => {
			try {
				//anidar try catch con getItemById
				const items = await getCategory();
				setCategory(items);
			} catch (error) {
				console.log('Error al obtener las categorias:', error);
			}
		};

		fetchCategory();
	}, []);

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
			precio: formData.precio,
			descripcion: formData.descripcion,
			categoriaAnillo: {
				id: formData.categoria,
			},
		};
		putProducts(formattedData, id)
			.then(() => {
				console.log('Producto actualizado');
			})
			.catch((error) => {
				console.error('Error al actualizar el producto:', error);
				// Manejar el error de actualización del producto
			});
		console.log(formData);
	};

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.card}>
					<div className={style.card_title}>titulo</div>
					<div className={style.form_group}>
						<input
							type="text"
							id="name"
							name="nombre"
							className={style.form_field}
							onChange={handleChange}
							value={formData.nombre}
							required
						/>
						<label className={style.form_label} htmlFor="name">
							Nombre
						</label>
					</div>

					<div className={style.form_group}>
						<input
							type="number"
							id="precio"
							name="precio"
							className={style.form_field}
							onChange={handleChange}
							value={formData.precio}
							required
						/>
						<label className={style.form_label} htmlFor="precio">
							Precio
						</label>
					</div>

					<div className={style.form_group}>
						<input
							type="text"
							id="desc"
							name="descripcion"
							className={style.form_field}
							onChange={handleChange}
							value={formData.descripcion}
							required
						/>
						<label className={style.form_label} htmlFor="desc">
							Descripción
						</label>
					</div>

					<div className={style.select}>
						<label htmlFor="categoria">Categoría</label>
						{category ? (
							<select
								name="categoria"
								id="categoria"
								className={style.selectopt}
								onChange={handleChange}
								value={formData.categoriaAnillo.id}
							>
								{category.map((categoria) => (
									<option
										className={style.option}
										key={categoria.id}
										value={categoria.id}
									>
										{categoria.nombreCategoria}
									</option>
								))}

								{/* opciones de categoría */}
							</select>
						) : (
							<p>cargando categorias...</p>
						)}
					</div>
					<div className={style.card_action}>
						<button className={style.btn}>Editar</button>
					</div>
				</div>
			</form>
			<div className={style.image_product}>
				<Image src="/img/anilloCarousel.png" width={500} height={500} />
			</div>
		</div>
	);
};

export default MyForm;
