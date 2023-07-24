'use client';
import { getCategory, getTalla, putProducts } from '@/app/services/itemService';
import React, { useEffect, useState } from 'react';
import style from './editarId.module.css';
import { Image } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

const MyForm = (params) => {
	const id = params.params.editarId;
	const [category, setCategory] = useState();
	const [talla, setTalla] = useState();
	const [isOptionSelected, setIsOptionSelected] = useState(false);
	const router = useRouter();
	const [formData, setFormData] = useState({
		nombre: '',
		precio: '',
		descripcion: '',
		imagen: '',
		categoriaAnillo: {
			id,
		},
	});

	const [formDataTalla, setFormDataTalla] = useState({
		numeroTalla: '',
		stock: '',
		anilloTalla: {
			id: id,
		},
	});

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

	useEffect(() => {
		const fetchTalla = async () => {
			try {
				//anidar try catch con getItemById
				const items = await getTalla();
				setTalla(items);
			} catch (error) {
				console.log('Error al obtener las categorias:', error);
			}
		};

		fetchTalla();
	}, []);

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevFormData) => ({
			...prevFormData,
			[name]: value,
		}));
		setFormDataTalla((prevFormData) => ({
			...prevFormData,
			[name]: value != '' ? value : null,
		}));
		setIsOptionSelected(value !== '');
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formattedData = {
			nombre: formData.nombre,
			precio: formData.precio,
			descripcion: formData.descripcion,
			imagen: formData.imagen,
			categoriaAnillo: {
				id: formData.categoriaAnillo.id,
			},
		};
		const formattedDataTalla = {
			numeroTalla: formDataTalla.numeroTalla,
			stock: formDataTalla.stock,
			anilloTalla: {
				id,
			},
		};
		/* putProducts(formattedData, id)
			.then(() => {
				router.push('/dashboard/producto');
			})
			.catch((error) => {
				console.error('Error al actualizar el producto:', error);
				// Manejar el error de actualización del producto
			}); */
		console.log(formattedData);
		console.log(formattedDataTalla);
	};

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.card}>
					<div className={style.card_title}> Editar producto </div>
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

					<div className={style.form_group}>
						<input
							type="number"
							id="stock"
							name="stock"
							className={style.form_field}
							onChange={handleChange}
							value={formDataTalla.stock}
							required
						/>
						<label className={style.form_label} htmlFor="stock">
							Stock
						</label>
					</div>

					{/* imagen */}
					<div className={style.form_group}>
						<input
							type="file"
							id="imagen"
							name="imagen"
							className={style.form_field}
							placeholder="imagen"
							accept="image/*"
							onChange={handleChange}
							value={formData.imagen}
							required
						/>
						<label htmlFor="file" className={style.form_label}>
							Imagen
						</label>
					</div>
					{/* fin de carga de imagenes */}

					<div>
						<div className={style.select}>
							<label htmlFor="categoria">Categoría</label>
							{category ? (
								<select
									name="categoriaAnillo"
									id="categoriaAnillo"
									className={style.selectopt}
									onChange={handleChange}
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

						<div className={style.select}>
							<label htmlFor="categoria">Tallas</label>

							{talla ? (
								<select
									name="numeroTalla"
									id="numeroTalla"
									className={style.selectopt}
									onChange={handleChange}
									value={formDataTalla.numeroTalla || ''}
								>
									<option value="">Seleccione una opción</option>
									{talla.map((talla) => (
										<option key={talla.tallaId} value={talla.numeroTalla}>
											{talla.numeroTalla}
										</option>
									))}
								</select>
							) : (
								<p>cargando tallas...</p>
							)}
						</div>
					</div>

					<div className={style.card_action}>
						<button className={style.btn}>Editar</button>
					</div>
				</div>
			</form>
			<div className={style.image_product}>
				<Image src="/img/20230616_214445.jpg" width={350} height={350} />
			</div>
		</div>
	);
};

export default MyForm;
