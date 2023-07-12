'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './detail.module.css';
import Card from '../../components/card';
import { getItemsById } from '../../services/itemService';
import { useAppContext } from '@/app/components/statewrapper';

export default async function Detail({ params }) {
	const cart = useAppContext();
	const id = params.id;
	const data = await getItemsById(id);

	function handleClick() {
		cart.addItemToCart(data);
	}

	return (
		<>
			<main>
				<div className={style.container_detalle}>
					<div className={style.image}>
						<Image
							src="/img/20230621_165238.jpg"
							alt=""
							width={500}
							height={500}
						/>
					</div>
					<div className={style.detalle}>
						<h2 className={style.titulo_anillo}>{data.nombre}</h2>
						<p className={style.material_anillo}>Joyas Metal: Plata Fina Ley</p>
						<label className={style.label_talla} htmlFor="talla">
							Elige tu talla:
						</label>
						<select name="talla" id={style.talla}>
							<option value="13mm">13mm</option>
							<option value="19mm">19mm</option>
						</select>
						<div className={style.guia_tallas}>
							<Image src="/img/ruler.svg" alt="" width={30} height={30} />
							<Link className={style.link_tallas} href="/sizeguide">
								{' '}
								<span>¿Cuál es mi talla?</span>
							</Link>
						</div>
						<h3 className={style.stock_anillo}>
							Stock: <span>En Stock</span>
						</h3>
						<p className={style.precio_anillo}>{data.precio}</p>
						<button className={style.boton_carrito} onClick={handleClick}>
							Agregar al carro
						</button>
						<div className={style.envio}>
							<Image
								src="/img/shipping-fast.svg"
								alt=""
								width={50}
								height={50}
							/>
							<p>
								Despacho a domicilio <br />
								<span>Disponible</span>
							</p>
						</div>
					</div>
				</div>

				<div className={style.separacion}>
					<hr className={style.linea} />
					<h3>Descripción</h3>
				</div>

				<div className={style.descripcion}>
					<p>{data.descripcion}</p>
				</div>
			</main>

			<div className={style.separacion}>
				<hr className={style.linea} />
			</div>

			<section className={style.contenedor_section}>
				<h3 className={style.titulo_sugerencia}>También te podría interesar</h3>
				<div className={style.container_sugerencia}>
					<Card />
					<Card />
					<Card />
				</div>
			</section>
		</>
	);
}
