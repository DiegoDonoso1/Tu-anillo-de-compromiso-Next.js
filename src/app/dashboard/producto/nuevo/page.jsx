'use client';
import { getCategory, postProducts } from '@/app/services/itemService';
import React, { useEffect, useState } from 'react';
import style from './nuevo.module.css';
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
    const [imagen, setImagen] = useState(false);

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
		postProducts(formattedData, formData.categoria)
			.then(() => {
				console.log('Producto creado');
			})
			.catch((error) => {
				console.error('Error al crear el producto:', error);
				// Manejar el error de actualización del producto
			});
		console.log(formData);
	};

	return (
		<div className={style.container}>
			<form className={style.form} onSubmit={handleSubmit}>
				<div className={style.card}>
					<div className={style.card_title}> Crear producto </div>
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

					{/* imagen */}
					<div className={style.form_group}>
            <input
            type="file"
            id="file"
            className={style.form_field}
            placeholder="Nombre"
            accept="image/*"
            required
            />
            <label htmlFor="file" className={style.form_label}>
            Imagen
            </label>
        </div>
		{/* fin de carga de imagenes */}

					<div className={style.select}>
						<label htmlFor="categoria">Categoría</label>
						{category ? (
							<select
								name="categoria"
								id="categoria"
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
					<div className={style.card_action}>
						<button className={style.btn}>Crear</button>
					</div>
				</div>
			</form>
            {
                imagen ? <div className={style.image_product}>
				<Image src="/img/20230616_214445.jpg" width={350} height={350} />
			</div> : <div className={style.image_product}> Esperando imagen </div>
            }
		</div>
	);
};

export default MyForm;