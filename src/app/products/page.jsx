import React from 'react';
import Card from '../components/card';
import style from './products.module.css';
import Link from 'next/link';
import Cinta from '../components/cinta';
import { getItems } from '../services/itemService';

export default async function page() {
	const data = await getItems();
	return (
		<>
			<Cinta />
			<aside className={style.menu_filtros}>
				<h3>Materiales</h3>
				<ul>
					<li>
						<Link href="#">Plata</Link>
					</li>
					<li>
						<Link href="#">Oro</Link>
					</li>
					<li>
						<Link href="#">Plata y oro</Link>
					</li>
				</ul>
				<h3>Rango de precio</h3>
				<form action="#">
					<input
						type="range"
						step={10000}
						id="rango-precio"
						min={0}
						max={100000}
					/>
					<span id={style.texto_filtro} />
					<button className={style.button_filtro}>Aplicar filtro</button>
				</form>
			</aside>

			<section className={style.container_ordenar}>
				<div className={style.cantidad}>
					<p>7 productos</p>
				</div>
				<div className={style.filtro}>
					<select name="orden" id={style.orden}>
						<option value>Ordenar por</option>
						<option value="saab">Precio: menor a mayor</option>
						<option value="mercedes">Precio: mayor a menor</option>
						<option value="audi">Nombre: a la z</option>
					</select>
				</div>
			</section>

			<main className={style.container_anillo}>
				{data.map((item) => (
					<Card props={item} />
				))}
			</main>

			<section className={style.container_paginas}>
				<div className={style.cambiar_pagina}>
					<button className={style.left_button}>{'<'} Anterior </button>
					<p>Página 1 de x</p>
					<button className={style.right_button}>Siguiente {'>'}</button>
				</div>
			</section>
		</>
	);
}

Cinta.defaultProps = {
	titulo_pagina: 'Anillos',
	boton_volver: 'Volver a la tienda',
};
