import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './card.module.css';

export default function Card({ props }) {
	return (
		<div>
			{props !== undefined ? (
				<div className={style.card}>
					<Link href={`/detail/${props.id}`}>
						<Image
							src="/img/20230621_160101.jpg"
							alt="imagen anillo"
							width={260}
							height={260}
						/>
						<div className={style.mesage}>Comprar</div>
					</Link>
					<div className={style.cart}>
						<Link href="#">
							<span className={style.cart_span}></span>
						</Link>
					</div>
					<p className={style.categoria_anillo}>Plata</p>
					<h2 className={style.titulo_anillo}>{props.nombre} </h2>
					<p className={style.precio_anillo}>{props.precio}</p>
				</div>
			) : (
				<div className={style.card}>
					<Link href="/">
						<Image
							src="/img/20230621_160101.jpg"
							alt="imagen anillo"
							width={260}
							height={260}
						/>
						<div className={style.mesage}>Comprar</div>
					</Link>
					<div className={style.cart}>
						<Link href="#">
							<span className={style.cart_span}></span>
						</Link>
					</div>
					<p className={style.categoria_anillo}>Plata</p>
					<h2 className={style.titulo_anillo}>Anillo de plata corazon </h2>
					<p className={style.precio_anillo}>35.000</p>
				</div>
			)}
		</div>
	);
}
