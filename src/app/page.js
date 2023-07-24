'use client';

import Card from './components/card';
import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<main>
				<div className={styles.contenedor_main}>
					<div className={styles.contenido_main}>
						<h2 className={styles.titulo}>
							TU AVENTURA
							<br /> COMIENZA AQUI
						</h2>
						<p>Visita nuestra colección</p>
						<button>Ver colección</button>
					</div>
				</div>

				<section>
					<h2 className={styles.titulo_categorias}>Anillos por categoria</h2>
					<div className={styles.container_categoria}>
						<div className={styles.categoria}>
							<Image
								src="/img/20230616_214342.jpg"
								width={250}
								height={250}
								alt="categoria_corazon"
							/>
							<p className={styles.parrafo_categorias}>Corazon</p>
						</div>
						<div className={styles.categoria}>
							<Image
								src="/img/20230616_214342.jpg"
								width={250}
								height={250}
								alt="categoria gota"
							/>
							<p className={styles.parrafo_categorias}>Gota</p>
						</div>
						<div className={styles.categoria}>
							<Image
								src="/img/20230616_214342.jpg"
								width={250}
								height={250}
								alt="categoria rectangular"
							/>
							<p className={styles.parrafo_categorias}>Rectangular</p>
						</div>
					</div>
				</section>

				<h2 className={styles.titulo_sugerencia}>Nuestras sugerencias</h2>
				<section className={styles.container_sugerencia}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</section>

				<section className={styles.mensaje}>
					<Image
						src="/img/imagenMensaje.jpg"
						height={400}
						width={400}
						alt="imagen matrimonio"
					/>
					<p className={styles.parrafo_mensaje}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
						amet sapien ultrices, elementum dolor a, fermentum tortor.
						Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
						posuere cubilia curae; Nulla facilisi. Donec feugiat rutrum quam eu
						ornare. Pellentesque dapibus dui quis enim lacinia accumsan. Aenean
						neque sem, malesuada in accumsan ac, tempor non erat. Nullam risus
						quam, tempus bibendum eros sit amet, vestibulum convallis enim.
						Vestibulum erat tellus, ultricies a lorem nec, tempor vulputate leo.{' '}
					</p>
				</section>
			</main>
		</>
	);
}
