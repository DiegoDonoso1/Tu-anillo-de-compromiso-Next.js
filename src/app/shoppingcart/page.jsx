import React from 'react';
import styles from './shoppingcart.module.css'
import Cinta from '../components/cinta';
import Link from 'next/link';



export default function page() {
	return (
        <>
        <Cinta />
		<main className={styles.main}>
        <section>
    <div className={styles.contenido_carrito}>
        <div className={styles.estado_carrito}>
                <h3> El carrito de compras está vacío</h3>
        </div>
    <div className={styles.no_tienes_articulos}>
        <p>No tienes ningún artículo en tu carrito de compra.</p>
        <p>Haz click <Link href="/catalogo"> AQUÍ </Link> para ver el catálogo y seguir comprando</p>
    </div>
    </div>
</section>
        </main>
</>
);
}

Cinta.defaultProps ={
titulo_pagina: 'CARRITO DE COMPRAS',
boton_volver: 'Volver a la tienda'
}
