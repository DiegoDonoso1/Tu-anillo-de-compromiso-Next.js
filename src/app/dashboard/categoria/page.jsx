import React from 'react';
import styles from './categoria.module.css';
import { getCategory } from '@/app/services/itemService';

export default async function page() {
	const data = await getCategory();
	console.log(data);
	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr className={styles.filas}>
					<th>id</th>
					<th>nombre Categoria</th>
					<th>administrar</th>
				</tr>
			</thead>
			<tbody>
				<tr className={styles.filas}>
					{data.map((categoria) => (
						<>
							<td>{categoria.id}</td>
							<td>{categoria.nombreCategoria}</td>
						</>
					))}

					<td>
						<button className={styles.button}>Editar</button>
						<button className={styles.button}>Eliminar</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
}
