'use client';
import React, { useState, useEffect } from 'react';
import styles from './shoppingcart.module.css';
import Cinta from '../components/cinta';
import Link from 'next/link';
import { useAppContext } from '../components/statewrapper';
import FormClient from '../components/formCliente/index';

export default function page() {
	const cart = useAppContext();
	const [form, setForm] = useState(false);
	const [total, setTotal] = useState();

	useEffect(() => {
		const total = cart.items.reduce((acc, item) => {
			return (acc += item.qty * item.precio);
		}, 0);
		setTotal(total);
	}, [cart]);

	const handleButton = (e) => {
		e.preventDefault();
		setForm(true);
	};

	return (
		<>
			{/* 	<Cinta /> */}
			<main className={styles.main}>
				{form == false ? (
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
										<div>Total: ${total}</div>
										<button onClick={handleButton}>Continuar compra</button>
									</>
								)}
							</div>
						</div>
					</section>
				) : (
					<FormClient props={total} items={cart.items} />
				)}
			</main>
		</>
	);
}

Cinta.defaultProps = {
	titulo_pagina: 'CARRITO DE COMPRAS',
	boton_volver: 'Volver a la tienda',
};
