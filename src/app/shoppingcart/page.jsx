'use client';
import React from 'react';
import styles from './shoppingcart.module.css';
import Cinta from '../components/cinta';
import Link from 'next/link';
import { useAppContext } from '../components/statewrapper';

export default function page() {
	const cart = useAppContext();

	function getTotal() {
		const total = cart.items.reduce((acc, item) => {
			return (acc += item.qty * item.precio);
		}, 0);
		return total;
	}
	return (
		<>
			<Cinta />
			<main className={styles.main}>
				<section className={styles.carro}>
					<div className={styles.contenido_carrito}>
						<div className={styles.estado_carrito}>
							<h3> El carrito de compras está vacío</h3>
						</div>
						<div className={styles.no_tienes_articulos}>
							{cart.items.length === 0 ? (
								<>
									<p>No tienes ningún artículo en tu carrito de compra.</p>
									<p>
										Haz click <Link href="/catalogo"> AQUÍ </Link> para ver el
										catálogo y seguir comprando
									</p>
								</>
							) : (
								<>
									<div>
										{cart.items.map((item) => (
											<div>
												{' '}
												{item.nombre} {item.precio} {item.id}{' '}
												{`cantidad: ${item.qty}`}
											</div>
										))}
									</div>
									<div>Total: ${getTotal()}</div>
								</>
							)}
						</div>
					</div>
				</section>
			</main>
		</>
	);
}

Cinta.defaultProps = {
	titulo_pagina: 'CARRITO DE COMPRAS',
	boton_volver: 'Volver a la tienda',
};
