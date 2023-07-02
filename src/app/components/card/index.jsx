import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './card.module.css';

export default function Card() {
	return (
		<div className={style.card}>
			<Link href="/detail">
				<Image src="/img/20230621_160101.jpg" alt="" width={260} height={260} />
				<div className={style.mesage}>Comprar</div>
			</Link>
			<div className={style.cart}>
				<Link href="#">
					<span className={style.cart_span}></span>
				</Link>
			</div>
			<p className={style.categoria_anillo}>Plata</p>
			<h2 className={style.titulo_anillo}>Titulo anillo de oro </h2>
			<p className={style.precio_anillo}>$20.000</p>
		</div>
	);
}
