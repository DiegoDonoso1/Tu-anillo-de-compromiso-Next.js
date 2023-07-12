import { getItems } from '@/app/services/itemService';
import styles from './page.module.css';
import React from 'react';

export default async function page() {
	const data = await getItems();
	return (
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
					<tr className={styles.filas}>
						<td>{anillo.nombre}</td>
						<td>{anillo.precio}</td>
						<td>{anillo.descripcion}</td>
						<td>{anillo.categoria.categoria}</td>

						<td>
							<button className={styles.button}>Editar</button>
							<button className={styles.button}>Eliminar</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
