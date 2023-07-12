import React from 'react';
import style from './dashboard.module.css';
import Image from 'next/image';
import Cinta from '../components/cinta';
import Link from 'next/link';

export default function dashboard() {
	return (
		<>
			<Cinta />
			<h3 className={style.bienvenida}>Hola de nuevo nombre</h3>
			<p className={style.descripcion}>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
				consequuntur, dolor corrupti iusto sequi repudiandae vitae pariatur
				dolorem, expedita quos ipsa omnis facilis, blanditiis unde voluptatum
				maxime at voluptas hic?
			</p>
			<div className={style.dashboard}>
				<div className={style.contenedor}>
					<div className={style.item}>
						<Link href="dashboard/categoria">
							<Image
								src="/img/category.svg"
								height={200}
								width={250}
								alt="imagen_categorias"
							/>
							<p>Categorias</p>
						</Link>
					</div>

					<div className={style.item}>
						<Link href="dashboard/producto">
							<Image
								src="/img/product.svg"
								height={200}
								width={250}
								alt="imagen_producto"
							/>
							<p>Productos</p>
						</Link>
					</div>
					<div className={style.item}>
						<Link href="dashboard/category">
							<Image
								src="/img/size-l.svg"
								height={200}
								width={250}
								alt="imagen_tallas"
							/>
							<p>Tallas</p>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}

Cinta.defaultProps = {
	titulo_pagina: 'Panel de administración',
	boton_volver: 'Volver a la tienda',
};
