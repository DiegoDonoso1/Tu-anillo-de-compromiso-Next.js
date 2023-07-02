import Card from './components/card';
import styles from './page.module.css';

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
			</main>

			<section className={styles.container_sugerencia}>
				<Card />
				<Card />
				<Card />
			</section>
		</>
	);
}
