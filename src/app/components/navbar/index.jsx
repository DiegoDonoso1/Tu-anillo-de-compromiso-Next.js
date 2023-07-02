import React from 'react';
import styles from './navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			<header>
				<div className={styles.container}>
					<div className={styles.barra_envio}>
						<div className={styles.flex_left}>
							<ul className={`${styles.nav} ${styles.nav_left}`}>
								<li>
									<Link className={styles.link} href="#">
										<Image
											className={styles.phone_icon}
											src="/img/phone.svg"
											alt="phone-icon"
											width={16}
											height={16}
										/>
										<span className={styles.phone}>+56 9 4536 6752</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className={styles.flex_right}>
							<ul className={`${styles.nav} ${styles.nav_right}`}>
								<li className={styles.icon_li}>
									<Link href="#">
										<Image
											className={styles.icon}
											src="/img/ig-icon.svg"
											alt=""
											width={20}
											height={20}
										/>
									</Link>
								</li>
								<li className={styles.icon_li}>
									<Link href="#">
										<Image
											className={styles.icon}
											src="img/fb.svg"
											alt=""
											width={20}
											height={20}
										/>
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className={styles.contenedor_superior}>
					<div className={styles.contenedor_titulo}>
						<Link href="/">
							<Image
								src="/img/logo.png.svg"
								alt="logo-pagina"
								width={100}
								height={100}
							/>
						</Link>
						<button className={styles.button}>
							<Image
								className={styles.svg}
								src="/img/icons8-menu(1).svg"
								alt=""
								width={16}
								height={16}
							/>
						</button>
					</div>
					<nav className={styles.navbar}>
						<ul className={styles.lista}>
							<li className={styles.item}>
								<Link className={styles.link_nav} href="/products">
									Anillos
								</Link>
							</li>
							<li className={styles.item}>
								<Link href="/about">Nosotros</Link>
							</li>
							<li className={styles.item}>
								<Link href="#">Contactanos</Link>
							</li>
						</ul>
					</nav>
					<div className={styles.contenedor_utilidades}>
						<form>
							<input
								className={styles.buscador}
								type="text"
								placeholder="Buscar"
							/>
						</form>
						<Link href="/shoppingcart">
							<Image
								src="/img/carrito_compra.svg"
								alt="icono-carrito-compra"
								width={16}
								height={16}
							/>
						</Link>
					</div>
				</div>
			</header>
		</>
	);
}
