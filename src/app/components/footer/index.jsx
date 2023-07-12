import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';

export default function Footer() {
	return (
		<>
			<footer>
				<div className={styles.footer_container}>
					<div className={styles.f_contenedor}>
						<div className={styles.f_uno}>
							<Image
								className={styles.f_logo}
								src="/img/1-removebg-preview 1.svg"
								alt="tu-anillo-de-compromiso-logo"
								width={175}
								height={175}
							/>
						</div>
						<div className={styles.f_dos}>
							<input className={styles.f_input} type="checkbox" id="f_acord" />
							<label className={styles.f_label} htmlFor="f_acord">
								Nuestras Redes
							</label>
							<div className={styles.f_contenido}>
								<div className={styles.f_redes}>
									<Link
										className={styles.f_a}
										target="_blank"
										rel="noopener"
										href="https://www.instagram.com/tu.anillo.de.compromiso.chile/?hl=es-la"
									>
										<Image
											className={styles.f_ig}
											src="/img/ig-icon.svg"
											alt="instagram-logo"
											width={50}
											height={50}
										/>
									</Link>
									<Link
										className={styles.f_a}
										target="_blank"
										rel="noopener"
										href="https://www.facebook.com/anillosdecompromisochile/"
									>
										<Image
											className={styles.f_fb}
											src="/img/fb.svg"
											alt="facebook-logo"
											width={75}
											height={75}
										/>
									</Link>
								</div>
							</div>
						</div>
						<div className={styles.f_tres}>
							<input className={styles.f_input} type="checkbox" id="f_acord2" />
							<label className={styles.f_label} htmlFor="f_acord2">
								Ayuda
							</label>
							<div className={styles.f_contenido}>
								<ul>
									<li className={styles.f_list}>
										<Link className={styles.f_a} href="/sizeguide">
											Guía de tallas
										</Link>
									</li>
									<li className={styles.f_list}>
										<Link className={styles.f_a} href="/faq">
											Preguntas frecuentes
										</Link>
									</li>
									<li className={styles.f_list}>
										<Link className={styles.f_a} href="#">
											Políticas de la tienda
										</Link>
									</li>
								</ul>
							</div>
						</div>
						<div className={styles.f_cuatro}>
							<input className={styles.f_input} type="checkbox" id="f_acord3" />
							<label className={styles.f_label} htmlFor="f_acord3">
								Atencion Personalizada
							</label>
							<div className={styles.f_contenido}>
								<p className={styles.f_texto}>
									¡Hablanos! Queremos saber de tí.
								</p>
								<p className={styles.f_texto}>
									Horario de atencion: 00:00 - 00:00
								</p>
							</div>
						</div>
						<div className={styles.f_cinco}>
							<input className={styles.f_input} type="checkbox" id="f_acord4" />
							<label className={styles.f_label} htmlFor="f_acord4">
								Envios
							</label>
							<div className={styles.f_contenido}>
								<p className={styles.f_texto}>
									¡Envíos por Starken a todo chile!{' '}
								</p>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
