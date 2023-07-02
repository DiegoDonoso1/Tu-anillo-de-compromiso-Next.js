import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './detail.module.css';
import Card from '../components/card';

export default function Detail() {
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
						<h2 className={style.titulo_anillo}>Anillo Con Piedra Marcacite</h2>
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
							<Link className={style.link_tallas} href="/guia-de-tallas.html">
								{' '}
								<span>¿Cuál es mi talla?</span>
							</Link>
						</div>
						<h3 className={style.stock_anillo}>
							Stock: <span>En Stock</span>
						</h3>
						<p className={style.precio_anillo}>$20000</p>
						<button className={style.boton_carrito}>Agregar al carro</button>
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
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab ipsa
						libero explicabo exercitationem doloremque quo nam, voluptate
						adipisci sequi amet, placeat ipsum vitae? Modi, labore. Optio vel
						doloremque autem enim. Lorem ipsum dolor sit amet consectetur
						adipisicing elit. Reprehenderit esse culpa beatae dolor molestiae
						deleniti dignissimos commodi laudantium mollitia cumque dicta minima
						sit illo tempora atque impedit, in rem quia.
					</p>
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
