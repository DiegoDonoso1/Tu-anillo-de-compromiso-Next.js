'use client';

import { deleteProducts, getItems } from '../../services/itemService';
import styles from './page.module.css';
import { useRouter } from 'next/navigation';
import toast, { Toaster, ToastBar } from 'react-hot-toast';

export default async function page() {
	const router = useRouter();
	const data = await getItems();
	console.log(data);

	const deleteId = (e) => {
		deleteProducts(e.target.value)
			.then(() => {
				console.log('Producto eliminado');
			})
			.catch((error) => {
				console.error('Error al actualizar el producto:', error);
				// Manejar el error de actualización del producto
			});
	};

	const notify = (t, e) => {
		console.log(e);
		toast.loading(
			<span>
				<h2 className="texto">
					Estas segura de que deseas eliminar este anillo?
				</h2>
				<button onClick={() => toast.dismiss(t.id)}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 20 20"
					>
						<path
							fill="#841030"
							d="M10 2c4.42 0 8 3.58 8 8s-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8zm5 11l-3-3l3-3l-2-2l-3 3l-3-3l-2 2l3 3l-3 3l2 2l3-3l3 3z"
						/>
					</svg>
				</button>
				<button onClick={deleteId} value={t.id}>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="35"
						height="35"
						viewBox="0 0 24 24"
					>
						<g
							stroke="#369681"
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
						>
							<circle cx="12" cy="12" r="9" fill="#369681" fill-opacity="0">
								<animate
									fill="freeze"
									attributeName="fill-opacity"
									begin="0.2s"
									dur="0.15s"
									values="0;0.3"
								/>
							</circle>
							<path
								fill="none"
								stroke-dasharray="14"
								stroke-dashoffset="14"
								d="M8 12L11 15L16 10"
							>
								<animate
									fill="freeze"
									attributeName="stroke-dashoffset"
									dur="0.2s"
									values="14;0"
								/>
							</path>
						</g>
					</svg>
				</button>
			</span>,
			{
				className: styles.toast,
			}
		);
	};

	/* const handleClick = (e) => {
		router.push(`/${e.target.id}`);
	}; */

	return (
		<table className={styles.table}>
			<thead className={styles.thead}>
				<tr className={styles.filas}>
					<th>Nombre Anillo</th>
					<th>Precio</th>
					<th>Descripción</th>
					<th>Categoria</th>
					<th>Talla</th>
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
							<button
								value={anillo.id}
								onClick={deleteId}
								className={styles.button}
							>
								Eliminar
							</button>
						</td>
					</tr>
				))}
			</tbody>
		</table>
	);
}
