import React from 'react';
import styles from './page.module.css';
import Link from 'next/link';

export default function Faq() {
	return (
		<>
			<main className={styles.pr_main}>
				<div className={styles.pr_container}>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo1" />
						<label className={styles.pr_label} htmlFor="Titulo1">
							¿De donde somos?
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
								Somos de Freire, región de La Araucania, Chile.
							</p>
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo2" />
						<label className={styles.pr_label} htmlFor="Titulo2">
							¿Hacen entregas presenciales?
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
							Si, hacemos entregas presenciales en Freire, Pitrufquén y Temuco.

							</p>
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo3" />
						<label className={styles.pr_label} htmlFor="Titulo3">
						¿Hacen envíos?

						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
								Si, a todo Chile, a través de Starken a domicilio o sucursal (por pagar) 
							</p>
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo4" />
						<label className={styles.pr_label} htmlFor="Titulo4">
						 ¿Tienen tienda física?
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
							No, por el momento somos un emprendimiento online.
							</p>
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo5" />
						<label className={styles.pr_label} htmlFor="Titulo5">
						¿Qué materiales de joyas trabajan?
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
							Trabajamos Plata Ley 925, Plata con Oro de 14K.
							</p>
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo6" />
						<label className={styles.pr_label} htmlFor="Titulo6">
						¿Tienen garantía los anillos?
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
							Sólo por falla de fábrica, el cual será verificado por nuestros expertos si corresponde o no la garantía.
							</p>
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo7" />
						<label className={styles.pr_label} htmlFor="Titulo7">
						¿Cómo sé mi talla de anillo?
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
							Tenemos una guía disponible en la página, y un video explicativo. Para revisarlos haz </p>
							<Link className={styles.pr_a} href="/sizeguide">
											click aqui
										</Link>
							
						</div>
					</div>
					<div className={styles.pr_acord_container}>
						<input className={styles.pr_input} type="checkbox" id="Titulo8" />
						<label className={styles.pr_label} htmlFor="Titulo8">
						¿De qué otra forma puedo comunicarme con ustedes para resolver otras dudas? 
						</label>
						<div className={styles.Contenido_Acordeon}>
							<p>
							A través de nuestro WhatsApp: +569 79207723, estaremos felices de ayudarte.
							</p>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
