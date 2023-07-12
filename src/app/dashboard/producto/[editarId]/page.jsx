'use client';
import { getCategory, putProducts } from '@/app/services/itemService';
import React, { useEffect, useState } from 'react';

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
		<form onSubmit={handleSubmit}>
			<label htmlFor="name">Nombre</label>
			<input
				type="text"
				id="name"
				name="nombre"
				onChange={handleChange}
				value={formData.nombre}
			/>
			<br />
			<label htmlFor="precio">Precio</label>
			<input
				type="number"
				id="precio"
				name="precio"
				onChange={handleChange}
				value={formData.precio}
			/>
			<br />
			<label htmlFor="desc">Descripción</label>
			<input
				type="text"
				id="desc"
				name="descripcion"
				onChange={handleChange}
				value={formData.descripcion}
			/>
			<br />
			<label htmlFor="categoria">Categoría</label>
			{category ? (
				<select
					name="categoria"
					id="categoria"
					onChange={handleChange}
					value={formData.categoriaAnillo.id}
				>
					{category.map((categoria) => (
						<option key={categoria.id} value={categoria.id}>
							{categoria.nombreCategoria}
						</option>
					))}

					{/* opciones de categoría */}
				</select>
			) : (
				<p>cargando categorias...</p>
			)}
			<br />
			<button>Editar</button>
		</form>
	);
};

export default MyForm;
