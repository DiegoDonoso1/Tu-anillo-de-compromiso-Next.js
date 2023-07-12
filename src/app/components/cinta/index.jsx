import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './cinta.module.css';

export default function Cinta(props) {
	return (
		<>
			<div className={style.color_cinta}>
				<div className={style.contenedor_titulo_cinta}>
					<div className={style.boton_volver}>
						<Link href="/products">
							<Image src="/img/botonvolver.svg" alt="" width={20} height={20} />
							<p>{props.boton_volver}</p>
						</Link>
					</div>
					<div className={style.titulo_pagina}>
						<h2>{props.titulo_pagina}</h2>
					</div>
				</div>
			</div>
		</>
	);
}
