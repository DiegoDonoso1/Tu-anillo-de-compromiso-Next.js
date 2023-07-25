import React from 'react';
import styles from './categoria.module.css';
import { getCategory } from '@/app/services/itemService';

export default async function page() {
	const data = await getCategory();
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr className={styles.filas}>
					<th>Id</th>
					<th>Nombre Categoria</th>
					<th>Administrar</th>
				</tr>
			</thead>
			<tbody>
				{data.map((categoria) => (
					<tr className={styles.filas}>
						<td>{categoria.id}</td>
						<td>{categoria.nombreCategoria}</td>

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
