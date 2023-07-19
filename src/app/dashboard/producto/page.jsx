'use client';

import { getItems } from '@/app/services/itemService';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';


export default async function page() {
	const router = useRouter();
	const data = await getItems();

	/* const handleClick = (e) => {
		router.push(`/${e.target.id}`);
	}; */

	return (
		<>
		<nav>
		<div className= {styles.container_crear}>
	<button
	onClick={() =>
		router.replace(`/dashboard/producto/nuevo`)
	}
	className={styles.button_crear}
	>
		Crear
	</button>
	</div>
	</nav>
	,
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr className={styles.filas}>
					<th>Nombre Anillo</th>
					<th>Precio</th>
					<th>Descripción</th>
					<th>Categoria</th>
					<th>Administrar</th>
				</tr>
			</thead>
			<tbody>
				{data.map((anillo) => (
					<tr key={anillo.id} className={styles.filas}>
						<td>{anillo.nombre}</td>
						<td>{anillo.precio}</td>
						<td>{anillo.descripcion}</td>
						<td>{anillo.categoria.categoria}</td>

						<td>
							<button
								id={anillo.id}
								onClick={() =>
									router.replace(`/dashboard/producto/${anillo.id}`)
								}
								className={styles.button}
							>
								Editar
							</button>
							<button className={styles.button_eliminar}>Eliminar</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
		</>
	);
}
